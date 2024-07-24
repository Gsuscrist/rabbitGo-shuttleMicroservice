import {IShuttleStopRepository} from "../../domain/repository/IShuttleStopRepository";

export class GetShuttleStopByIdUsecase {
    constructor(readonly repository:IShuttleStopRepository) {
    }

    async run(id:string){
        try {
            return await this.repository.getShuttleStopById(id);
        }catch(err){
            throw new Error("Unexpected error while getShuttleStopByIdUsecase");
        }
    }
}

