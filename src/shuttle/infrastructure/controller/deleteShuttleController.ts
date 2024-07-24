import {Request, Response} from 'express';
import {DeleteShuttleUseCase} from "../../application/useCase/deleteShuttleUseCase";

export class DeleteShuttleController {
    constructor(readonly useCase:DeleteShuttleUseCase) {
    }

    async execute(req: Request, res: Response){
        try {
            let id = req.params.id;
            await this.useCase.run(id)
            res.status(204).send({
                status: "success",
                data:[],
                message:"shuttle deletion successfully"
            })

        }catch (e){
            return res.status(500).send({
                status: "error",
                error: e
            })
        }
    }
}