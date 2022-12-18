import { clerkClient } from '@clerk/remix/api.server';
import { getAuth } from '@clerk/remix/ssr.server';
import { db } from '~/lib/db';
import type { User } from '@prisma/client';

type UserCreateInput = Partial<Omit<User, 'id' | 'createdAt' | 'updatedAt'>>;

export function createUser(user: UserCreateInput): Promise<User> {
  return db.user.create({
    data: user,
  });
}

export async function getUser(request: Request) {
  const { userId } = await getAuth(request);
  if (!userId) throw new Error('userId is required');

  return await clerkClient.users.getUser(userId);
}
