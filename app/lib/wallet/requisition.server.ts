import { db } from '../db';
import type { WalletRequisition } from '@prisma/client';

interface RequisitionInput {
  userId: WalletRequisition['userId'];
  requisitionId: WalletRequisition['requisitionId'];
  agreementId: WalletRequisition['agreementId'];
}

export const createRequisition = async (input: RequisitionInput) => {
  const requisition = await db.walletRequisition.create({
    data: input,
  });
  return requisition;
};

export const getRequisitionsOfUser = async (
  userId: RequisitionInput['userId'],
) => {
  const requisitions = await db.walletRequisition.findMany({
    where: {
      userId,
    },
  });
  return requisitions;
};

export const getRequisition = async (
  requisitionId: RequisitionInput['requisitionId'],
) => {
  const requisition = await db.walletRequisition.findUnique({
    where: {
      requisitionId,
    },
  });
  return requisition;
};
