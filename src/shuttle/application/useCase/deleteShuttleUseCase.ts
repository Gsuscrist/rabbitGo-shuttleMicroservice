import {IShuttleRepository} from "../../domain/repository/IShuttleRepository";


export class DeleteShuttleUseCase {
    constructor(readonly repository:IShuttleRepository) {
    }

    async run(id:string){
        try {
            await this.repository.delete(id);
        }catch(err){
            throw err;
        }
    }
}