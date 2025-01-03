/*
  Warnings:

  - You are about to drop the `Note` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WalletAccount` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WalletAccountResource` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WalletRequisition` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WalletTransaction` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_NoteToTag` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "HabitFrequency" AS ENUM ('DAILY', 'WEEKLY', 'CUSTOM');

-- DropForeignKey
ALTER TABLE "Note" DROP CONSTRAINT "Note_userMetaId_fkey";

-- DropForeignKey
ALTER TABLE "Tag" DROP CONSTRAINT "Tag_userMetaId_fkey";

-- DropForeignKey
ALTER TABLE "WalletAccount" DROP CONSTRAINT "WalletAccount_requisitionId_fkey";

-- DropForeignKey
ALTER TABLE "WalletAccount" DROP CONSTRAINT "WalletAccount_userMetaId_fkey";

-- DropForeignKey
ALTER TABLE "WalletRequisition" DROP CONSTRAINT "WalletRequisition_userMetaId_fkey";

-- DropForeignKey
ALTER TABLE "WalletTransaction" DROP CONSTRAINT "WalletTransaction_walletAccountId_fkey";

-- DropForeignKey
ALTER TABLE "_NoteToTag" DROP CONSTRAINT "_NoteToTag_A_fkey";

-- DropForeignKey
ALTER TABLE "_NoteToTag" DROP CONSTRAINT "_NoteToTag_B_fkey";

-- DropTable
DROP TABLE "Note";

-- DropTable
DROP TABLE "Tag";

-- DropTable
DROP TABLE "WalletAccount";

-- DropTable
DROP TABLE "WalletAccountResource";

-- DropTable
DROP TABLE "WalletRequisition";

-- DropTable
DROP TABLE "WalletTransaction";

-- DropTable
DROP TABLE "_NoteToTag";

-- CreateTable
CREATE TABLE "Date" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Date_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "dateId" TEXT NOT NULL,
    "userMetaId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Habit" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "frequency" "HabitFrequency" NOT NULL,
    "customDays" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    "userMetaId" TEXT NOT NULL,
    "reminderEnabled" BOOLEAN NOT NULL DEFAULT false,
    "reminderTime" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Habit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Habit_userMetaId_idx" ON "Habit"("userMetaId");

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_dateId_fkey" FOREIGN KEY ("dateId") REFERENCES "Date"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_userMetaId_fkey" FOREIGN KEY ("userMetaId") REFERENCES "UserMeta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Habit" ADD CONSTRAINT "Habit_userMetaId_fkey" FOREIGN KEY ("userMetaId") REFERENCES "UserMeta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
