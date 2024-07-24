import {Request, Response} from 'express';
import {GetShuttleByIdUseCase} from "../../../shuttle/application/useCase/getShuttleByIdUseCase";
import {GetShuttleStopByIdUsecase} from "../../application/useCase/getShuttleStopByIdUsecase";

export class GetShuttleStopByIdController {
    constructor(readonly useCase:GetShuttleStopByIdUsecase) {
    }

    async execute(req: Request, res: Response) {
        try {
            let id = req.params.id;
            const shuttleStop = await this.useCase.run(id)
            if (shuttleStop){
                return res.status(200).send({
                    status:"Success",
                    data:shuttleStop,
                    message:"shuttleStop getting Successfully"
                })
            }
            return res.status(417).send({
                status:"error",
                data:[],
                message:"shuttleStop getting fail",
            })
        }catch(err) {
            res.status(500).send({
                status:"Error",
                error:err
            })
        }
    }
}