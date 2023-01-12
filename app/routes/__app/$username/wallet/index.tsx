import { Box, Heading } from '@chakra-ui/react';
import { useLoaderData, Link } from '@remix-run/react';
import { Button } from '@saas-ui/react';
import { redirect } from '@remix-run/node';
import { getRequisitionsOfUser } from '~/lib/wallet/requisition.server';
import { authenticatedRequest } from '~/lib/utils/request';
import { getWalletAccountListOfUser } from '~/lib/wallet/account.server';
// import { Transactions } from '~/containers/wallet';
import { getUser } from '~/services/user/user.server';
import type { LoaderFunction } from '@remix-run/node';

export const loader: LoaderFunction = async (args) => {
  const token = '';
  const { userId } = await authenticatedRequest(args);
  const { username: requestUsername } = args.params;
  const { username } = await getUser(userId);
  if (requestUsername !== username) {
    return redirect(`/${requestUsername}`);
  }

  const requisitions = await getRequisitionsOfUser(userId);
  const walletAccounts = await getWalletAccountListOfUser(userId);

  return { token, walletAccounts, requisitions };
};

export default function WalletPage() {
  const { requisitions } = useLoaderData<typeof loader>();

  console.log('requisitions', requisitions[requisitions.length - 1]);

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb="6"
      >
        <Heading as="h2" size="lg">
          Wallet Page
        </Heading>
        <Box>
          <Button
            as={Link}
            to={'banks'}
            colorScheme="green"
            variant="ghost"
            prefetch="intent"
          >
            Add bank
          </Button>

          <Button as={Link} to={'banks'} colorScheme="red" variant="solid">
            Delete all transactions
          </Button>
        </Box>
      </Box>

      {/* <Box>
        <ul>
          {accountMetas.map((accountMeta) => {
            return <li key={accountMeta.id}>{accountMeta.id}</li>;
          })}
        </ul>
      </Box> */}
      {/* <Transactions transactions={walletTransactions ?? []} /> */}
    </>
  );
}
