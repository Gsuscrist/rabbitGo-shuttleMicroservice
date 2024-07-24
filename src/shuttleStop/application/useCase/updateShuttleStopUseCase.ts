import {IShuttleStopRepository} from "../../domain/repository/IShuttleStopRepository";

export class UpdateShuttleStopUseCase {
    constructor(readonly repository:IShuttleStopRepository) {
    }

    async run(
        id: string,
        name: string,
        latitude:number,
        longitude:number,
    ){
        try {
            return await this.repository.update(id,name, latitude, longitude);
        }catch(error){
            throw new Error("Unexpected error while running updateShuttleStopUseCase");
        }
    }
}