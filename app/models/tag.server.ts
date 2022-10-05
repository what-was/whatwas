import type { User, Tag } from "@prisma/client";

import { prisma } from "~/db.server";

export async function getTag({ id }: Pick<Tag, "id">) {
  return await prisma.tag.findFirst({
    where: { id },
  });
}

export async function getTagsOfUser({ userId }: Pick<Tag, "userId">) {
  return await prisma.tag.findMany({
    where: { userId },
    orderBy: { updatedAt: "desc" },
  });
}

export async function createTag({
  name,
  userId,
}: Pick<Tag, "name"> & {
  userId: User["id"];
}) {
  return prisma.tag.create({
    data: {
      name,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });
}

export async function createTags({
  tags,
  userId,
}: {
  tags: Array<Pick<Tag, "name">>;
  userId: User["id"];
}) {
  const tagTransactions = tags.map((tag) =>
    prisma.tag.create({
      data: {
        name: tag.name,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    })
  );

  return await prisma.$transaction(tagTransactions);
}

export async function createProducts({
  tags,
  userId,
}: { tags: Array<Pick<Tag, "name">> } & {
  userId: User["id"];
}) {
  return prisma.tag.createMany({
    data: tags.map((tag) => ({
      name: tag.name,
      user: {
        connect: {
          id: userId,
        },
      },
      userId,
    })),
    skipDuplicates: true,
  });
}

export async function deleteTag({
  id,
  userId,
}: Pick<Tag, "id"> & { userId: User["id"] }) {
  return await prisma.tag.deleteMany({
    where: { id, userId },
  });
}
