import { unauthorized } from 'remix-utils';
import { redirect } from '@remix-run/node';
import { getAuth } from '@clerk/remix/ssr.server';
import { hoursToMinutes } from 'date-fns';
import clerkClient from '@clerk/clerk-sdk-node';
import { authRedirectUrl } from '~/lib/http';
import { REDIRECT_ROUTES } from '~/lib/constants';
import { db } from '~/lib/db';
import { initializeAuthQueue } from './queues/auth/auth.queue';
import { time } from './timing.server';
import { redis } from './redis.server';
import type { DataFunctionArgs } from '@remix-run/node';
import type { User } from '@clerk/remix/api.server';
import type { Prisma } from '@prisma/client';
import type { Timings } from './timing.server';

type UserMetaCreateInput = Prisma.UserMetaCreateInput;

interface RequestOpts {
  timings?: Timings;
}

export const redirectAfterAuth = (request: Request, shouldRedirect = true) => {
  throw shouldRedirect
    ? redirect(authRedirectUrl(request))
    : unauthorized({ redirectTo: authRedirectUrl(request) });
};

export const authenticatedRequest = async (
  args: DataFunctionArgs,
  opts?: RequestOpts,
  shouldRedirectAfterAuth = true,
) => {
  const { request } = args;
  const handler = async () => {
    try {
      const { userId } = await getAuth(args);
      if (!userId) {
        throw redirectAfterAuth(request, shouldRedirectAfterAuth);
      }

      return { userId };
    } catch (error) {
      throw redirectAfterAuth(request, shouldRedirectAfterAuth);
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
  args: DataFunctionArgs,
  opts?: RequestOpts,
  shouldRedirectAfterAuth = true,
) => {
  const { request } = args;

  const handler = async () => {
    try {
      const { userId } = await getAuth(args);
      if (userId) {
        throw redirectAfterAuth(request, shouldRedirectAfterAuth);
      }
    } catch (error: any) {}

    throw redirectAfterAuth(request, shouldRedirectAfterAuth);
  };

  if (opts?.timings)
    return time(handler, {
      timings: opts.timings,
      type: 'unauthenticatedRequest-request',
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

      await redis.setex(
        `user:${user.id}`,
        hoursToMinutes(6),
        JSON.stringify(user),
      );

      return user;
    } catch (error: any) {
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

export async function getUserFromRequest(
  args: DataFunctionArgs,
  opts?: RequestOpts,
  shouldRedirectAfterAuth = true,
) {
  const { request } = args;

  const handler = async () => {
    try {
      const { userId } = await authenticatedRequest(args, {
        timings: opts?.timings,
      });

      const user = await getUser(userId, { timings: opts?.timings });
      if (!user) {
        throw redirectAfterAuth(request, shouldRedirectAfterAuth);
      }

      return user;
    } catch (error) {
      throw redirectAfterAuth(request, shouldRedirectAfterAuth);
    }
  };

  if (opts?.timings)
    return time(handler(), {
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
