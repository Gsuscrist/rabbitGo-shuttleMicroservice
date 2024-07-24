import {Request, Response} from 'express';
import {GetAllByShuttleIdShuttleRouteUseCase} from "../../application/useCase/getAllByShuttleIdShuttleRouteUseCase";
import {GetByIdShuttleRouteUseCase} from "../../application/useCase/getByIdShuttleRouteUseCase";

export class GetByIdShuttleRouteController {
    constructor(readonly useCase:GetByIdShuttleRouteUseCase) {
    }

    async execute(req: Request, res: Response) {
        try {
            const shuttleRoutes = await this.useCase.run(req.params.id);
            if (shuttleRoutes){
                return res.status(200).send({
                    status:"success",
                    data:shuttleRoutes,
                    message:"ShuttleRoute getting successfully"
                })
            }
            res.status(417).send({
                status:"Error",
                data:[],
                message:"ShuttleRoute getting fail"
            })
        }catch (e){
            res.status(500).send({
                status:"error",
                error: e
            })
        }
    }
}