import { unauthorized } from 'remix-utils';
import { clerkClient } from '@clerk/remix/api.server';
import { redirect } from '@remix-run/node';
import { getAuth } from '@clerk/remix/ssr.server';
import { db } from '~/lib/db';
import { REDIRECT_ROUTES } from '~/lib/constants';
import { getRedirectTo, removeTrailSlash } from '~/lib/http';
import { initializeAuthQueue } from './queues/auth/auth.queue';
import { time } from './timing.server';
import { redis } from './redis.server';
import type { User } from '@clerk/remix/api.server';
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
    const { pathname } = new URL(request.url);
    const redirectTo = getRedirectTo(request, removeTrailSlash(pathname));
    const unauthenticatedRedirect = `${REDIRECT_ROUTES.GUEST}?redirectTo=${redirectTo}`;

    try {
      const { userId } = await getAuth(request);
      if (!userId) throw unauthorized({ redirectTo: unauthenticatedRedirect });

      return { userId };
    } catch (error) {
      throw unauthorized({ redirectTo: unauthenticatedRedirect });
    }
  };

  if (opts?.timings)
    return time(handler, {
      timings: opts.timings,
      type: 'authenticated-request',
    });

  return await handler();
};

export const unauthenticatedRequest = async (
  request: Request,
  opts?: RequestOpts,
) => {
  const handler = async () => {
    try {
      const { userId } = await getAuth(request);
      if (!userId) {
        return;
      }
    } catch (error: any) {}

    const redirectTo = getRedirectTo(request, REDIRECT_ROUTES.AUTHENTICATED);
    throw { redirectTo };
  };

  if (opts?.timings)
    return time(handler, {
      timings: opts.timings,
      type: 'authenticated-request',
    });

  return await handler();
};

const getUserFromCache = async (clerkId: string): Promise<User> => {
  return (await redis.get(`user:${clerkId}`)) as User;
};

export async function getUser(clerkId: string, opts?: RequestOpts) {
  const handler = async () => {
    try {
      const cachedUser = await getUserFromCache(clerkId);
      if (cachedUser) {
        return cachedUser;
      }

      const user = await clerkClient.users.getUser(clerkId);
      if (!user) {
        throw new Error(`User not found: ${clerkId}`);
      }

      await redis.setex(`user:${user.id}`, 60 * 60 * 24, JSON.stringify(user));

      return user;
    } catch (error: any) {
      console.error(error);
      throw error;
    }
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

export async function initializeUserMeta(
  userId: string,
  redirectTo: string,
): Promise<void> {
  const clerkUser = await getUser(userId);
  if (!clerkUser) {
    throw redirect(`${REDIRECT_ROUTES.GUEST}?redirectTo=${redirectTo}`);
  }

  const existingUserMeta = await getUserMeta(userId);
  if (!existingUserMeta) {
    await initializeAuthQueue({ user: clerkUser });
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
