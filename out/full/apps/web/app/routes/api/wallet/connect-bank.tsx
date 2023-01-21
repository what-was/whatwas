import { redirect } from '@remix-run/node';
import { commitSession, getSession } from '~/services/session.server';
import { getNordigenClient } from '~/lib/nordigen.server';
import { getUserFromRequest } from '~/lib/user.server';
import { initializeMultipleAccountsQueue } from '~/lib/queues/wallet/account.queue';
import { getRequisition } from '~/lib/wallet/requisition.server';
import { REDIRECT_ROUTES } from '~/lib/constants';
import type { LoaderFunction } from '@remix-run/node';

export const loader: LoaderFunction = async (args) => {
  const { request } = args;
  const { id: userId, username } = await getUserFromRequest(args);

  const cookie = request.headers.get('Cookie');
  const session = await getSession(cookie);

  const requisitionId =
    session.get('requisitionId') ??
    new URL(request.url).searchParams.get('requisitionId');
  if (!requisitionId) {
    return redirect(
      username ? `/${username}/wallet` : REDIRECT_ROUTES.AUTHENTICATED,
    );
  }

  const existingRequisition = await getRequisition(requisitionId);
  if (existingRequisition) {
    await session.unset('requisitionId');
    return redirect(
      username ? `/${username}/wallet` : REDIRECT_ROUTES.AUTHENTICATED,
      {
        headers: {
          'Set-Cookie': await commitSession(session),
        },
      },
    );
  }

  const { client: nordigenClient, access } = await getNordigenClient(args);
  const requisitionData = await nordigenClient.requisition.getRequisitionById(
    requisitionId,
  );
  await initializeMultipleAccountsQueue({
    requisitionId,
    accounts: requisitionData.accounts,
    token: access,
    userId,
  });

  await session.unset('requisitionId');

  return redirect(
    username ? `/${username}/wallet` : REDIRECT_ROUTES.AUTHENTICATED,
    {
      headers: {
        'Set-Cookie': await commitSession(session),
      },
    },
  );
};
