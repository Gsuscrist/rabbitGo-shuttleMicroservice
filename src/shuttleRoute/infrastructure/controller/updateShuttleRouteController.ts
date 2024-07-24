import {Request, Response} from 'express';
import {UpdateShuttleRouteUseCase} from "../../application/useCase/updateShuttleRouteUseCase";

export class UpdateShuttleRouteController {
    constructor(readonly useCase:UpdateShuttleRouteUseCase) {
    }

    async execute(req: Request, res: Response){
        try {
            let id = req.params.id;
            let {route,shuttleId,estimatedTripTime,direction} = req.body;
            const shuttleRoute = await this.useCase.run(id,route,shuttleId,estimatedTripTime,direction);
            if (shuttleRoute) {
                return res.status(200).send({
                    status:"success",
                    data:shuttleRoute,
                    message:"ShuttleRoute updated successfully"
                })
            }
            return res.status(417).send({
                status:"Error",
                data:[],
                message:"ShuttleRoute update fail"
            })
        }catch (e){
            res.status(500).send({
                status:"error",
                error: e
            })
        }
    }
}