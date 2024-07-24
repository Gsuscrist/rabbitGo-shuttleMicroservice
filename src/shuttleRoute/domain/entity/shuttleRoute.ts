import {ValidatableEntity} from "../validation/validatableEntity";

export class ShuttleRoute implements ValidatableEntity{
    constructor(
        readonly id:string,
        readonly route:[number,number][],
        readonly shuttleId:string,
        readonly estimatedTripTime:string,
        readonly direction:string,
        readonly deletedAt:Date|null
    ) {
    }
    async validate() {
        return Promise.resolve();
    }
}