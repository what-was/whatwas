import { db } from '../db';
import type { WalletAccount, Prisma } from '@prisma/client';

interface WalletAccountInput {
  userId: WalletAccount['userId'];
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

type TransactionInput = Prisma.WalletTransactionCreateInput;

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
  userId: WalletAccount['userId'];
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

  console.log('walletAccount', walletAccount);
  return walletAccount;
}

export async function getWalletAccountListOfUser(userId: string) {
  const walletAccounts = await db.walletAccount.findMany({
    where: {
      userId,
    },
  });
  return walletAccounts;
}

const sanitizeTransactions = (
  transactions: Transaction[],
  userId: string,
  accountId: string,
  status: string,
): TransactionInput[] => {
  return transactions.map((transaction) => ({
    userId,
    accountId,
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
  }));
};

export async function insertAccountData({
  accountData,
  userId,
}: AccountDataInput) {
  const data = [
    ...sanitizeTransactions(
      accountData.transactions.transactions.booked,
      userId,
      accountData.metadata.id,
      'booked',
    ),
    ...sanitizeTransactions(
      accountData.transactions.transactions.pending,
      userId,
      accountData.metadata.id,
      'pending',
    ),
  ];

  return await db.walletTransaction.createMany({ data });
}

export async function getAllWalletTransactionsOfUser(userId: string) {
  const transactions = await db.walletTransaction.findMany({
    where: {
      userId,
    },
  });
  return transactions;
}

export async function deleteAllWalletTransactionsOfUser(userId: string) {
  const transactions = await db.walletTransaction.deleteMany({
    where: {
      userId,
    },
  });
  return transactions;
}
