import { db } from '~/lib/db';
import type { Prisma, User, Password } from '@prisma/client';

interface CreateEmailUserParams {
  user: Pick<User, 'name' | 'email' | 'avatar'>;
  hashedPassword: Password['hash'];
  include?: Prisma.UserInclude;
}

export async function createEmailUser({
  user,
  hashedPassword,
  include,
}: CreateEmailUserParams) {
  return db.user.create({
    data: {
      ...user,
      password: {
        create: {
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
