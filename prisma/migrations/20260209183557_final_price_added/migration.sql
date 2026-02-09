/*
  Warnings:

  - You are about to drop the column `finalprice` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "finalprice",
ADD COLUMN     "finalPrice" DOUBLE PRECISION;
