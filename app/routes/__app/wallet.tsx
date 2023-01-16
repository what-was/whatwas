import { StatGroup } from '@chakra-ui/react';
import { useLoaderData } from '@remix-run/react';
import { redirect } from '@remix-run/node';
import { Stat } from '~/components/stat';
import { reuseUsefulLoaderHeaders } from '~/lib/utils/misc';
import { authenticatedRequest } from '~/lib/user.server';
import { getRedirectTo } from '~/lib/http';
import type { HeadersFunction, LoaderFunction } from '@remix-run/node';

export const loader: LoaderFunction = async ({ request }) => {
  try {
    await authenticatedRequest(request);
  } catch (error) {
    return redirect(getRedirectTo(request));
  }

  return { balance: { start: 0, end: 0 }, expense: 0, income: 0 };
};

export const headers: HeadersFunction = reuseUsefulLoaderHeaders;

export default function WalletPage() {
  const { balance, expense, income } = useLoaderData<typeof loader>();
  return (
    <>
      <StatGroup my="2">
        <Stat
          label="Current balance"
          value={balance.end}
          type={balance.end > balance.start ? 'increase' : 'decrease'}
          difference={balance.start > 0 && balance.start}
        />
        <Stat label="Expense" value={expense} color="red.500" />
        <Stat label="Income" value={income} color="green.500" />
      </StatGroup>
    </>
  );
}
