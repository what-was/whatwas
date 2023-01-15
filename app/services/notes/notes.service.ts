import { db } from '~/lib/db';
import type { Note } from '@prisma/client';

type GetNotesOfUserInput = {
  userId: string;
  limit?: number;
  skip?: number;
};

export async function getNotesOfUser(
  props: GetNotesOfUserInput,
): Promise<Note[]> {
  const { userId, limit = 10, skip = 0 } = props;

  return await db.note.findMany({
    where: {
      userMetaId: userId,
    },
    take: limit,
    skip,
  });
}
