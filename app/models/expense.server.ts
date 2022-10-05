import type { Expense, Product } from "@prisma/client";

import { prisma } from "~/db.server";

export function getExpense({ id, userId }: Pick<Expense, "id" | "userId">) {
  return prisma.expense.findFirst({
    where: { id, userId },
  });
}

export function getExpensesByBudgetId({
  userId,
  budgetId,
}: {
  userId: Expense["userId"];
  budgetId: Expense["budgetId"];
}) {
  return prisma.expense.findMany({
    where: { userId, budgetId },
  });
}

// TODO: createExpense
export async function createExpense({
  name,
  priority,
  description,
  products,
  budgetId,
  userId,
}: Pick<
  Expense,
  "name" | "budgetId" | "description" | "priority" | "userId"
> & {
  products: Array<Product["id"]>;
}) {
  return await prisma.expense.create({
    data: {
      name,
      priority,
      description,
      budget: {
        connect: {
          id: budgetId,
        },
      },
      userId,
      products: {
        connect: products.map((id) => ({ id })),
      },
    },
  });
}

export function deleteExpense({ id, userId }: Pick<Expense, "id" | "userId">) {
  return prisma.expense.deleteMany({
    where: { id, userId },
  });
}
