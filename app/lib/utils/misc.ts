import type { HeadersFunction } from '@remix-run/node';
import type { getEnv } from './env.server';

type ENV_KEY = keyof ReturnType<typeof getEnv>;

export function getRequiredEnvVarFromObj(
  obj: Record<string, string | undefined>,
  key: ENV_KEY,
  devValue: string = `${key}-dev-value`,
) {
  let value = devValue;
  const envVal = obj[key];
  if (envVal) {
    value = envVal;
  } else if (obj.NODE_ENV === 'production') {
    throw new Error(`${key} is a required env variable`);
  }
  return value;
}

export function getRequiredServerEnvVar(key: ENV_KEY, devValue?: string) {
  return getRequiredEnvVarFromObj(process.env, key, devValue);
}

export function getSafeRequiredEnvVar(key: ENV_KEY, devValue?: string) {
  try {
    return getRequiredEnvVarFromObj(process.env, key, devValue);
  } catch (error) {
    return null;
  }
}

export function getRequiredGlobalEnvVar(key: ENV_KEY, devValue?: string) {
  return getRequiredEnvVarFromObj(ENV, key, devValue);
}

export function getErrorMessage(error: unknown) {
  if (typeof error === 'string') return error;
  if (error instanceof Error) return error.message;
  return 'Unknown Error';
}

export const reuseUsefulLoaderHeaders: HeadersFunction = ({
  loaderHeaders,
  parentHeaders,
}) => {
  const headers = new Headers();
  const usefulHeaders = ['Cache-Control', 'Vary', 'Server-Timing'];
  for (const headerName of usefulHeaders) {
    if (loaderHeaders.has(headerName)) {
      headers.set(headerName, loaderHeaders.get(headerName)!);
    }
  }
  const appendHeaders = ['Server-Timing'];
  for (const headerName of appendHeaders) {
    if (parentHeaders.has(headerName)) {
      headers.append(headerName, parentHeaders.get(headerName)!);
    }
  }
  const useIfNotExistsHeaders = ['Cache-Control', 'Vary'];
  for (const headerName of useIfNotExistsHeaders) {
    if (!headers.has(headerName) && parentHeaders.has(headerName)) {
      headers.set(headerName, parentHeaders.get(headerName)!);
    }
  }

  return headers;
};

export function removeTrailSlash(path: string) {
  return path.replace(/\/$/, '');
}
