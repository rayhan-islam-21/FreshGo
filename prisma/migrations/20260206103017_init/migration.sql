/*
  Warnings:

  - Added the required column `age` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isMarried` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nationality` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "age" INTEGER NOT NULL,
ADD COLUMN     "isMarried" BOOLEAN NOT NULL,
ADD COLUMN     "nationality" TEXT NOT NULL;
