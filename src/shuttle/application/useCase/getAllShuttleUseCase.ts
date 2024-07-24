import {IShuttleRepository} from "../../domain/repository/IShuttleRepository";


export class GetAllShuttleUseCase {
    constructor(readonly repository:IShuttleRepository) {
    }

    async run(){
        try {
            return await this.repository.getAll();
        }catch(err){
            throw err;
        }
    }
}