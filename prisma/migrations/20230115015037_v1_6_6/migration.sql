/*
  Warnings:

  - You are about to drop the column `userMetaId` on the `Tag` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `UserMeta` table. All the data in the column will be lost.
  - You are about to drop the column `themePreference` on the `UserMeta` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `UserMeta` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `UserMeta` table. All the data in the column will be lost.
  - You are about to drop the column `accountId` on the `WalletTransaction` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[clerkId]` on the table `UserMeta` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `walletAccountId` to the `WalletTransaction` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Tag" DROP CONSTRAINT "Tag_userMetaId_fkey";

-- DropIndex
DROP INDEX "Tag_userId_idx";

-- DropIndex
DROP INDEX "UserMeta_email_key";

-- DropIndex
DROP INDEX "UserMeta_userId_key";

-- DropIndex
DROP INDEX "UserMeta_username_key";

-- AlterTable
ALTER TABLE "Tag" DROP COLUMN "userMetaId";

-- AlterTable
ALTER TABLE "UserMeta" DROP COLUMN "email",
DROP COLUMN "themePreference",
DROP COLUMN "userId",
DROP COLUMN "username",
ADD COLUMN     "clerkId" TEXT;

-- AlterTable
ALTER TABLE "WalletRequisition" ADD COLUMN     "deletedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "WalletTransaction" DROP COLUMN "accountId",
ADD COLUMN     "walletAccountId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "WalletAccountResource" (
    "id" TEXT NOT NULL,
    "resourceId" TEXT NOT NULL,
    "cashAccountType" TEXT NOT NULL,
    "currency" TEXT,
    "name" TEXT,
    "displayName" TEXT,
    "details" TEXT,
    "iban" TEXT,
    "status" TEXT,
    "product" TEXT,
    "usage" TEXT,
    "linkedAccounts" TEXT[],

    CONSTRAINT "WalletAccountResource_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserMeta_clerkId_key" ON "UserMeta"("clerkId");

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserMeta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WalletAccount" ADD CONSTRAINT "WalletAccount_requisitionId_fkey" FOREIGN KEY ("requisitionId") REFERENCES "WalletRequisition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WalletTransaction" ADD CONSTRAINT "WalletTransaction_walletAccountId_fkey" FOREIGN KEY ("walletAccountId") REFERENCES "WalletAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
