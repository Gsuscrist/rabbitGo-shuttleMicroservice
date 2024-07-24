import {Shuttle} from "../entity/shuttle";

export interface IShuttleRepository {
    create(
        name: string,
        price:number,
        startTime: string,
        endTime: string,
        colonies:[string],
        shuttleStopId: [string],
    ):Promise<void>

    delete(id: string):Promise<void>

    getById(id: string): Promise<Shuttle|null>;
    getAll():Promise<Shuttle[]|null>;
    getAllShuttleByStop(shuttleStopId:string):Promise<Shuttle[]|null>;
    getByName(name:string):Promise<Shuttle[]|null>;

    update(
        id:string,
        name: string,
        price:number,
        startTime: string,
        endTime: string,
        colonies:[string],
        shuttleStopId?: [string],
    ):Promise<Shuttle|null>



}