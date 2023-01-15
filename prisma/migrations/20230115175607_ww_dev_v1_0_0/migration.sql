/*
  Warnings:

  - You are about to drop the column `userId` on the `WalletAccount` table. All the data in the column will be lost.
  - Made the column `userMetaId` on table `Note` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `userMetaId` to the `WalletAccount` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userMetaId` to the `WalletRequisition` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Note" DROP CONSTRAINT "Note_userMetaId_fkey";

-- DropIndex
DROP INDEX "WalletAccount_userId_key";

-- AlterTable
ALTER TABLE "Note" ALTER COLUMN "userMetaId" SET NOT NULL;

-- AlterTable
ALTER TABLE "WalletAccount" DROP COLUMN "userId",
ADD COLUMN     "userMetaId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "WalletRequisition" ADD COLUMN     "userMetaId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Note" ADD CONSTRAINT "Note_userMetaId_fkey" FOREIGN KEY ("userMetaId") REFERENCES "UserMeta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WalletRequisition" ADD CONSTRAINT "WalletRequisition_userMetaId_fkey" FOREIGN KEY ("userMetaId") REFERENCES "UserMeta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WalletAccount" ADD CONSTRAINT "WalletAccount_userMetaId_fkey" FOREIGN KEY ("userMetaId") REFERENCES "UserMeta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
