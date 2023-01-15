import { PrismaClient } from '@prisma/client';
import dayjs from 'dayjs';

declare global {
  var __db__: PrismaClient;
}

const logThreshold = 500;

function getClient(): PrismaClient {
  // NOTE: during development if you change anything in this function, remember
  // that this only runs once per server restart and won't automatically be
  // re-run per request like everything else is.
  const client = new PrismaClient({
    log: [
      { level: 'query', emit: 'event' },
      { level: 'error', emit: 'stdout' },
      { level: 'info', emit: 'stdout' },
      { level: 'warn', emit: 'stdout' },
    ],
  });
  client.$on('query', async (e) => {
    if (e.duration < logThreshold) return;
    const { default: chalk } = await import('chalk');

    const color =
      e.duration < logThreshold * 1.1
        ? 'green'
        : e.duration < logThreshold * 1.2
        ? 'blue'
        : e.duration < logThreshold * 1.3
        ? 'yellow'
        : e.duration < logThreshold * 1.4
        ? 'redBright'
        : 'red';
    const dur = chalk[color](`${e.duration}ms`);
    console.log(`prisma:query - ${dur} - ${e.query}`);
  });
  // make the connection eagerly so the first request doesn't have to wait
  void client.$connect();
  return client;
}

const db = global.__db__ ?? (global.__db__ = getClient());

db.$use(async (params, next) => {
  // Check incoming query type
  switch (params.action) {
    case 'delete': {
      // Delete queries
      // Change action to an update
      params.action = 'update';
      params.args['data'] = { deletedAt: dayjs().toISOString() };
    }
    case 'deleteMany': {
      // Delete many queries
      params.action = 'updateMany';
      if (params.args.data != undefined) {
        params.args.data['deletedAt'] = dayjs().toISOString();
      } else {
        params.args['data'] = { deletedAt: dayjs().toISOString() };
      }
    }
    case 'update': {
      // Update queries
      // Add updatedAt to the update data
      if (params.args.data != undefined) {
        params.args.data['updatedAt'] = dayjs().toISOString();
      } else {
        params.args['data'] = { updatedAt: dayjs().toISOString() };
      }
    }
    default: {
      // Do nothing
    }
  }
  return next(params);
});

export { db };
