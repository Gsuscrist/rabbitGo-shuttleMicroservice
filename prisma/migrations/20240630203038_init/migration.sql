-- CreateTable
CREATE TABLE `Shuttle` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,
    `startTime` VARCHAR(191) NOT NULL,
    `endTime` VARCHAR(191) NOT NULL,
    `colonies` JSON NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ShuttleStop` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `latitude` DECIMAL(65, 30) NOT NULL,
    `longitude` DECIMAL(65, 30) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ShuttleRoute` (
    `id` VARCHAR(191) NOT NULL,
    `route` JSON NOT NULL,
    `shuttleId` VARCHAR(191) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ShuttleToShuttleStop` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_ShuttleToShuttleStop_AB_unique`(`A`, `B`),
    INDEX `_ShuttleToShuttleStop_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ShuttleRoute` ADD CONSTRAINT `ShuttleRoute_shuttleId_fkey` FOREIGN KEY (`shuttleId`) REFERENCES `Shuttle`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ShuttleToShuttleStop` ADD CONSTRAINT `_ShuttleToShuttleStop_A_fkey` FOREIGN KEY (`A`) REFERENCES `Shuttle`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ShuttleToShuttleStop` ADD CONSTRAINT `_ShuttleToShuttleStop_B_fkey` FOREIGN KEY (`B`) REFERENCES `ShuttleStop`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
