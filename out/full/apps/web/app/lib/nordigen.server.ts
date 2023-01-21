import NordigenClient from 'nordigen-node';
import { getSession } from '~/services/session.server';
import type { DataFunctionArgs, Session } from '@remix-run/node';

let client: NordigenClient | null = null;

interface Token {
  access: string;
  refresh: string;
}

interface NordigenClientWithToken {
  client: NordigenClient;
  access: Token['access'];
  refresh?: Token['refresh'];
  session?: Session;
}

type NordenClientProps = DataFunctionArgs | { token: string };

export async function getNordigenClient(
  input: NordenClientProps,
  session?: Session,
): Promise<NordigenClientWithToken> {
  if (!client) {
    client = new NordigenClient({
      secretId: process.env.SECRET_ID!,
      secretKey: process.env.SECRET_KEY!,
    });
  }

  if ('token' in input) {
    client.token = input.token;
    return { client, access: input.token };
  }

  const cookie = input.request.headers.get('Cookie');
  const s = session ?? (await getSession(cookie));
  const token = s.get('walletAccessToken');

  if (token?.access) {
    client.token = token.access;
    return { client, access: token.access, session: s };
  }

  const { access, refresh } = await client.generateToken();
  s.set('walletAccessToken', { access, refresh });

  return { client, access, refresh, session: s };
}
