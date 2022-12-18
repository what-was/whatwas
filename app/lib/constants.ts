/**
 * Auth Keys.
 */
export const AUTH_KEYS = {
  RESET_PASSWORD_SESSION_KEY: 'RESET_PASSWORD_SESSION_KEY',
};

/**
 * Email Keys.
 */
export const EMAIL_KEYS = {
  HAS_SUCCESSFULLY_SEND_EMAIL: 'HAS_SUCCESSFULLY_SEND_EMAIL',
};

/**
 * Misc Keys.
 */
export const MISC_KEYS = {
  QUERY_TOKEN_PARAM: 'token',
  QUERY_TOKEN_FORGOT_PASSWORD: 'forgot-password',
};

/**
 * Redirect Routes
 * @description
 * These are the default routes that the user will be redirected to
 * after a successful login or logout.
 */
export const REDIRECT_ROUTES = {
  AUTHENTICATED: '/',
  GUEST: '/login',
};
