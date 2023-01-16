import { Box, Heading, StatGroup } from '@chakra-ui/react';
import { useLoaderData } from '@remix-run/react';
import { redirect } from '@remix-run/node';
import { DataTable } from '@saas-ui/react';
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

  let transactions = [];
  for (let i = 0; i < 100; i++) {
    transactions.push({
      id: i,
      amount: (Math.random() * 100).toFixed(2),
      type: Math.random() > 0.5 ? 'expense' : 'income',
      category: 'Food',
      date: new Date().toISOString(),
    });
  }

  return { balance: { start: 0, end: 0 }, expense: 0, income: 0, transactions };
};

export const headers: HeadersFunction = reuseUsefulLoaderHeaders;

export default function WalletPage() {
  const { balance, expense, income, transactions } =
    useLoaderData<typeof loader>();
  return (
    <Box>
      <Box mb="8">
        <Heading as="h3" size="md" mb="4">
          Balances
        </Heading>
        <StatGroup>
          <Stat
            label="Current balance"
            value={balance.end}
            type={balance.end > balance.start ? 'increase' : 'decrease'}
            difference={balance.start > 0 && balance.start}
          />
          <Stat label="Expense" value={expense} color="red.500" />
          <Stat label="Income" value={income} color="green.500" />
        </StatGroup>
      </Box>

      <Box>
        <Heading as="h3" size="md" mb="4">
          Transactions
        </Heading>
        <Box overflowX="auto" backgroundColor="gray.800">
          <DataTable
            columns={[
              { accessor: 'id', Header: 'ID', width: '24px' },
              { accessor: 'amount', Header: 'Amount', maxWidth: 60 },
              { accessor: 'type', Header: 'Type' },
              { accessor: 'category', Header: 'Category' },
              { accessor: 'date', Header: 'Date' },
            ]}
            data={transactions}
          />
        </Box>
      </Box>
    </Box>
  );
}
