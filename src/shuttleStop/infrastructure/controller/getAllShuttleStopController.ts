import {Request, Response} from 'express';
import {GetAllShuttleStopUseCase} from "../../application/useCase/getAllShuttleStopUseCase";

export class GetAllShuttleStopController {
    constructor(readonly useCase:GetAllShuttleStopUseCase) {
    }

    async execute(req:Request, res:Response) {
        try {
            const shuttleStops = await this.useCase.run()
            if (shuttleStops){
                return res.status(200).send({
                    status:"Success",
                    data:shuttleStops,
                    message:"shuttleStops getting successfully"
                })
            }
            return res.status(417).send({
                status:"error",
                data:[],
                message:"shuttleStop getting fail",
            })
        }catch (err){
            res.status(500).send({
                status:"error",
                error:err,
            })
        }
    }
}