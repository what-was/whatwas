import type { Product } from "@prisma/client";

import { prisma } from "~/db.server";

type UnnecessaryFields =
  | "id"
  | "createdAt"
  | "updatedAt"
  | "expenseIDs"
  | "tagIDs";

type WithoutUnnecessaryFields<T> = Omit<T, UnnecessaryFields>;

type CreateFn<T> = (
  data: T extends (infer U)[]
    ? WithoutUnnecessaryFields<Product>[]
    : WithoutUnnecessaryFields<Product>
) => Promise<T>;

export async function getProduct({ id }: Pick<Product, "id">) {
  return await prisma.product.findFirst({
    where: { id },
  });
}

export async function getProductBySource({ source }: Pick<Product, "source">) {
  return await prisma.product.findFirst({
    where: { source },
  });
}

export async function getProductsOfUser({
  userId,
  options,
}: Pick<Product, "userId"> & {
  options?: {
    take?: number;
    skip?: number;
  };
}) {
  return await prisma.product.findMany({
    where: { userId },
    orderBy: { updatedAt: "desc" },
    take: options?.take,
    skip: options?.skip,
  });
}

export const createProduct: CreateFn<Product> = async (data) => {
  return await prisma.product.create({
    data,
  });
};

export const createAndReturnProduct: CreateFn<Product[]> = async (products) => {
  const productsTransactions = products.map((product) =>
    prisma.product.create({
      data: {
        name: product.name,
        currency: product.currency,
        price: product.price,
        source: product.source,
        userId: product.userId,
      },
    })
  );

  return await prisma.$transaction(productsTransactions);
};

export async function deleteProduct({
  id,
  userId,
}: Pick<Product, "id" | "userId">) {
  return await prisma.product.deleteMany({
    where: { id, userId },
  });
}
