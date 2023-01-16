import { clerkClient } from '@clerk/remix/api.server';
import { redirect } from '@remix-run/node';
import { getAuth } from '@clerk/remix/ssr.server';
import { db } from '~/lib/db';
import { REDIRECT_ROUTES } from '~/lib/constants';
import { getRedirectTo } from '~/lib/utils/http';
import { initializeAuthQueue } from './queues/auth/auth.queue';
import { time } from './timing.server';
import { getRedisClient } from './redis.server';
import type { Prisma } from '@prisma/client';
import type { Timings } from './timing.server';

type UserMetaCreateInput = Prisma.UserMetaCreateInput;

interface RequestOpts {
  timings?: Timings;
}

export const authenticatedRequest = async (
  request: Request,
  opts?: RequestOpts,
) => {
  const handler = async () => {
    const { href } = new URL(request.url);
    const redirectTo = getRedirectTo(request, href);
    const unauthenticatedRedirect = `${REDIRECT_ROUTES.GUEST}?redirectTo=${redirectTo}`;

    try {
      const { userId } = await getAuth(request);
      if (!userId) {
        throw redirect(unauthenticatedRedirect);
      }

      return { userId };
    } catch (error) {
      throw redirect(unauthenticatedRedirect);
    }
  };

  if (opts?.timings)
    return time(handler, {
      timings: opts.timings,
      type: 'authenticated-request',
    });

  return await handler();
};

export const unauthenticatedRequest = async (request: Request) => {
  try {
    const { userId } = await getAuth(request);

    if (userId) {
      const redirectTo = getRedirectTo(request, REDIRECT_ROUTES.AUTHENTICATED);
      throw redirect(redirectTo);
    }
  } catch (error: any) {}

  console.log('keeps going');
  return { userId: null };
};

const getUserFromCache = async (clerkId: string) => {
  const redisClient = await getRedisClient();

  const user = await redisClient.get(`user:${clerkId}`);
  return user ? JSON.parse(user) : null;
};

export async function getUser(clerkId: string, opts?: RequestOpts) {
  const handler = async () => {
    const cachedUser = await getUserFromCache(clerkId);
    if (cachedUser) {
      return cachedUser;
    }

    const user = await clerkClient.users.getUser(clerkId);
    if (!user) {
      throw new Error(`User not found: ${clerkId}`);
    }

    const redisClient = await getRedisClient();
    await redisClient.setex(
      `user:${user.id}`,
      60 * 60 * 24,
      JSON.stringify(user),
    );

    return user;
  };

  if (opts?.timings)
    return time(handler, {
      timings: opts.timings,
      type: 'get-user',
    });

  return await handler();
}

export async function getUserFromRequest(request: Request, opts?: RequestOpts) {
  const handler = async () => {
    const { userId } = await authenticatedRequest(request, {
      timings: opts?.timings,
    });
    return await getUser(userId, { timings: opts?.timings });
  };

  if (opts?.timings)
    return time(handler, {
      timings: opts.timings,
      type: 'get-user-from-request',
    });

  return await handler();
}

export async function getUserMeta(clerkId: string) {
  return await db.userMeta.findUnique({
    where: {
      clerkId,
    },
  });
}

export async function createUserMeta(input: UserMetaCreateInput) {
  return await db.userMeta.create({
    data: input,
  });
}

export async function initializeUserMeta(request: Request) {
  const { userId } = await authenticatedRequest(request);
  const redirectTo = getRedirectTo(request, REDIRECT_ROUTES.AUTHENTICATED);

  try {
    const clerkUser = await getUser(userId);
    if (!clerkUser) {
      // throw new Error(`No registered user associated with id: ${userId} found`);
      throw redirect(`${REDIRECT_ROUTES.GUEST}/?redirectTo=${redirectTo}`);
    }

    const existingUserMeta = await getUserMeta(userId);
    if (existingUserMeta) {
      return;
    }

    return await initializeAuthQueue({ user: clerkUser });
  } catch (error) {
    throw redirect(`${REDIRECT_ROUTES.GUEST}/?redirectTo=${redirectTo}`);
  }
}

export async function updateUserMeta(
  clerkId: string,
  input: UserMetaCreateInput,
) {
  return await db.userMeta.update({
    where: {
      clerkId,
    },
    data: input,
  });
}

export async function deleteUserMeta(clerkId: string) {
  return await db.userMeta.delete({
    where: {
      clerkId,
    },
  });
}

export async function getUserByUsername(clerkId: string) {
  return await db.userMeta.findUnique({
    where: {
      clerkId,
    },
  });
}
