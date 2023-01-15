import { Box, Heading } from '@chakra-ui/react';
import { useLoaderData, Link } from '@remix-run/react';
import { Button } from '@saas-ui/react';
import { json, redirect } from '@remix-run/node';
import { getRequisitionsOfUser } from '~/lib/wallet/requisition.server';
import { getUserFromRequest } from '~/lib/user.server';
import { getWalletAccountListOfUser } from '~/lib/wallet/account.server';
// import { Transactions } from '~/containers/wallet';
import { reuseUsefulLoaderHeaders } from '~/lib/utils/misc';
import { getServerTimeHeader } from '~/lib/timing.server';
import type { HeadersFunction, LoaderFunction } from '@remix-run/node';

const defaultCountry = 'NL';

export const loader: LoaderFunction = async ({ request, params }) => {
  const timings = {};
  const { username: requestUsername } = params;
  const { id: userId, username } = await getUserFromRequest(request, {
    timings,
  });
  if (requestUsername !== username) {
    return redirect(`/${requestUsername}`);
  }

  return json(
    {
      walletAccounts: await getRequisitionsOfUser(userId, { timings }),
      requisitions: await getWalletAccountListOfUser(userId, { timings }),
    },
    {
      headers: {
        'Server-Timing': getServerTimeHeader(timings),
      },
    },
  );
};

export const headers: HeadersFunction = reuseUsefulLoaderHeaders;

export default function WalletPage() {
  const { walletAccounts } = useLoaderData<typeof loader>();

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
            to={`banks?country=${defaultCountry}`}
            colorScheme="green"
            variant="ghost"
            prefetch="intent"
            rel="prefetch"
          >
            Add bank
          </Button>

          <Button as={Link} to={`.`} colorScheme="red" variant="solid">
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
