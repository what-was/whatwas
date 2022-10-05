import type { Budget } from "@prisma/client";
import { prisma } from "~/db.server";

export type { Budget } from "@prisma/client";

export type BudgetResponse = Budget[];

interface GetBudgetFilters {
  startDate?: Date;
  endDate?: Date;
}

export function getBudget({
  id,
  userId,
  startDate,
  endDate,
}: Pick<Budget, "id" | "userId"> & GetBudgetFilters) {
  return prisma.budget.findFirst({
    where: {
      id,
      userId,
    },

    include: {
      incomes: {
        select: {
          id: true,
          amount: true,
        },
        where: {
          dueDate: {
            gte: startDate,
            lte: endDate,
          },
        },
      },
      expenses: {
        include: {
          products: {
            select: {
              id: true,
              name: true,
              price: true,
              source: true,
            },
          },
        },
      },
    },
  });
}

export function getBudgets({ userId }: { userId: Budget["userId"] }) {
  return prisma.budget.findMany({
    where: { userId },
    orderBy: { updatedAt: "desc" },
  });
}

export function createBudget({
  name,
  currency,
  userId,
}: Pick<Budget, "name" | "currency" | "userId">) {
  return prisma.budget.create({
    data: {
      name,
      currency,
      userId,
    },
  });
}

export function updateBudget({
  id,
  name,
  currency,
  userId,
}: Pick<Budget, "id" | "name" | "currency" | "userId">) {
  return prisma.budget.update({
    where: { id },
    data: {
      name,
      currency,
      userId,
    },
  });
}

export function deleteBudget({
  id,
  userId,
}: Pick<Budget, "id"> & { userId: Budget["userId"] }) {
  return prisma.budget.deleteMany({
    where: { id, userId },
  });
}
