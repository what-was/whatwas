import { getNordigenClient } from '~/lib/nordigen.server';
import {
  insertAccountData,
  insertWalletAccount,
} from '~/lib/wallet/account.server';
import type { Job } from 'bull';

interface AccountQueueData {
  accountId: string;
  requisitionId: string;
  userId: string;
  token: string;
}

export const fetchAccountProcess = async (job: Job<AccountQueueData>) => {
  const { accountId, requisitionId, userId, token } = job.data;
  console.log('job.data', job.data);

  if (!userId) {
    return;
  }

  const { client: nordigenClient } = await getNordigenClient({ token });
  const account = nordigenClient.account(accountId);

  console.log('account', account);

  const metadata = await account.getMetadata();
  console.log('metadata', metadata);
  const balances = await account.getBalances();
  console.log('balances', balances);
  const details = await account.getDetails();
  console.log('details', details);
  const transactions = await account.getTransactions();

  const accountData = {
    metadata,
    balances,
    details,
    transactions,
  };

  try {
    return await Promise.all([
      insertWalletAccount({
        userId,
        requisitionId,
        accountId,
        balance: balances.balances[0].balanceAmount.amount,
      }),
      insertAccountData({ accountData, userId }),
    ]);
  } catch (error: any) {
    console.log('failed queue', error);
    return job.moveToFailed(error);
  }
};
