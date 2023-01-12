/*
  Warnings:

  - A unique constraint covering the columns `[accountId]` on the table `AccountMeta` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "AccountMeta_accountId_key" ON "AccountMeta"("accountId");
