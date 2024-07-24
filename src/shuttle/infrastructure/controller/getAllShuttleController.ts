import {Request, Response} from 'express';
import {GetAllShuttleUseCase} from "../../application/useCase/getAllShuttleUseCase";

export class GetAllShuttleController {
    constructor(readonly useCase:GetAllShuttleUseCase) {
    }

    async execute(req: Request, res: Response){
        try {
            const shuttle = await this.useCase.run()
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
                message:"shuttle obtained failed"
            })
        }catch(err){
            res.status(500).send({
                status: "error",
                error: err
            })
        }
    }
}