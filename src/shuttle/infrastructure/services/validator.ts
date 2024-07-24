import { IShuttleRepository } from "../../domain/repository/IShuttleRepository";

export class Validator {
    constructor(readonly repository: IShuttleRepository) {}

    validateTimeFormat(time: string): boolean {
        const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
        return timeRegex.test(time);
    }

    timeToMinutes(time: string): number {
        const [hours, minutes] = time.split(':').map(Number);
        return hours * 60 + minutes;
    }

    validateShuttleTimes(startTime: string, endTime: string): boolean {
        if (!this.validateTimeFormat(startTime) || !this.validateTimeFormat(endTime)) {
            throw new Error("Invalid time format. Use 'HH:mm'.");
        }
        return this.timeToMinutes(startTime) < this.timeToMinutes(endTime);
    }
}
