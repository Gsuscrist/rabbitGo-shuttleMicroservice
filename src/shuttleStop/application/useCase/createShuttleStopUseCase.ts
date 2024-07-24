import {IShuttleStopRepository} from "../../domain/repository/IShuttleStopRepository";

export class CreateShuttleStopUseCase {
    constructor(readonly repository:IShuttleStopRepository) {
    }

    async run(
        name: string,
        latitude:number,
        longitude:number,
    ){
        try {
            await this.repository.create(name, latitude, longitude);
        }catch(error){
            throw new Error("Unexpected error while running createShuttleStopUseCase");
        }
    }
}