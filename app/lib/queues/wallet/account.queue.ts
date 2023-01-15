import Bull from 'bull';
import { getRequiredServerEnvVar } from '~/lib/utils/misc';
import { fetchAccountProcess } from './account.process';

const redisUrl = getRequiredServerEnvVar('REDIS_URL');
const queue = new Bull('walletAccount', {
  redis: redisUrl,
});

queue.process(fetchAccountProcess);

export const initializeMultipleAccountsQueue = async (input: {
  accounts: string[];
  requisitionId: string;
  token: string;
  userId: string;
}) => {
  const { accounts, ...rest } = input;

  accounts.forEach(async (acc) => {
    const data = { ...rest, accountId: acc };
    await queue.add(data);
    console.log(`${acc}: added to queue`);
  });

  return true;
};
