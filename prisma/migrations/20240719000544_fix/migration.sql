/*
  Warnings:

  - Made the column `direction` on table `ShuttleRoute` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `ShuttleRoute` MODIFY `direction` VARCHAR(191) NOT NULL;
