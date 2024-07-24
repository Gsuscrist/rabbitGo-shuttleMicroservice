/*
  Warnings:

  - Added the required column `estimatedTripTime` to the `ShuttleRoute` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ShuttleRoute` ADD COLUMN `estimatedTripTime` DOUBLE NOT NULL;
