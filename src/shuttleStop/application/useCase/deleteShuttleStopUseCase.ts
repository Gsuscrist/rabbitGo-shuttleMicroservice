import {IShuttleStopRepository} from "../../domain/repository/IShuttleStopRepository";

export class DeleteShuttleStopUseCase {
    constructor(readonly repository:IShuttleStopRepository) {
    }

    async run(id:string){
        try {
            await this.repository.delete(id);
        }catch(err){
            throw new Error("Unexpected error while running deleteShuttleStopUseCase");
        }
    }
}