/*
  Warnings:

  - Added the required column `currency` to the `WalletTransactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `WalletTransactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transactionAmount` to the `WalletTransactions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "WalletTransactions" ADD COLUMN     "currency" TEXT NOT NULL,
ADD COLUMN     "exchangeRate" TEXT,
ADD COLUMN     "sourceCurrency" TEXT,
ADD COLUMN     "status" TEXT NOT NULL,
ADD COLUMN     "targetCurrency" TEXT,
ADD COLUMN     "transactionAmount" TEXT NOT NULL;
