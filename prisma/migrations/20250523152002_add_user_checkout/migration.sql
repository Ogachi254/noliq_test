/*
  Warnings:

  - You are about to drop the column `stripeSessionId` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `creatorId` on the `Event` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "stripeSessionId",
ADD COLUMN     "checkoutId" TEXT;

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "creatorId",
ALTER COLUMN "category" DROP DEFAULT;

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
