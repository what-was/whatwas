import { db } from '~/lib/db';
import type { Prisma, User, Password } from '@prisma/client';

interface UpdateUserPasswordParams {
  email: User['email'];
  hashedPassword: Password['hash'];
  include?: Prisma.UserInclude;
}

export async function updateUserPassword({
  email,
  hashedPassword,
  include,
}: UpdateUserPasswordParams) {
  if (typeof email !== 'string') throw new Error('email must be a string.');

  return db.user.update({
    where: { email },
    data: {
      password: {
        update: {
          hash: hashedPassword,
        },
      },
    },
    include: {
      password: include?.password || false,
      ...include,
    },
  });
}
