/**
 * @file Defines the queries for the walletAccounts table/view.
 */

import { db } from '~/lib/db';
import type { SerializeInput } from '~/types/misc';
import type { Prisma, WalletAccount } from '@prisma/client';

export const serializeInput: SerializeInput<WalletAccount> = (input) => {
  const { id, createdAt, updatedAt, deletedAt, ...rest } = input;
  return {
    ...rest,
  };
};

export async function createWalletAccount(
  data: Prisma.WalletAccountCreateInput,
) {
  await db.walletAccount.create({
    data,
  });
}

export async function createWalletAccounts(
  data: Prisma.WalletAccountCreateManyInput,
) {
  await db.walletAccount.createMany({
    data,
  });
}

export async function getWalletAccountByAccountId(
  accountId: WalletAccount['accountId'],
) {
  return await db.walletAccount.findUnique({
    where: {
      accountId,
    },
  });
}

export async function getWalletAccountsByRequisitionId(
  requisitionId: WalletAccount['requisitionId'],
) {
  return await db.walletAccount.findMany({
    where: {
      requisitionId,
    },
  });
}

export async function getWalletAccountsByUserId(
  userMetaId: WalletAccount['userMetaId'],
) {
  return await db.walletAccount.findMany({
    where: {
      userMetaId,
    },
  });
}

export async function updateWalletAccount(
  args: Prisma.WalletAccountUpdateArgs,
) {
  await db.walletAccount.update(args);
}
