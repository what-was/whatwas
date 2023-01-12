import Redis from 'ioredis';
import Queue from 'bull';
import invariant from 'tiny-invariant';
import type { RedisOptions } from 'ioredis';

const { REDIS_URL } = process.env;
invariant(REDIS_URL, 'REDIS_URL is not defined');
export { REDIS_URL };

let client: Redis;
let subscriber: Redis;

interface CreateClientOpts {
  type: 'client' | 'subscriber' | 'bclient' | string;
  redisOpts: RedisOptions;
}

const defaultOpts: Queue.QueueOptions = {
  limiter: {
    max: 5,
    duration: 30000,
    bounceBack: true, // important
  },
  createClient: function (
    type: CreateClientOpts['type'],
    redisOpts: CreateClientOpts['redisOpts'],
  ) {
    switch (type) {
      case 'client':
        if (!client) {
          client = new Redis(REDIS_URL, redisOpts);
        }
        client.on('connection', (stream) => {
          console.log('redis connection', stream);
        });
        return client;
      case 'subscriber':
        if (!subscriber) {
          subscriber = new Redis(REDIS_URL, redisOpts);
        }
        subscriber.on('connection', (stream) => {
          console.log('subscriber connection', stream);
        });
        return subscriber;
      case 'bclient':
        return new Redis(REDIS_URL, redisOpts);
      default:
        throw new Error(`Unexpected connection type: ${type}`);
    }
  },
  // redisOpts here will contain at least a property of connectionName which will identify the queue based on its name
};

export const createQueue = (name: string, opts?: Queue.QueueOptions) =>
  new Queue(name, opts ?? defaultOpts);

export { client, subscriber };
