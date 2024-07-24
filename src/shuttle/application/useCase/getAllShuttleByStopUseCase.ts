import {IShuttleRepository} from "../../domain/repository/IShuttleRepository";


export class GetAllShuttleByStopUseCase {
    constructor(readonly repository:IShuttleRepository) {
    }

    async run(shuttleStopId:string){
        try {
            return await this.repository.getAllShuttleByStop(shuttleStopId);
        }catch(err){
            throw err;
        }
    }
}