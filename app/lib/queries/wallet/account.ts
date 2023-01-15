/**
 * @file Defines the queries for the walletAccounts table/view.
 */

import invariant from 'tiny-invariant';
import { db } from '~/lib/db';
import type { SerializeInput } from '~/types/misc';
import type { Prisma } from '@prisma/client';

interface WalletAccountInput extends Prisma.WalletAccountCreateInput {}

export const serializeInput: SerializeInput<WalletAccountInput> = (input) => {
  const { id, createdAt, updatedAt, deletedAt, ...rest } = input;
  return {
    ...rest,
  };
};

export async function createWalletAccount(input: WalletAccountInput) {
  await db.walletAccount.create({
    data: serializeInput(input),
  });
}

export async function createWalletAccounts(inputs: WalletAccountInput[]) {
  await db.walletAccount.createMany({
    data: inputs.map(serializeInput),
  });
}

export async function getWalletAccountByAccountId(
  accountId: WalletAccountInput['accountId'],
) {
  return await db.walletAccount.findUnique({
    where: {
      accountId,
    },
  });
}

export async function getWalletAccountsByRequisitionId(
  requisitionId: WalletAccountInput['requisitionId'],
) {
  return await db.walletAccount.findMany({
    where: {
      requisitionId,
    },
  });
}

export async function getWalletAccountsByUserId(
  userId: WalletAccountInput['userId'],
) {
  return await db.walletAccount.findMany({
    where: {
      userId,
    },
  });
}

export async function updateWalletAccount(input: WalletAccountInput) {
  invariant(
    input.id,
    'WalletAccount ID is required to update a wallet account',
  );
  await db.walletAccount.update({
    where: {
      id: input.id,
    },
    data: serializeInput(input),
  });
}
