import {IShuttleRouteRepository} from "../../domain/repository/IShuttleRouteRepository";

export class GetAllByShuttleIdShuttleRouteUseCase {
    constructor(readonly repository:IShuttleRouteRepository) {
    }

    async run(shuttleId:string){
        try {
            return await this.repository.getAllByShuttleId(shuttleId)
        }catch(err){
            throw new Error("Unexpected error while running GetAllByShuttleIdShuttleRouteUseCase");
        }
    }
}