import { redirect } from '@remix-run/node';
import { authenticatedRequest } from '~/lib/utils/request';
import { commitSession, getSession } from '~/services/session.server';
import { getNordigenClient } from '~/lib/nordigen.server';
import { getUser } from '~/services/user/user.server';
import { initializeMultipleAccountsQueue } from '~/lib/queues/wallet/account.queue';
import { getRequisition } from '~/lib/wallet/requisition.server';
import type { LoaderFunction } from '@remix-run/node';

export const loader: LoaderFunction = async (args) => {
  const { userId } = await authenticatedRequest(args);
  const { username } = await getUser(userId);

  const cookie = args.request.headers.get('Cookie');
  const session = await getSession(cookie);

  const requisitionId =
    session.get('requisitionId') ??
    new URL(args.request.url).searchParams.get('req');
  if (!requisitionId) {
    return redirect(`/${username}/wallet`);
  }

  const { client: nordigenClient, access } = await getNordigenClient(args);
  const requisitionData = await nordigenClient.requisition.getRequisitionById(
    requisitionId,
  );
  const existingRequisition = await getRequisition(requisitionId);
  if (!existingRequisition) {
    await initializeMultipleAccountsQueue({
      requisitionId,
      accounts: requisitionData.accounts,
      token: access,
      userId,
    });
  }

  await session.unset('requisitionId');

  return redirect(`/${username}/wallet`, {
    headers: {
      'Set-Cookie': await commitSession(session),
    },
  });
};
