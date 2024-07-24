import {Request, Response} from 'express';
import {GetAllShuttleByNameUseCase} from "../../application/useCase/getAllShuttleByNameUseCase";

export class GetAllShuttleByNameController {
    constructor(readonly useCase:GetAllShuttleByNameUseCase){}

    async execute(req:Request, res:Response){
        try {
            let {name} = req.body
            console.log("name: ",name)
            const shuttle = await this.useCase.run(name)
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
        }catch(err){
            res.status(500).send({
                status: "error",
                error: err
            })
        }
    }
}