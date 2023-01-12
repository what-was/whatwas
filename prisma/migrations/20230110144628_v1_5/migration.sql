/*
  Warnings:

  - Added the required column `proprietaryBankTransactionCode` to the `WalletTransaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "WalletTransaction" ADD COLUMN     "proprietaryBankTransactionCode" TEXT NOT NULL;
