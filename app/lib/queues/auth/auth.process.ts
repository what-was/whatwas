import { createUserMeta } from '~/lib/user.server';
import type { ProcessCallbackFunction } from 'bull';
import type { User } from '@clerk/clerk-sdk-node';

interface AccountQueueData {
  user: User;
}

export const initAuthProcess: ProcessCallbackFunction<
  AccountQueueData
> = async (job, done) => {
  const { user } = job.data;

  if (!user || !user.id) {
    return;
  }

  await Promise.all([
    job.queue.client.srem('init-auth:active', user.id),
    createUserMeta({
      clerkId: user.id,
    }),
  ]);

  typeof done === 'function' && done();
  return;
};
