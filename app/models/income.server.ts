import type { Income } from "@prisma/client";
import { prisma } from "~/db.server";

export function getIncome({
  id,
  budgetId,
  userId,
}: Pick<Income, "id" | "budgetId" | "userId">) {
  return prisma.income.findFirst({
    where: { id, budgetId, userId },
  });
}

export function getIncomes({
  budgetId,
  userId,
}: Pick<Income, "budgetId" | "userId">) {
  return prisma.income.findMany({
    where: { budgetId, userId },
    orderBy: { updatedAt: "desc" },
  });
}

export function createIncome({
  name,
  currency,
  budgetId,
  amount,
  dueDate,
  userId,
}: Pick<
  Income,
  "name" | "currency" | "amount" | "dueDate" | "budgetId" | "userId"
>) {
  return prisma.income.create({
    data: {
      name,
      currency,
      amount,
      dueDate,
      budgetId,
      userId,
    },
  });
}

export function updateIncome({
  id,
  name,
  currency,
  budgetId,
  amount,
  userId,
}: Pick<
  Income,
  "id" | "name" | "currency" | "amount" | "budgetId" | "userId"
>) {
  return prisma.income.update({
    where: { id },
    data: {
      name,
      currency,
      amount,
      budgetId,
      userId,
    },
  });
}

export function deleteIncome({
  id,
  budgetId,
  userId,
}: Pick<Income, "id" | "budgetId" | "userId">) {
  return prisma.income.deleteMany({
    where: { id, budgetId, userId },
  });
}
