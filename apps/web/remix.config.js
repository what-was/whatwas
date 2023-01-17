// /**
//  * @type {import('@remix-run/dev').AppConfig}
//  */
// module.exports = {
//   cacheDirectory: './node_modules/.cache/remix',
//   ignoredRouteFiles: ['**/.*', '**/*.css', '**/*.test.{js,jsx,ts,tsx}'],
//   serverDependenciesToBundle: ['nordigen-node', 'axios', '@clerk/backend-core'],
//   watchPaths: ['../../packages/**/*', './app/**/*.{js,jsx,ts,tsx}'],
// };

/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  cacheDirectory: './node_modules/.cache/remix',
  ignoredRouteFiles: ['**/.*', '**/*.css', '**/*.test.{js,jsx,ts,tsx}'],
  serverDependenciesToBundle: ['nordigen-node', 'axios', '@clerk/backend-core'],
};
