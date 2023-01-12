import { PrismaClient } from '@prisma/client';
import dayjs from 'dayjs';

let db: PrismaClient;

declare global {
  var __db__: PrismaClient;
}

if (process.env.NODE_ENV === 'production') {
  db = new PrismaClient();
} else {
  if (!global.__db__) global.__db__ = new PrismaClient();
  db = global.__db__;
  db.$connect();
}

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
