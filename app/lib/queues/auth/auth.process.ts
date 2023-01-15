import { createUserMeta } from '~/lib/user.server';
import type { Job } from 'bull';
import type { User } from '@clerk/clerk-sdk-node';

interface AccountQueueData {
  user: User;
}

export const initAuthProcess = async (job: Job<AccountQueueData>) => {
  const { user } = job.data;

  if (!user || !user.id) {
    return;
  }

  return await Promise.all([
    job.queue.client.srem('init-auth:active', user.id),
    createUserMeta({
      clerkId: user.id,
    }),
  ]);
};
