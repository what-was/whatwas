/*
  Warnings:

  - You are about to drop the column `contactId` on the `Reminder` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Reminder" DROP CONSTRAINT "Reminder_contactId_fkey";

-- DropIndex
DROP INDEX "Reminder_contactId_idx";

-- AlterTable
ALTER TABLE "Reminder" DROP COLUMN "contactId";

-- CreateTable
CREATE TABLE "ReminderContact" (
    "id" TEXT NOT NULL,
    "reminderId" TEXT NOT NULL,
    "contactId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ReminderContact_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ReminderContact_userId_idx" ON "ReminderContact"("userId");

-- CreateIndex
CREATE INDEX "ReminderContact_reminderId_idx" ON "ReminderContact"("reminderId");

-- CreateIndex
CREATE INDEX "ReminderContact_contactId_idx" ON "ReminderContact"("contactId");

-- CreateIndex
CREATE UNIQUE INDEX "ReminderContact_reminderId_contactId_key" ON "ReminderContact"("reminderId", "contactId");

-- AddForeignKey
ALTER TABLE "ReminderContact" ADD CONSTRAINT "ReminderContact_reminderId_fkey" FOREIGN KEY ("reminderId") REFERENCES "Reminder"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReminderContact" ADD CONSTRAINT "ReminderContact_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;
