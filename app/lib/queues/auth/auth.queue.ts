import Bull from 'bull';
import { initAuthProcess } from './auth.process';
import type { User } from '@clerk/clerk-sdk-node';

const settings = {
  stalledInterval: 300000, // How often check for stalled jobs (use 0 for never checking).
  guardInterval: 5000, // Poll interval for delayed jobs and added jobs.
  drainDelay: 300, // A timeout for when the queue is in drained state (empty waiting for jobs).
};

const queue = new Bull('init-auth', {
  redis: process.env.REDIS_URL || '',
  settings,
});

queue.process(initAuthProcess);

export async function initializeAuthQueue(input: { user: User }) {
  const { user } = input;

  const redis = await queue.client;
  const inProgress = await redis.sismember(`init-auth:active`, user.id);
  if (inProgress) {
    console.log(`${user.id} is already in progress: ${queue.name}`);
    return false;
  }

  try {
    await redis.sadd('init-auth:active', user.id);
    await queue.add({ user });
    console.log(`${user.id} is added to queue: ${queue.name}`);
    return true;
  } catch (error) {
    console.log('initializeAuthQueue', error);
    return false;
  }
}
