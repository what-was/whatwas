import Redis from 'ioredis';
import { getRequiredServerEnvVar } from './utils/misc';

const REDIS_URL = getRequiredServerEnvVar('REDIS_URL');

let client = new Redis(REDIS_URL, {
  timeout: 5000,
  disconnectTimeout: 10000,
});

export async function getRedisClient() {
  if (!client || client.status === 'end') {
    client = new Redis(REDIS_URL, {
      lazyConnect: true,
      timeout: 5000,
      disconnectTimeout: 10000,
    });
  }

  return client;
}

client.on('ready', () => {
  console.log('Redis client connected and ready to use');
});

client.on('error', (err) => {
  console.log(`Something went wrong ${err}`);
});

client.on('disconnect', () => {
  console.log('Redis client disconnected');
});

process.on('SIGINT', () => {
  client?.disconnect();
});
