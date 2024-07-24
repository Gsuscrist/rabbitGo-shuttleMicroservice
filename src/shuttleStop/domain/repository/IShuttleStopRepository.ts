import {ShuttleStop} from "../entity/shuttleStop";

export interface IShuttleStopRepository {
    create(
        name: string,
        latitude: number,
        longitude: number,
    ):Promise<void>;

    delete(id: string):Promise<void>;

    getAll(): Promise<ShuttleStop[]|null>;
    getShuttleStopById(id: string):Promise<ShuttleStop|null>;
    //TODO: add get between coordinate

    update(
        id: string,
        name: string,
        latitude: number,
        longitude: number
    ):Promise<ShuttleStop|null>;
}