import {Request, Response} from 'express';
import {GetShuttleByIdUseCase} from "../../application/useCase/getShuttleByIdUseCase";

export class GetShuttleByIdController {
    constructor(readonly useCase:GetShuttleByIdUseCase) {
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