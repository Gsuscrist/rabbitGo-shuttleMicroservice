import {IShuttleRouteRepository} from "../../domain/repository/IShuttleRouteRepository";

export class UpdateShuttleRouteUseCase{
    constructor(readonly repository:IShuttleRouteRepository) {
    }

    async run(
        id: string,
        route:[number,number][],
        shuttleId:string,
        estimatedTripTime:string,
        direction:string,
    ){
        try {
            return await this.repository.update(id,route,shuttleId,estimatedTripTime,direction);
        }catch(err){
            throw new Error("Unexpected error while running UpdateShuttleRouteUseCase");
        }
    }
}