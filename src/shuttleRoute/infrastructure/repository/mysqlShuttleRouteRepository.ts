import {PrismaClient} from "@prisma/client";
import { ShuttleRoute } from "../../domain/entity/shuttleRoute";
import {IShuttleRouteRepository} from "../../domain/repository/IShuttleRouteRepository";
import {v4 as uuidv4} from "uuid";

const prisma = new PrismaClient()
export class MySqlShuttleRouteRepository implements IShuttleRouteRepository {

    async validateDirection(direction:string){
        switch(direction){
            case "departure":
                direction = "departure";
                break;
            case "return":
                direction = "return";
                break;
            default:
                direction="departure"
                break;
        }
        return direction;
    }

    async create(route: [number, number][], shuttleId: string,estimatedTripTime:string,direction:string): Promise<void> {
        try {
            const id = uuidv4()
            await prisma.shuttleRoute.create({
                data:{
                    id:id,
                    route:route,
                    shuttleId:shuttleId,
                    estimatedTripTime:estimatedTripTime,
                    direction:await this.validateDirection(direction),
                }
            })
        }catch (e){
            console.error("error:\n",e);
            throw new Error("Unexpected error while running CreateShuttleRouteUseCase");
        }
    }

    async delete(id: string): Promise<void> {
        try {
            await prisma.shuttleRoute.update({
                where:{
                    id:id
                },
                data:{
                    deletedAt:new Date()
                }
            })
        }catch (e){
            console.error("error:\n",e);
            throw new Error("Unexpected error while running DeleteShuttleRouteUseCase");
        }
    }

    async getAllByShuttleId(shuttleId: string): Promise<ShuttleRoute[] | null> {
        try {
            const shuttleRoutes = await prisma.shuttleRoute.findMany({
                where:{
                    shuttleId:shuttleId,
                    AND:{
                        deletedAt:null
                    }
                }
            })
            if (shuttleRoutes){
                return shuttleRoutes.map(shuttleRoute => {
                    const newShuttleRoute = new ShuttleRoute(
                        shuttleRoute.id,
                        shuttleRoute.route as [number, number][], // Cast JSON to correct type
                        shuttleRoute.shuttleId,
                        shuttleRoute.estimatedTripTime,
                        shuttleRoute.direction,
                        shuttleRoute.deletedAt
                    );
                    newShuttleRoute.validate()
                    return newShuttleRoute;
                });
            }
            return null
        }catch (e){
            console.error("error:\n",e);
            throw new Error("Unexpected error while running GetAllByShuttleId");
        }
    }

    async getById(id: string): Promise<ShuttleRoute | null> {
        try {
            const shuttleRoute = await prisma.shuttleRoute.findUnique({
                where:{
                    id:id,
                    AND:{
                        deletedAt:null
                    }
                }
            })
            if (shuttleRoute){
                const newShuttleRoute = new ShuttleRoute(id,shuttleRoute.route as [number,number][],shuttleRoute.shuttleId,shuttleRoute.estimatedTripTime,shuttleRoute.direction,null)
                await newShuttleRoute.validate()
                return newShuttleRoute;
            }
            return null;
        }catch (e){
            console.error("error:\n",e);
            throw new Error("Unexpected error while running GetById");
        }
    }

    async update(id: string, route: [number, number][], shuttleId: string,estimatedTripTime:string,direction:string): Promise<ShuttleRoute | null> {
        try {
            const shuttleRoute = await prisma.shuttleRoute.update({
                where:{
                    id:id,
                    AND:{
                        deletedAt:null
                    }
                },
                data:{
                    route:route,
                    shuttleId:shuttleId,
                    estimatedTripTime:estimatedTripTime,
                    direction:await this.validateDirection(direction),
                }
            })
            if (shuttleRoute){
                const newShuttleRoute =  new ShuttleRoute(id,shuttleRoute.route as [number,number][],shuttleRoute.shuttleId,shuttleRoute.estimatedTripTime,shuttleRoute.direction,null)
                await newShuttleRoute.validate()
                return newShuttleRoute
            }
            return null;
        }catch (e){
            console.log("error:\n",e);
            throw new Error("Unexpected error while running UpdateShuttleRouteUseCase");
        }
    }

}