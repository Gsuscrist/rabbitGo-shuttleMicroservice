import {IShuttleRepository} from "../../domain/repository/IShuttleRepository";

export class UpdateShuttleUseCase{
    constructor(readonly repository:IShuttleRepository) {
    }

    async run(
        id:string,
        name: string,
        price:number,
        startTime: string,
        endTime: string,
        colonies:[string],
        shuttleStopId: [string]
    ){
        try {
            return await this.repository.update(id,name, price, startTime, endTime, colonies, shuttleStopId)
        }catch(err){
            throw err;
        }
    }
}