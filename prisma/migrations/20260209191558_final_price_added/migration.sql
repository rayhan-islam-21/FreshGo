/*
  Warnings:

  - Made the column `discount` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `stock` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `finalPrice` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "discount" SET NOT NULL,
ALTER COLUMN "stock" SET NOT NULL,
ALTER COLUMN "finalPrice" SET NOT NULL;
