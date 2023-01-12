import Bull from 'bull';
import invariant from 'tiny-invariant';
import { fetchAccountProcess } from './account.process';

const redisUrl = process.env.REDIS_URL;
invariant(redisUrl, 'REDIS_URL is not defined');

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
  console.log('await queue.isReady()', await queue.isReady());
  console.log('queue.getActive()', await queue.getActive());

  accounts.forEach(async (acc) => {
    const data = { ...rest, accountId: acc };
    await queue.add(data);
    console.log(`${acc}: added to queue`);
  });

  return true;
};
