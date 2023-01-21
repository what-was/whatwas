import https from 'https';
import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv({
  agent: new https.Agent({ keepAlive: true }),
});

export { redis };
