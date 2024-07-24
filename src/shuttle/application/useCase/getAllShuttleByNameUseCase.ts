import {IShuttleRepository} from "../../domain/repository/IShuttleRepository";


export class GetAllShuttleByNameUseCase {
    constructor(readonly repository:IShuttleRepository) {
    }

    async run(name:string){
        try {
            return await this.repository.getByName(name);
        }catch(err){
            throw err;
        }
    }
}