export function getEnv() {
  return {
    // FLY: process.env.FLY,
    NODE_ENV: process.env.NODE_ENV,
    // REDIS
    CLERK_FRONTEND_API: process.env.CLERK_FRONTEND_API,
    NORDIGEN_NAME: process.env.NORDIGEN_NAME,
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
