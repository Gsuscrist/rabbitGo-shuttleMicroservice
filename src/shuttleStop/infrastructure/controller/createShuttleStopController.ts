import {Request, Response} from 'express';
import {CreateShuttleStopUseCase} from "../../application/useCase/createShuttleStopUseCase";

export class CreateShuttleStopController {
    constructor(readonly useCase:CreateShuttleStopUseCase) {
    }

    async execute(req: Request, res: Response){
        try {
            let {name,latitude,longitude} = req.body
            await this.useCase.run(name, latitude,longitude);
            return res.status(201).send({
                status: "success",
                data:[],
                message:"shuttleStop creation successfully",
            })
        }catch(error){
            return res.status(500).send({
                status: "error",
                error: error,
            })
        }
    }
}