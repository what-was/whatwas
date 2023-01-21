import { randomUUID } from 'crypto';
import { redirect } from '@remix-run/node';
import { authenticatedRequest } from '~/lib/user.server';
import { getNordigenClient } from '~/lib/nordigen.server';
import { commitSession, getSession } from '~/services/session.server';
import { createRequisition } from '~/lib/wallet/requisition.server';
import type { LoaderFunction } from '@remix-run/node';

const REDIRECT_URI = `http://localhost:3000/api/wallet/data/`;

export const loader: LoaderFunction = async (args) => {
  const { request, params } = args;
  const institutionId = params.id;

  const { userId } = await authenticatedRequest(args);
  if (!institutionId) {
    throw redirect('/wallet');
  }

  const cookie = request.headers.get('Cookie');
  const session = await getSession(cookie);
  const { client: nordigenClient } = await getNordigenClient(args);

  if (!session) {
    throw redirect('/wallet');
  }

  // @ts-ignore
  const requisition = await nordigenClient.initSession({
    redirectUrl: REDIRECT_URI,
    institutionId,
    referenceId: randomUUID(),
  });

  await createRequisition({
    UserMeta: {
      connect: {
        clerkId: userId,
      },
    },
    requisitionId: requisition.id,
    agreementId: requisition.agreement,
  });

  session.set('requisitionId', requisition.id);

  return redirect(requisition.link, {
    headers: {
      'Set-Cookie': await commitSession(session),
    },
  });
};
