import { db } from '../db';
import { time } from '../timing.server';
import type { Timings } from '../timing.server';
import type { Prisma } from '@prisma/client';

type RequisitionInput = Prisma.WalletRequisitionCreateInput;
export const createRequisition = async (input: RequisitionInput) => {
  const requisition = await db.walletRequisition.create({
    data: input,
  });
  return requisition;
};

export const getRequisitionsOfUser = async (
  userMetaId: string,
  opts?: {
    timings?: Timings;
  },
) => {
  const handler = async () => {
    const requisitions = await db.walletRequisition.findMany({
      where: {
        userMetaId,
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

export const getRequisition = async (requisitionId: string) => {
  const requisition = await db.walletRequisition.findUnique({
    where: {
      requisitionId,
    },
  });
  return requisition;
};
