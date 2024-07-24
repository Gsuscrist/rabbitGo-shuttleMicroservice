/*
  Warnings:

  - You are about to drop the column `direccion` on the `ShuttleRoute` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `ShuttleRoute` DROP COLUMN `direccion`,
    ADD COLUMN `direction` VARCHAR(191) NULL;
