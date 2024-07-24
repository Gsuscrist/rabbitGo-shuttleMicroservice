import {ValidatableEntity} from "../validation/validatableEntity";

export class Shuttle implements ValidatableEntity{

    constructor(
        readonly id:string,
        readonly name: string,
        readonly price:number,
        readonly startTime: string,
        readonly endTime: string,
        readonly colonies:[string],
        readonly shuttleStopId?: [string],
        readonly deleted_at?: Date | null

    ) {
    }

    async validate() {
        return Promise.resolve();
    }

}