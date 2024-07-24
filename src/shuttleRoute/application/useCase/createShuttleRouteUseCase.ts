import {IShuttleRouteRepository} from "../../domain/repository/IShuttleRouteRepository";

export class CreateShuttleRouteUseCase{
    constructor(readonly repository:IShuttleRouteRepository) {
    }

    async run(
        route:[number,number][],
        shuttleId:string,
        estimatedTripTime:string,
        direction:string
    ){
        try {
            await this.repository.create(route,shuttleId,estimatedTripTime,direction);
        }catch(error){
            throw new Error("Unexpected error while running CreateShuttleRouteUseCase");
        }
    }
}