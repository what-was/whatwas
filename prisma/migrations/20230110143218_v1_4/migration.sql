/*
  Warnings:

  - You are about to drop the `WalletTransactions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "WalletTransactions";

-- CreateTable
CREATE TABLE "WalletTransaction" (
    "id" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "transactionId" TEXT NOT NULL,
    "bookingDate" TEXT NOT NULL,
    "valueDate" TEXT NOT NULL,
    "bookingDateTime" TIMESTAMP(3) NOT NULL,
    "valueDateTime" TIMESTAMP(3) NOT NULL,
    "transactionAmount" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "sourceCurrency" TEXT,
    "targetCurrency" TEXT,
    "exchangeRate" TEXT,
    "creditorName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "WalletTransaction_pkey" PRIMARY KEY ("id")
);
