import {IShuttleRepository} from "../../domain/repository/IShuttleRepository";

export class CreateShuttleUseCase{
    constructor(readonly repository:IShuttleRepository) {
    }

    async run(
        name: string,
        price:number,
        startTime: string,
        endTime: string,
        colonies:[string],
        shuttleStopId: [string]
    ){
        try {
            await this.repository.create(name, price, startTime, endTime, colonies, shuttleStopId)
        }catch(err){
            throw err;
        }
    }
}