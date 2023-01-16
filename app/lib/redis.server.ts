import Redis from 'ioredis';
import { getRequiredServerEnvVar } from './utils/misc';

const REDIS_URL = getRequiredServerEnvVar('REDIS_URL');

let client = new Redis(REDIS_URL, {
  timeout: 5000,
  disconnectTimeout: 10000,
});

export async function getRedisClient() {
  if (!client || client.status === 'end') {
    console.log('Creating new Redis client');
    console.log('redis', client);
    client = new Redis(REDIS_URL);
  }

  return client;
}
