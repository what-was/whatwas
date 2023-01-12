-- AlterTable
ALTER TABLE "WalletTransaction" ALTER COLUMN "creditorName" DROP NOT NULL,
ALTER COLUMN "proprietaryBankTransactionCode" DROP NOT NULL;
