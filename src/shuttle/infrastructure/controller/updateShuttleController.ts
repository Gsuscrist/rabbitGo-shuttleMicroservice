import {Request, Response} from 'express';
import {UpdateShuttleUseCase} from "../../application/useCase/updateShuttleUseCase";
import {Validator} from "../services/validator";

export class UpdateShuttleController {
    constructor(readonly useCase:UpdateShuttleUseCase,readonly validator:Validator) {
    }

    async execute(req: Request, res: Response) {
        try {
            let id = req.params.id;
            let {name, price, colonies, shuttleStopId} = req.body;
            let {startTime,endTime}=req.body.shift;
            if (await this.validator.validateShuttleTimes(startTime,endTime)) {
                const shuttle = await this.useCase.run(id, name, price, startTime, endTime, colonies, shuttleStopId)
               if (shuttle) {
                    res.status(201).send({
                        status: "success",
                        data: shuttle,
                        message: "shuttle updated successfully"
                    })
                }
            }else{
                res.status(417).send({
                    status: "error",
                    data:[],
                    message:"shuttle obtained failed\n check shift values"
                })
            }
        }catch (e){
            res.status(500).send({
                status:"Error",
                error: e
            });
        }
    }
}