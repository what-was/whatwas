import { createUserMeta } from '~/lib/auth';
import type { ProcessCallbackFunction } from 'bull';
import type { User } from '@clerk/express';

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

  try {
    await createUserMeta({
      clerkId: user.id,
    });
    await job.queue.client.srem('init-auth:active', user.id);
  } catch (error) {
    // await job.queue.client.
    console.error(error);
  }

  typeof done === 'function' && done();
  return;
};
