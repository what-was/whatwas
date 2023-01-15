import { db } from '../db';
import { time } from '../timing.server';
import type { Timings } from '../timing.server';
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
  opts?: {
    timings?: Timings;
  },
) => {
  const handler = async () => {
    const requisitions = await db.walletRequisition.findMany({
      where: {
        userId,
      },
    });
    return requisitions;
  };

  if (opts?.timings)
    return time(handler, {
      timings: opts.timings,
      type: 'get-requisitions-of-user',
    });

  return await handler();
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
