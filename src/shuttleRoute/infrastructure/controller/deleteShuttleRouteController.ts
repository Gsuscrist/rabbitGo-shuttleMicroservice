import { Request, Response } from 'express';
import {DeleteShuttleRouteUseCase} from "../../application/useCase/deleteShuttleRouteUseCase";

export class DeleteShuttleRouteController {
    constructor(readonly useCase:DeleteShuttleRouteUseCase) {
    }

    async execute(req:Request, res:Response) {
        try {
            let id = req.params.id;
            await this.useCase.run(id);
            return res.status(204).send({
                status:"Success",
                data:[],
                message:"ShuttleRoute deletion successfully"
            })
        }catch (err){
            throw new Error("Unexpected error while running DeleteShuttleRouteController");
        }
    }
}