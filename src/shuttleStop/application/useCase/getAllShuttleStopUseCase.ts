import {IShuttleStopRepository} from "../../domain/repository/IShuttleStopRepository";

export class GetAllShuttleStopUseCase{
    constructor(readonly repository:IShuttleStopRepository) {
    }

    async run(){
        try {
            return await this.repository.getAll()
        }catch(err){
            throw new Error("Unexpected error while running getAllShuttleStopUseCase");
        }
    }
}