import {Request, Response} from 'express';
import {CreateShuttleRouteUseCase} from "../../application/useCase/createShuttleRouteUseCase";

export class CreateShuttleRouteController{
    constructor(readonly useCase:CreateShuttleRouteUseCase) {
    }

    async execute(req: Request, res: Response){
        try {
            let {route,shuttleId,estimatedTripTime,direction} = req.body;

            await this.useCase.run(route,shuttleId,estimatedTripTime,direction);
            return res.status(201).send({
                status:"success",
                data:[],
                message:"ShuttleRoute creation successfully"
            })
        }catch (e){
            console.log(e)
            res.status(500).send({
                status:"Error",
                error: e
            })
        }
    }
}