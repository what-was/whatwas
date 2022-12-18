import { db } from '~/lib/db';
import type { User } from '@prisma/client';

type UserCreateInput = Partial<Omit<User, 'id' | 'createdAt' | 'updatedAt'>>;

export function createUser(user: UserCreateInput): Promise<User> {
  return db.user.create({
    data: user,
  });
}

export function getUser(userId: User['userId']): Promise<User | null> {
  if (!userId) throw new Error('userId is required');

  return db.user.findUnique({
    where: { userId },
  });
}
