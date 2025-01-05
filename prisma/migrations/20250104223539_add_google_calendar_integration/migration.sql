/*
  Warnings:

  - A unique constraint covering the columns `[date]` on the table `Date` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userMetaId` to the `Date` table without a default value. This is not possible if the table is not empty.
  - Added the required column `habitId` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Date" ADD COLUMN     "userMetaId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "habitId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "GoogleCalendarIntegration" (
    "id" TEXT NOT NULL,
    "accessToken" TEXT NOT NULL,
    "refreshToken" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "calendarId" TEXT,
    "lastSyncedAt" TIMESTAMP(3),
    "userMetaId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "GoogleCalendarIntegration_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "GoogleCalendarIntegration_userMetaId_key" ON "GoogleCalendarIntegration"("userMetaId");

-- CreateIndex
CREATE INDEX "GoogleCalendarIntegration_userMetaId_idx" ON "GoogleCalendarIntegration"("userMetaId");

-- CreateIndex
CREATE UNIQUE INDEX "Date_date_key" ON "Date"("date");

-- CreateIndex
CREATE INDEX "Date_userMetaId_idx" ON "Date"("userMetaId");

-- CreateIndex
CREATE INDEX "Event_dateId_idx" ON "Event"("dateId");

-- CreateIndex
CREATE INDEX "Event_userMetaId_idx" ON "Event"("userMetaId");

-- CreateIndex
CREATE INDEX "Event_habitId_idx" ON "Event"("habitId");

-- AddForeignKey
ALTER TABLE "Date" ADD CONSTRAINT "Date_userMetaId_fkey" FOREIGN KEY ("userMetaId") REFERENCES "UserMeta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_habitId_fkey" FOREIGN KEY ("habitId") REFERENCES "Habit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GoogleCalendarIntegration" ADD CONSTRAINT "GoogleCalendarIntegration_userMetaId_fkey" FOREIGN KEY ("userMetaId") REFERENCES "UserMeta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
