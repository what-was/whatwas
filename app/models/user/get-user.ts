import { db } from '~/lib/db';
import type { Prisma, User } from '@prisma/client';

interface GetUserByIdParams {
  id: User['id'];
  include?: Prisma.UserInclude;
}

export async function getUserById({ id, include }: GetUserByIdParams) {
  return db.user.findUnique({
    where: { id },
    include: {
      password: include?.password || false,
      ...include,
    },
  });
}

interface GetUserByEmailParams {
  email: User['email'];
  include?: Prisma.UserInclude;
}

export async function getUserByEmail({ email, include }: GetUserByEmailParams) {
  if (typeof email !== 'string') throw new Error('email must be a string.');

  return db.user.findUnique({
    where: { email },
    include: {
      password: include?.password || false,
      ...include,
    },
  });
}
