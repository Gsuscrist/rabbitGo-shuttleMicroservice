import {IShuttleRepository} from "../../domain/repository/IShuttleRepository";


export class GetShuttleByIdUseCase {
    constructor(readonly repository:IShuttleRepository) {
    }

    async run(id:string){
        try {
            return await this.repository.getById(id);
        }catch(err){
            throw err;
        }
    }
}