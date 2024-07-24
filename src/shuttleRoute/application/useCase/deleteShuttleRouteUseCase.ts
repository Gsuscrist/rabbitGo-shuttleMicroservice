import {IShuttleRouteRepository} from "../../domain/repository/IShuttleRouteRepository";

export class DeleteShuttleRouteUseCase{
    constructor(readonly repository:IShuttleRouteRepository) {
    }

    async run(id:string){
        try {
            await this.repository.delete(id);
        }catch(err){
            throw new Error("Unexpected error while running DeleteShuttleRouteUseCase");
        }
    }
}