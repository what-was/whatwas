import { db } from '../db';
import { time } from '../timing.server';
import type { Timings } from '../timing.server';
import type { WalletAccount, Prisma } from '@prisma/client';

interface WalletAccountInput {
  userMetaId: WalletAccount['userMetaId'];
  requisitionId: WalletAccount['requisitionId'];
  accountId: WalletAccount['accountId'];
  balance: WalletAccount['balance'];
}

interface WalletAccountData {
  id: string;
  created: string;
  last_accessed: string | null;
  iban: string;
  institution_id: string;
  status: string;
  owner_name: string;
}

interface AccountBalance {}
interface AccountDetails {
  resourceId: string;
  currency: string;
  name: string;
  cashAccountType: string;
}

// type TransactionInput = Prisma.WalletTransactionCreateInput;

type Transaction = {
  transactionId: string;
  bookingDate: string;
  bookingDateTime: string;
  valueDate: string;
  valueDateTime: string;
  transactionAmount: { amount: string; currency: string };
  currencyExchange: {
    sourceCurrency: string;
    targetCurrency: string;
    exchangeRate: string;
  };
  creditorName: string;
  proprietaryBankTransactionCode: string;
};

interface Transactions {
  transactions: {
    booked: Array<Transaction>;
    pending: Array<Transaction>;
  };
}

interface AccountDataInput {
  userMetaId: WalletAccount['userMetaId'];
  accountData: {
    metadata: WalletAccountData;
    balances: { balances: AccountBalance[] };
    details: { account: AccountDetails };
    transactions: Transactions;
  };
}

export async function insertWalletAccount(input: WalletAccountInput) {
  const walletAccount = await db.walletAccount.upsert({
    create: input,
    update: input,
    where: {
      accountId: input.accountId,
    },
  });

  return walletAccount;
}

export async function getWalletAccountListOfUser(
  userMetaId: string,
  opts?: {
    timings?: Timings;
  },
) {
  const handler = async () => {
    const walletAccounts = await db.walletAccount.findMany({
      where: {
        userMetaId,
      },
    });
    return walletAccounts;
  };

  if (opts?.timings) {
    return await time(handler, {
      timings: opts.timings,
      type: 'getWalletAccountListOfUser',
    });
  }

  return await handler();
}

const sanitizeTransactions = (
  transactions: Transaction[],
  userId: string,
  accountId: string,
  status: string,
): Prisma.WalletTransactionCreateManyInput[] => {
  return transactions.map((transaction) => ({
    userId,
    status,
    transactionId: transaction.transactionId,
    bookingDate: transaction.bookingDate,
    bookingDateTime: transaction.bookingDateTime,
    valueDate: transaction.valueDate,
    valueDateTime: transaction.valueDateTime,
    transactionAmount: transaction.transactionAmount.amount,
    currency: transaction.transactionAmount.currency,
    creditorName: transaction.creditorName,
    proprietaryBankTransactionCode: transaction.proprietaryBankTransactionCode,
    ...(transaction.currencyExchange && {
      sourceCurrency: transaction.currencyExchange.sourceCurrency,
      targetCurrency: transaction.currencyExchange.targetCurrency,
      exchangeRate: transaction.currencyExchange.exchangeRate,
    }),
    // walletAccount: {
    //   connect: {
    //     accountId,
    //   },
    // },
    walletAccountId: accountId,
  }));
};

export async function insertAccountData({
  accountData,
  userMetaId,
}: AccountDataInput) {
  const data = [
    ...sanitizeTransactions(
      accountData.transactions.transactions.booked,
      userMetaId,
      accountData.metadata.id,
      'booked',
    ),
    ...sanitizeTransactions(
      accountData.transactions.transactions.pending,
      userMetaId,
      accountData.metadata.id,
      'pending',
    ),
  ];

  return await db.walletTransaction.createMany({ data });
}

export async function getAllWalletTransactionsOfUser(clerkId: string) {
  const transactions = await db.walletTransaction.findMany({
    where: {
      walletAccount: {
        UserMeta: {
          clerkId,
        },
      },
    },
  });
  return transactions;
}

export async function deleteAllWalletTransactionsOfUser(clerkId: string) {
  const transactions = await db.walletTransaction.deleteMany({
    where: {
      walletAccount: {
        UserMeta: {
          clerkId,
        },
      },
    },
  });
  return transactions;
}
