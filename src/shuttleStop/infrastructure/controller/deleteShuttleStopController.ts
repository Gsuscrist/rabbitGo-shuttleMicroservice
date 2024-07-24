import {Request, Response} from 'express';
import {DeleteShuttleStopUseCase} from "../../application/useCase/deleteShuttleStopUseCase";

export class DeleteShuttleStopController {
    constructor(readonly useCase:DeleteShuttleStopUseCase) {
    }
    async execute(req: Request, res: Response) {
        try {
            let id = req.params.id;
            await this.useCase.run(id)
            return res.status(204).send({
                status:"Success",
                data:[],
                message:"shuttleStop deletion Successfully"
            })
        }catch (err){
            res.status(500).send({
                status: "error",
                error: err
            })
        }
    }
}