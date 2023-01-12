-- CreateTable
CREATE TABLE "WalletTransactions" (
    "id" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "transactionId" TEXT NOT NULL,
    "bookingDate" TEXT NOT NULL,
    "valueDate" TEXT NOT NULL,
    "bookingDateTime" TIMESTAMP(3) NOT NULL,
    "valueDateTime" TIMESTAMP(3) NOT NULL,
    "creditorName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "WalletTransactions_pkey" PRIMARY KEY ("id")
);
