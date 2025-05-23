/*
  Warnings:

  - You are about to drop the `Checkout` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `updatedAt` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_userId_fkey";

-- DropForeignKey
ALTER TABLE "Checkout" DROP CONSTRAINT "Checkout_eventId_fkey";

-- DropForeignKey
ALTER TABLE "Checkout" DROP CONSTRAINT "Checkout_userId_fkey";

-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "stripeSessionId" TEXT;

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "creatorId" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "category" SET DEFAULT 'upcoming';

-- DropTable
DROP TABLE "Checkout";

-- DropTable
DROP TABLE "User";
