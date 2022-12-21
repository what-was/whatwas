import { PrismaClient } from '@prisma/client';

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
      params.args['data'] = { deleted: true };
    }
    case 'deleteMany': {
      // Delete many queries
      params.action = 'updateMany';
      if (params.args.data != undefined) {
        params.args.data['deleted'] = true;
      } else {
        params.args['data'] = { deleted: true };
      }
    }
    default: {
      // Do nothing
    }
  }
  return next(params);
});

export { db };
