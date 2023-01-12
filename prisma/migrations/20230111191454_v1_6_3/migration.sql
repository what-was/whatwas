/*
  Warnings:

  - A unique constraint covering the columns `[transactionId]` on the table `WalletTransaction` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "WalletTransaction_transactionId_key" ON "WalletTransaction"("transactionId");
