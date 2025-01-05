-- CreateEnum
CREATE TYPE "ContactCategory" AS ENUM ('FAMILY', 'FRIENDS', 'COLLEAGUES', 'CLIENTS', 'OTHERS');

-- CreateEnum
CREATE TYPE "ReminderFrequency" AS ENUM ('DAILY', 'WEEKLY', 'MONTHLY', 'YEARLY');

-- CreateEnum
CREATE TYPE "ReminderStatus" AS ENUM ('PENDING', 'COMPLETED', 'SNOOZED');

-- CreateTable
CREATE TABLE "Contact" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "socialLinks" JSONB,
    "notes" TEXT,
    "category" "ContactCategory" NOT NULL,
    "customCategory" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reminder" (
    "id" TEXT NOT NULL,
    "contactId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "isRecurring" BOOLEAN NOT NULL DEFAULT false,
    "frequency" "ReminderFrequency",
    "status" "ReminderStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Reminder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventTag" (
    "id" TEXT NOT NULL,
    "contactId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EventTag_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Contact_userId_idx" ON "Contact"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Contact_userId_email_key" ON "Contact"("userId", "email");

-- CreateIndex
CREATE INDEX "Reminder_userId_idx" ON "Reminder"("userId");

-- CreateIndex
CREATE INDEX "Reminder_contactId_idx" ON "Reminder"("contactId");

-- CreateIndex
CREATE INDEX "EventTag_userId_idx" ON "EventTag"("userId");

-- CreateIndex
CREATE INDEX "EventTag_contactId_idx" ON "EventTag"("contactId");

-- CreateIndex
CREATE INDEX "EventTag_eventId_idx" ON "EventTag"("eventId");

-- AddForeignKey
ALTER TABLE "Reminder" ADD CONSTRAINT "Reminder_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventTag" ADD CONSTRAINT "EventTag_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;
