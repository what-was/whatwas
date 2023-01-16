import Bull from 'bull';
import { getRequiredServerEnvVar } from '~/lib/utils/misc';
import { initAuthProcess } from './auth.process';
import type { User } from '@clerk/clerk-sdk-node';

const redisUrl = getRequiredServerEnvVar('REDIS_URL');
const queue = new Bull('init-auth', {
  redis: redisUrl,
});

queue.process(initAuthProcess);

export async function initializeAuthQueue(input: { user: User }) {
  const { user } = input;

  const redisClient = queue.client;

  const inProgress = await redisClient.sismember(`init-auth:active`, user.id);
  if (inProgress) {
    console.log(`${user.id} is already in progress: ${queue.name}`);
    return false;
  }

  try {
    await redisClient.sadd('init-auth:active', user.id);
    await queue.add({ user });
    console.log(`${user.id} is added to queue: ${queue.name}`);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
