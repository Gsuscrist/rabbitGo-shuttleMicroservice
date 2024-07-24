import {ShuttleRoute} from "../entity/shuttleRoute";

export interface IShuttleRouteRepository {
    create(
        route:[number, number][],
        shuttleId:string,
        estimatedTripTime:string,
        direction:string
    ):Promise<void>;
    delete(id:string):Promise<void>;

    getAllByShuttleId(shuttleId:string):Promise<ShuttleRoute[]|null>;
    getById(id:string):Promise<ShuttleRoute|null>;

    update(
        id:string,
        route:[number, number][],
        shuttleId:string,
        estimatedTripTime:string,
        direction:string
    ):Promise<ShuttleRoute|null>;
}