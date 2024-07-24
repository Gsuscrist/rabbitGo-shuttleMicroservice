import {ValidatableEntity} from "../validation/validatableEntity";

export class ShuttleStop implements ValidatableEntity{
    constructor(
        readonly id:string,
        readonly name: string,
        readonly latitude: number,
        readonly longitude: number,
        readonly deletedAt: Date | null
    ) {
    }
    async validate() {
        return Promise.resolve();
    }

}