/*
  Warnings:

  - You are about to drop the column `userId` on the `Note` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Tag` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `WalletRequisition` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `WalletTransaction` table. All the data in the column will be lost.
  - Added the required column `userMetaId` to the `Tag` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Tag" DROP CONSTRAINT "Tag_userId_fkey";

-- DropIndex
DROP INDEX "Note_userId_idx";

-- AlterTable
ALTER TABLE "Note" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "Tag" DROP COLUMN "userId",
ADD COLUMN     "userMetaId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "WalletRequisition" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "WalletTransaction" DROP COLUMN "userId";

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_userMetaId_fkey" FOREIGN KEY ("userMetaId") REFERENCES "UserMeta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
