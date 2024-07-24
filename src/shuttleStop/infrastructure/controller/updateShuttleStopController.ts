import {Request, Response} from 'express';
import {UpdateShuttleStopUseCase} from "../../application/useCase/updateShuttleStopUseCase";

export class UpdateShuttleStopController {
    constructor(readonly useCase:UpdateShuttleStopUseCase) {}

    async execute(req: Request, res: Response) {
        try {
            let id = req.params.id;
            let {name, latitude,longitude} = req.body
            const shuttleStop = await this.useCase.run(id,name,latitude,longitude);
            return res.status(200).send({
                status: "success",
                data:shuttleStop,
                message:"shuttleStop updating successfully",
            })
        }catch(err) {
            res.status(500).send({
                status:"error",
                error:err,
            })
        }
    }
}