import {PrismaClient} from '@prisma/client'
import { ShuttleStop } from "../../domain/entity/shuttleStop";
import {IShuttleStopRepository} from "../../domain/repository/IShuttleStopRepository";
import {v4 as uuidv4} from 'uuid';

const prisma = new PrismaClient()

export class MySqlShuttleStopRepository implements IShuttleStopRepository {
    async create(name: string, latitude: number, longitude: number): Promise<void> {
        try {
            let id = uuidv4()
            await prisma.shuttleStop.create({
                data:{
                    id:id,
                    name:name,
                    latitude:latitude,
                    longitude:longitude,
                }
            })
        }catch (e){
            console.log("error: \n",e)
            throw new Error("Unexpected error while creating ShuttleStop");
        }
    }

    async delete(id: string): Promise<void> {
        try {
            const shuttleStop = await prisma.shuttleStop.update({
                where:{id:id},
                data:{
                    deletedAt:new Date()
                }
            })
        }catch (e){
            console.log("error: \n",e)
            throw new Error("Unexpected error while deleting ShuttleStop");
        }
    }

    async getAll(): Promise<ShuttleStop[] | null> {
        try {
            const shuttleStops = await prisma.shuttleStop.findMany({
                where:{
                    AND:{
                        deletedAt:null
                    }
                }
            })
            return shuttleStops.map(shuttleStop=>
                new ShuttleStop(
                    shuttleStop.id,
                    shuttleStop.name,
                    shuttleStop.latitude.toNumber(),
                    shuttleStop.longitude.toNumber(),
                    null
            ))
        }catch (e){
            console.log("error: \n",e)
            throw new Error("Unexpected error while getting ShuttleStops");
        }
    }

    async getShuttleStopById(id: string): Promise<ShuttleStop | null> {
        try {
            const shuttleStop = await prisma.shuttleStop.findUnique({
                where:{
                    id:id,
                    AND:{deletedAt:null}
                }
            })
            if(shuttleStop){
                const newShuttleStop =  new ShuttleStop(id,shuttleStop.name,shuttleStop.latitude.toNumber(),shuttleStop.longitude.toNumber(),null)
                await newShuttleStop.validate()
                return newShuttleStop
            }
            return null

        }catch (e){
            console.log("error: \n",e)
            throw new Error("Unexpected error while getting ShuttleStopById");
        }
    }

    async update(id: string, name: string, latitude: number, longitude: number): Promise<ShuttleStop | null> {
        try {
            const shuttleStop = await prisma.shuttleStop.update({
                where:{
                    id:id,
                    AND:{deletedAt:null}
                },
                data:{
                    name:name,
                    latitude:latitude,
                    longitude:longitude
                }
            })
            if (shuttleStop){
                const newShuttleStop = new ShuttleStop(id,name,latitude,longitude,null)
                await newShuttleStop.validate()
                return newShuttleStop
            }
            return null
        }catch (e){
            console.log("error:\n",e);
            throw new Error("Unexpected error while updating ShuttleStop");
        }
    }

}