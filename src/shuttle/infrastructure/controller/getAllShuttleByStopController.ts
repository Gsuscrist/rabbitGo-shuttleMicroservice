import {Request, Response} from 'express';
import {GetAllShuttleByStopUseCase} from "../../application/useCase/getAllShuttleByStopUseCase";

export class GetAllShuttleByStopController {
    constructor(readonly useCase:GetAllShuttleByStopUseCase) {
    }

    async execute(req: Request, res: Response){
        try {
            let id = req.params.id;
            const shuttle = await this.useCase.run(id)
            if (shuttle){
                return res.status(200).send({
                    status: "success",
                    data:shuttle,
                    message:"shuttle obtained successfully"
                })
            }
            res.status(417).send({
                status: "error",
                data:[],
                message:"shuttle obtained fail"
            })
        }catch (e){
            res.status(500).send({
                status: "error",
                error: e
            })
        }
    }
}