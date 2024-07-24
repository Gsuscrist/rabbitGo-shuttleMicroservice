import {Request, Response} from 'express';
import {CreateShuttleUseCase} from "../../application/useCase/createShuttleUseCase";
import {Validator} from "../services/validator";

export class CreateShuttleController {
    constructor(readonly useCase:CreateShuttleUseCase,readonly validator:Validator) {
    }

    async execute(req: Request, res: Response) {
        try {
            let {name, price, colonies, shuttleStopId} = req.body;
            let {startTime,endTime}=req.body.shift;
            if (this.validator.validateShuttleTimes(startTime, endTime)) {
                await this.useCase.run(name, price, startTime, endTime, colonies, shuttleStopId)
                return res.status(201).send({
                    status: "success",
                    data: [],
                    message: "shuttle creation successfully"
                })
            }else{
                res.status(417).send({
                    status:"error",
                    data:[],
                    message:"shuttle creation failed\n check shift values"
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