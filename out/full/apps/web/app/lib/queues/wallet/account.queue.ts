import Bull from 'bull';
import { fetchAccountProcess } from './account.process';

const settings = {
  stalledInterval: 300000, // How often check for stalled jobs (use 0 for never checking).
  guardInterval: 5000, // Poll interval for delayed jobs and added jobs.
  drainDelay: 300, // A timeout for when the queue is in drained state (empty waiting for jobs).
};

const queue = new Bull('walletAccount', {
  redis: process.env.UPSTASH_REDIS_URL,
  settings,
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
