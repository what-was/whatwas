import type { WalletTransaction } from '@prisma/client';

export type UnclearTransaction = {
  [key: string]: string | number | UnclearTransaction;
};

export type Transaction = WalletTransaction;

export type TransactionsByDescriptionWithHistory = Map<
  string,
  Transaction & { history: Transaction[] }
>;
export type TransactionsByProductWithHistory = Map<
  string,
  TransactionsByDescriptionWithHistory
>;

export interface TransactionTableProps {
  data: Transaction[];
  columns: any[];
}
