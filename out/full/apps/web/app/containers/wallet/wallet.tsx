import { useMemo } from 'react';
import {
  Box,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { useExpanded, useTable } from 'react-table';
import type { Transaction, TransactionTableProps } from './wallet.types';

// const getTransactionsByProductGroupedByDescription = (
//   transactions: Transaction[],
// ) => {
//   const byProduct: TransactionsByProductWithHistory = new Map();

//   transactions.forEach((transaction) => {
//     const { product, description, amount } = transaction;

//     const productRes = byProduct.get(product) || new Map();
//     const foundTransaction = productRes.get(description) || transaction;

//     foundTransaction.amount =
//       (productRes.get(description)?.amount || 0) +
//       Number(Number(amount).toFixed(2));

//     productRes.set(description, foundTransaction);

//     byProduct.set(product, productRes);
//   });

//   transactions.forEach((transaction) => {
//     const { description, product } = transaction;
//     const productRes = byProduct.get(product);
//     if (!productRes) return;

//     const foundTransaction = productRes.get(description);
//     if (!foundTransaction) return;

//     if (!foundTransaction.history) {
//       foundTransaction.history = [];
//     }

//     foundTransaction.history.push(transaction);

//     productRes.set(description, foundTransaction);
//     byProduct.set(product, productRes);
//   });

//   return byProduct;
// };

const TransactionsTable = ({ data, columns }: TransactionTableProps) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useExpanded,
    );

  return (
    <TableContainer
    // border="1px"
    // borderRadius="xl"
    // borderColor={useColorModeValue('gray.300', 'gray.600')}
    >
      <Table {...getTableProps()} size="sm" variant="striped">
        <Thead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th {...column.getHeaderProps()}>{column.render('Header')}</Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {/* <FixedSizeList height={400} itemCount={rows.length} itemSize={35}> */}
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
                  );
                })}
              </Tr>
            );
          })}
          {/* </FixedSizeList> */}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export const Transactions = ({
  transactions,
}: {
  transactions: Transaction[];
}) => {
  // const groupedTransactions =
  //   getTransactionsByProductGroupedByDescription(transactions);
  // const currentTransactions = Array.from(
  //   groupedTransactions.get('Current')?.values() || [],
  // ) as Transaction[];
  const data = transactions.filter((t) => t.creditorName !== null);

  const columns = useMemo(
    () => [
      {
        id: 'expander',
        Header: ({
          getToggleAllRowsExpandedProps,
          isAllRowsExpanded,
        }: {
          getToggleAllRowsExpandedProps: () => any;
          isAllRowsExpanded: boolean;
        }) => (
          <span {...getToggleAllRowsExpandedProps()}>
            {isAllRowsExpanded ? '👇' : '👉'}
          </span>
        ),
        Cell: ({ row }: { row: any }) =>
          row.canExpand ? (
            <span
              {...row.getToggleRowExpandedProps({
                style: {
                  paddingLeft: `${row.depth * 2}rem`,
                },
              })}
            >
              {row.isExpanded ? '👇' : '👉'}
            </span>
          ) : null,
      },
      {
        Header: 'Description',
        accessor: 'creditorName', // accessor is the "key" in the data
      },
      {
        Header: 'Amount',
        accessor: 'transactionAmount',
        align: 'right',
      },
      {
        Header: 'Currency',
        accessor: 'currency',
      },
      {
        Header: 'Date',
        accessor: 'valueDate',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
    ],
    [],
  );

  return (
    <Box display="flex" flexDir="column" gap={4}>
      <Heading as="h3" size="md">
        Transactions
      </Heading>
      <TransactionsTable data={data} columns={columns} />
    </Box>
  );
};
