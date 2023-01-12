/*
  Warnings:

  - You are about to drop the `Requisition` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `balance` to the `WalletAccount` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "WalletAccount" ADD COLUMN     "balance" TEXT NOT NULL,
ADD COLUMN     "deletedAt" TIMESTAMP(3);

-- DropTable
DROP TABLE "Requisition";

-- CreateTable
CREATE TABLE "WalletRequisition" (
    "id" TEXT NOT NULL,
    "requisitionId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "agreementId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "WalletRequisition_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "WalletRequisition_requisitionId_key" ON "WalletRequisition"("requisitionId");
