-- CreateEnum
CREATE TYPE "ThemePreference" AS ENUM ('LIGHT', 'DARK', 'AUTO');

-- CreateTable
CREATE TABLE "UserMeta" (
    "id" TEXT NOT NULL,
    "clerkId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "UserMeta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),
    "userMetaId" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Note" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),
    "userMetaId" TEXT NOT NULL,

    CONSTRAINT "Note_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WalletRequisition" (
    "id" TEXT NOT NULL,
    "requisitionId" TEXT NOT NULL,
    "agreementId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),
    "userMetaId" TEXT NOT NULL,

    CONSTRAINT "WalletRequisition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WalletAccount" (
    "id" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "requisitionId" TEXT NOT NULL,
    "balance" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),
    "userMetaId" TEXT NOT NULL,

    CONSTRAINT "WalletAccount_pkey" PRIMARY KEY ("id")
);

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

-- CreateTable
CREATE TABLE "WalletTransaction" (
    "id" TEXT NOT NULL,
    "transactionId" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "bookingDate" TEXT NOT NULL,
    "valueDate" TEXT NOT NULL,
    "bookingDateTime" TIMESTAMP(3) NOT NULL,
    "valueDateTime" TIMESTAMP(3) NOT NULL,
    "transactionAmount" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "sourceCurrency" TEXT,
    "targetCurrency" TEXT,
    "exchangeRate" TEXT,
    "proprietaryBankTransactionCode" TEXT,
    "creditorName" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),
    "walletAccountId" TEXT NOT NULL,

    CONSTRAINT "WalletTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_NoteToTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "UserMeta_clerkId_key" ON "UserMeta"("clerkId");

-- CreateIndex
CREATE UNIQUE INDEX "WalletRequisition_requisitionId_key" ON "WalletRequisition"("requisitionId");

-- CreateIndex
CREATE UNIQUE INDEX "WalletAccount_accountId_key" ON "WalletAccount"("accountId");

-- CreateIndex
CREATE UNIQUE INDEX "WalletTransaction_transactionId_key" ON "WalletTransaction"("transactionId");

-- CreateIndex
CREATE UNIQUE INDEX "_NoteToTag_AB_unique" ON "_NoteToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_NoteToTag_B_index" ON "_NoteToTag"("B");

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_userMetaId_fkey" FOREIGN KEY ("userMetaId") REFERENCES "UserMeta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Note" ADD CONSTRAINT "Note_userMetaId_fkey" FOREIGN KEY ("userMetaId") REFERENCES "UserMeta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WalletRequisition" ADD CONSTRAINT "WalletRequisition_userMetaId_fkey" FOREIGN KEY ("userMetaId") REFERENCES "UserMeta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WalletAccount" ADD CONSTRAINT "WalletAccount_requisitionId_fkey" FOREIGN KEY ("requisitionId") REFERENCES "WalletRequisition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WalletAccount" ADD CONSTRAINT "WalletAccount_userMetaId_fkey" FOREIGN KEY ("userMetaId") REFERENCES "UserMeta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WalletTransaction" ADD CONSTRAINT "WalletTransaction_walletAccountId_fkey" FOREIGN KEY ("walletAccountId") REFERENCES "WalletAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NoteToTag" ADD CONSTRAINT "_NoteToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Note"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NoteToTag" ADD CONSTRAINT "_NoteToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
