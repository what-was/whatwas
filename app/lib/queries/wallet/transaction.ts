import { db } from '~/lib/db';
import type { Prisma } from '@prisma/client';
import type { SerializeInput } from '~/types/misc';

interface WalletTransactionInput extends Prisma.WalletTransactionCreateInput {}

export const serializeInput: SerializeInput<WalletTransactionInput> = (
  input,
) => {
  const { id, createdAt, updatedAt, deletedAt, ...rest } = input;
  return {
    ...rest,
  };
};

export async function createOrUpdateTransactions(
  transactions: WalletTransactionInput[],
) {
  await db.walletTransaction.createMany({
    data: transactions.map(serializeInput),
  });
}
