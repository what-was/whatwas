import { db } from '~/lib/db';
import type { Prisma, User } from '@prisma/client';

interface DeleteUserParams {
  id: User['id'];
  include?: Prisma.UserInclude;
}

export async function deleteUser({ id, include }: DeleteUserParams) {
  return db.user.delete({
    where: { id },
    include: {
      password: include?.password || false,
      ...include,
    },
  });
}
