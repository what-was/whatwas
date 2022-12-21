import { clerkClient } from '@clerk/remix/api.server';
import { generateFromEmail } from 'unique-username-generator';
import { db } from '~/lib/db';
import type { UserMeta, Prisma } from '@prisma/client';

type UserMetaCreateInput = Prisma.UserMetaCreateInput;

export function createUser(input: UserMetaCreateInput): Promise<UserMeta> {
  return db.userMeta.create({
    data: input,
  });
}

export async function getUser(userId: string) {
  return await clerkClient.users.getUser(userId);
}

export async function getUserMeta(userId: string) {
  return await db.userMeta.findUnique({
    where: {
      userId,
    },
  });
}

export async function createUserMeta(input: UserMetaCreateInput) {
  return await db.userMeta.create({
    data: input,
  });
}

export async function initializeUserMeta(userId: string) {
  const clerkUser = await getUser(userId);
  if (!clerkUser) {
    throw new Error('No registered user found');
  }

  const primaryEmail = clerkUser.emailAddresses.find(
    (email) => email.id === clerkUser.primaryEmailAddressId,
  );
  if (!primaryEmail || !primaryEmail.emailAddress) {
    throw new Error('No primary email address found');
  }

  let username = clerkUser.username;

  if (!username) {
    const updatedUser = await clerkClient.users.updateUser(userId, {
      username: generateFromEmail(primaryEmail.emailAddress),
    });
    if (!updatedUser.username) {
      throw new Error('Unexpected error while generating username');
    }

    username = updatedUser.username;
  }

  return await createUserMeta({
    email: primaryEmail.emailAddress,
    userId: clerkUser.id,
    username,
  });
}

export async function updateUserMeta(
  userId: string,
  input: UserMetaCreateInput,
) {
  return await db.userMeta.update({
    where: {
      userId,
    },
    data: input,
  });
}

export async function deleteUserMeta(userId: string) {
  return await db.userMeta.delete({
    where: {
      userId,
    },
  });
}

export async function getUserByUsername(username: string) {
  return await db.userMeta.findUnique({
    where: {
      username,
    },
  });
}
