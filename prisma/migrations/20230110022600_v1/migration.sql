-- CreateTable
CREATE TABLE "Requisition" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "requisitionId" TEXT NOT NULL,
    "agreementId" TEXT NOT NULL,

    CONSTRAINT "Requisition_pkey" PRIMARY KEY ("id")
);
