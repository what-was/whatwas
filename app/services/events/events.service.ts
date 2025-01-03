import { prisma } from '~/lib/db';
import type { Event } from '@prisma/client';

type GetEventsOfUserInput = {
  userId: string;
  limit?: number;
  skip?: number;
};

export async function getEventsOfUser(
  props: GetEventsOfUserInput,
): Promise<Event[]> {
  const { userId, limit = 10, skip = 0 } = props;

  return await prisma.event.findMany({
    where: {
      userMetaId: userId,
    },
    take: limit,
    skip,
  });
}
