export function getEnv() {
  return {
    // FLY: process.env.FLY,
    NODE_ENV: process.env.NODE_ENV,
    SESSION_SECRET: process.env.SESSION_SECRET,
    DATABASE_URL: process.env.DATABASE_URL,
    REDIS_URL: process.env.REDIS_URL,
    CLERK_FRONTEND_API: process.env.CLERK_FRONTEND_API,
    CLERK_API_KEY: process.env.CLERK_API_KEY,
    CLERK_JWT_KEY: process.env.CLERK_JWT_KEY,
    NORDIGEN_NAME: process.env.NORDIGEN_NAME,
    SECRET_ID: process.env.SECRET_ID,
    SECRET_KEY: process.env.SECRET_KEY,
  };
}

type ENV = ReturnType<typeof getEnv>;

// App puts these on
declare global {
  // eslint-disable-next-line
  var ENV: ENV;
  interface Window {
    ENV: ENV;
  }
}
