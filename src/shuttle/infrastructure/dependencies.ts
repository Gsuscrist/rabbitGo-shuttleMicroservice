import {MysqlShuttleRepository} from "./repository/mysqlShuttleRepository";
import {CreateShuttleUseCase} from "../application/useCase/createShuttleUseCase";
import {CreateShuttleController} from "./controller/createShuttleController";
import {DeleteShuttleUseCase} from "../application/useCase/deleteShuttleUseCase";
import {DeleteShuttleController} from "./controller/deleteShuttleController";
import {GetAllShuttleUseCase} from "../application/useCase/getAllShuttleUseCase";
import {GetAllShuttleController} from "./controller/getAllShuttleController";
import {GetAllShuttleByStopUseCase} from "../application/useCase/getAllShuttleByStopUseCase";
import {GetAllShuttleByStopController} from "./controller/getAllShuttleByStopController";
import {GetShuttleByIdUseCase} from "../application/useCase/getShuttleByIdUseCase";
import {GetShuttleByIdController} from "./controller/getShuttleByIdController";
import {GetAllShuttleByNameUseCase} from "../application/useCase/getAllShuttleByNameUseCase";
import {GetAllShuttleByNameController} from "./controller/getAllShuttleByNameController";
import {UpdateShuttleUseCase} from "../application/useCase/updateShuttleUseCase";
import {UpdateShuttleController} from "./controller/updateShuttleController";
import {Validator} from "./services/validator";
import {VerifyShuttleConsumer} from "./brocker/consumer/verifyShuttleConsumer";

export const database = new MysqlShuttleRepository()
const validator = new Validator(database)

export const createShuttleUseCase = new CreateShuttleUseCase(database)
export const createShuttleController = new CreateShuttleController(createShuttleUseCase,validator)

export const deleteShuttleUseCase = new DeleteShuttleUseCase(database)
export const deleteShuttleController = new DeleteShuttleController(deleteShuttleUseCase)

export const getAllShuttleByStopUseCase = new GetAllShuttleByStopUseCase(database)
export const getAllShuttleByStopController = new GetAllShuttleByStopController(getAllShuttleByStopUseCase)

export const getAllShuttleUseCase = new GetAllShuttleUseCase(database)
export const getAllShuttleController = new GetAllShuttleController(getAllShuttleUseCase)

export const getShuttleByIdUseCase = new GetShuttleByIdUseCase(database)
export const getShuttleByIdController = new GetShuttleByIdController(getShuttleByIdUseCase)

export const getAllShuttleByNameUseCase = new GetAllShuttleByNameUseCase(database)
export const getAllShuttleByNameController = new GetAllShuttleByNameController(getAllShuttleByNameUseCase)

export const updateShuttleUseCase = new UpdateShuttleUseCase(database)
export const updateShuttleController = new UpdateShuttleController(updateShuttleUseCase,validator)

export const initVerifyShuttleConsumer = new VerifyShuttleConsumer(database)