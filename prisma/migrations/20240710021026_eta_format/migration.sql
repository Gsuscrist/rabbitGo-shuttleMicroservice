/*
  Warnings:

  - You are about to alter the column `estimatedTripTime` on the `ShuttleRoute` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `ShuttleRoute` MODIFY `estimatedTripTime` VARCHAR(191) NOT NULL;
