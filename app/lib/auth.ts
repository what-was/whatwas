import { clerkClient } from '@clerk/express';
import { ActionFunctionArgs, LoaderFunctionArgs, redirect } from '@remix-run/node';
import { getAuth } from '@clerk/remix/ssr.server';
import { hoursToMinutes } from 'date-fns';
import { prisma } from '~/lib/db';
import { REDIRECT_ROUTES } from '~/lib/constants';
import { getRedirectTo, removeTrailSlash } from '~/lib/http';
import { initializeAuthQueue } from './queues/auth/auth.queue';
import { time } from './timing.server';
import { redis } from './redis.server';
import type { UserResource } from '@clerk/types';
import type { User } from '@clerk/remix/api.server';
import type { Prisma } from '@prisma/client';
import type { Timings } from './timing.server';
import { MaybeJsonified } from '~/types';

type UserMetaCreateInput = Prisma.UserMetaCreateInput;

export type AuthUser = UserResource;

interface RequestOpts {
  timings?: Timings;
}

function unauthorized({ redirectTo }: { redirectTo: string }) {
  throw redirect(redirectTo, { status: 401 });
}

export const requireUserId = async (
  args: LoaderFunctionArgs | ActionFunctionArgs,
  opts?: RequestOpts,
) => {
  const handler = async () => {
    const { pathname } = new URL(args.request.url);
    const redirectTo = getRedirectTo(args, removeTrailSlash(pathname));
    const unauthenticatedRedirect = `${REDIRECT_ROUTES.GUEST}?redirectTo=${redirectTo}`;

    try {
      const { userId } = await getAuth(args);
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

const getUserFromCache = async (clerkId: string): Promise<User | null> => {
  const user = await redis.get(`user:${clerkId}`);
  if (!user) return null;
  return JSON.parse(user);
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
        return null;
      }

      await redis.setex(
        `user:${user.id}`,
        hoursToMinutes(6),
        JSON.stringify(user),
      );

      return user;
    } catch (error: any) {
      return null;
    }
  };

  if (opts?.timings)
    return time(handler, {
      timings: opts.timings,
      type: 'get-user',
    });

  return await handler();
}

export async function getUserFromRequest(args: LoaderFunctionArgs | ActionFunctionArgs, opts?: RequestOpts) {
  const handler = async () => {
    try {
      const { userId } = await requireUserId(args, {
        timings: opts?.timings,
      });

      const user = await getUser(userId, { timings: opts?.timings });
      if (!user) {
        throw redirect(getRedirectTo(args, REDIRECT_ROUTES.GUEST));
      }

      return user;
    } catch (error) {
      throw redirect(getRedirectTo(args, REDIRECT_ROUTES.GUEST));
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
  return await prisma.userMeta.findUnique({
    where: {
      clerkId,
    },
  });
}

export async function createUserMeta(input: UserMetaCreateInput) {
  return await prisma.userMeta.create({
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
    throw redirect(`/onboarding?redirectTo=${redirectTo}`);
  }
}

export async function updateUserMeta(
  clerkId: string,
  input: UserMetaCreateInput,
) {
  return await prisma.userMeta.update({
    where: {
      clerkId,
    },
    data: input,
  });
}

export async function updateClerkMeta(userId: string, input: {
  birthDate?: string
}) {
  return await clerkClient.users.updateUser(userId, {
    privateMetadata: input,
  })
}

export async function deleteUserMeta(clerkId: string) {
  return await prisma.userMeta.delete({
    where: {
      clerkId,
    },
  });
}

export async function getUserByUsername(clerkId: string) {
  return await prisma.userMeta.findUnique({
    where: {
      clerkId,
    },
  });
}
