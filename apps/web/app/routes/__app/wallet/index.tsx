import { Box, Heading } from '@chakra-ui/react';
import { useLoaderData, Link } from '@remix-run/react';
import {
  Button,
  EmptyState,
  EmptyStateActions,
  EmptyStateBody,
  EmptyStateContainer,
  EmptyStateDescription,
  EmptyStateIcon,
  EmptyStateTitle,
} from '@saas-ui/react';
import { RxPlus } from 'react-icons/rx';
import { BsWallet2 } from 'react-icons/bs';
import { jsonHash } from 'remix-utils';
import { getRequisitionsOfUser } from '~/lib/wallet/requisition.server';
import { getUserFromRequest } from '~/lib/user.server';
import { getWalletAccountListOfUser } from '~/lib/wallet/account.server';
// import { Transactions } from '~/containers/wallet';
import { reuseUsefulLoaderHeaders } from '~/lib/utils/misc';
import { getServerTimeHeader } from '~/lib/timing.server';
import type { HeadersFunction, LoaderFunction } from '@remix-run/node';

const defaultCountry = 'NL';

export const loader: LoaderFunction = async (args) => {
  const timings = {};
  const currentUser = await getUserFromRequest(args, {
    timings,
  });

  return jsonHash(
    {
      walletAccounts: getRequisitionsOfUser(currentUser.id, { timings }),
      requisitions: getWalletAccountListOfUser(currentUser.id, { timings }),
    },
    {
      headers: {
        'Server-Timing': getServerTimeHeader(timings),
      },
    },
  );
};

export const headers: HeadersFunction = reuseUsefulLoaderHeaders;

const AddBankButton = () => (
  <Button
    rightIcon={<RxPlus />}
    as={Link}
    to={`add-bank?country=${defaultCountry}`}
    colorScheme="green"
    variant="ghost"
    prefetch="intent"
    rel="prefetch"
    label="Add bank"
  />
);

export default function WalletPage() {
  const { walletAccounts } = useLoaderData<typeof loader>();

  return (
    <>
      <Box
        // display="flex"
        // justifyContent="space-between"
        // alignItems="center"
        mb="6"
      >
        <Heading as="h2" size="md">
          My Wallet
        </Heading>
        <Box>
          {walletAccounts?.length ? <AddBankButton /> : null}

          <Button as={Link} to={`.`} colorScheme="red" variant="outline">
            Delete all transactions
          </Button>
        </Box>
      </Box>
      <EmptyState
        // colorScheme="gray"
        icon={BsWallet2}
        title="No connected banks"
        description="You haven't connected any bank accounts yet. Connect a bank account to start tracking your transactions."
        actions={<AddBankButton />}
      />

      <EmptyStateContainer colorScheme="purple">
        <EmptyStateBody>
          <EmptyStateIcon as={BsWallet2} />

          <EmptyStateTitle>Whoops, something went wrong</EmptyStateTitle>
          <EmptyStateDescription>
            Where do you want to go?
          </EmptyStateDescription>
          <EmptyStateActions>
            <AddBankButton />
          </EmptyStateActions>
        </EmptyStateBody>
      </EmptyStateContainer>
      {/* {walletAccounts?.length === 0 ? (

      ) : null} */}

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
