import {PrismaClient} from '@prisma/client'
import { Shuttle } from "../../domain/entity/shuttle";
import {IShuttleRepository} from "../../domain/repository/IShuttleRepository";
import {v4 as uuidv4} from 'uuid';

const prisma = new PrismaClient();
export class MysqlShuttleRepository implements IShuttleRepository {


    async create(name: string, price: number, startTime: string, endTime: string, colonies: [string], shuttleStopId: [string]): Promise<void> {
        try {
            const id = uuidv4()
            await prisma.shuttle.create({
                data: {
                    id,
                    name,
                    price,
                    startTime,
                    endTime,
                    colonies: Array.from(colonies),
                    shuttleStop: {
                        connect: shuttleStopId.map(id => ({ id }))
                    }
                }
            });
        } catch (e) {
            console.log("error: \n", e);
            throw new Error("Error creating shuttle");
        }
    }

    async delete(id: string): Promise<void> {
        try {
            await prisma.shuttle.update({
                where:{id:id},
                data:{
                    deletedAt:new Date()
                }
            })
        }catch(err){
            console.log("error: \n",err)
            throw err;
        }
    }

    async getById(id: string): Promise<Shuttle | null> {
        try {
            const shuttle = await prisma.shuttle.findUnique({
                where: {
                    id:id,
                    AND:{
                        deletedAt:null
                    }
                }
            });
            if (shuttle){
                const newShuttle = new Shuttle(id,shuttle.name,shuttle.price,shuttle.startTime,shuttle.endTime,shuttle.colonies as [string])
                await newShuttle.validate()
                return newShuttle
            }
            return null;
        }catch (e){
            console.log("error: \n",e)
            return null
        }
    }

    async getAll(): Promise<Shuttle[]|null> {
        try {
            const shuttles = await prisma.shuttle.findMany({
                where:{
                    AND:{
                        deletedAt:null
                    }
                }
            })
            if (shuttles){
                return shuttles.map(shuttle => {
                    const newShuttle = new Shuttle(shuttle.id, shuttle.name, shuttle.price, shuttle.startTime, shuttle.endTime, shuttle.colonies as [string]);
                    newShuttle.validate()
                    return newShuttle
                });
            }
            return null;
        }catch (err){
            console.log("error: \n",err);
            return null
        }
    }

    async getAllShuttleByStop(shuttleStopId: string): Promise<Shuttle[]|null> {
        try {
            const shuttles = await prisma.shuttle.findMany({
                where: {
                    shuttleStop: {
                        some: {
                            id: shuttleStopId
                        }
                    },
                    AND:{
                        deletedAt:null
                    }
                }
            });
            return shuttles.map(shuttle => {
                const newShuttle =new Shuttle(shuttle.id, shuttle.name, shuttle.price, shuttle.startTime, shuttle.endTime, shuttle.colonies as [string])
                newShuttle.validate()
                return newShuttle

            });
        } catch (e) {
            console.log("error: \n", e);
            return [];
        }
    }

    async getByName(name: string): Promise<Shuttle[] | null> {
        try {
            console.log("name: ",name)
            const shuttles = await prisma.shuttle.findMany({
                where: {
                    name:{
                        contains: name,
                    },
                    AND:{
                        deletedAt:null
                    }
                }
            })
            if (shuttles){
                return shuttles.map(shuttle => {
                    const newShuttle =new Shuttle(shuttle.id, shuttle.name, shuttle.price, shuttle.startTime, shuttle.endTime, shuttle.colonies as [string])
                    newShuttle.validate()
                    return newShuttle
                });
            }
            return null;
        }catch (e){
            console.log("error: \n",e)
            return null
        }
    }

    async update(id: string, name: string, price: number, startTime: string, endTime: string, colonies: [string], shuttleStopId: [string]): Promise<Shuttle | null> {
        try {
            const updatedShuttle = await prisma.shuttle.update({
                where: { id },
                data: {
                    name,
                    price,
                    startTime,
                    endTime,
                    colonies: Array.from(colonies),
                    shuttleStop: {
                        connect: shuttleStopId.map(id => ({ id }))
                    }
                }
            });

            const newShuttle = new Shuttle(id, updatedShuttle.name, updatedShuttle.price, updatedShuttle.startTime, updatedShuttle.endTime, updatedShuttle.colonies as [string]);
            await newShuttle.validate()
            return newShuttle
        } catch (e) {
            console.log("error: \n", e);
            return null;
        }
    }

}