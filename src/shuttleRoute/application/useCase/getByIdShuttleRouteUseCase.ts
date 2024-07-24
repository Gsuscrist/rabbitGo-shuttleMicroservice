import {IShuttleRouteRepository} from "../../domain/repository/IShuttleRouteRepository";

export class GetByIdShuttleRouteUseCase{
    constructor(readonly repository:IShuttleRouteRepository) {
    }

    async run(id:string){
        try {
            return await this.repository.getById(id);
        }catch(err){
            throw new Error("Unexpected error while running GetByIdShuttleRouteUseCase");
        }
    }
}