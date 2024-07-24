import {MySqlShuttleStopRepository} from "./repository/mysqlShuttleStopRepository";
import {CreateShuttleStopUseCase} from "../application/useCase/createShuttleStopUseCase";
import {CreateShuttleStopController} from "./controller/createShuttleStopController";
import {DeleteShuttleStopUseCase} from "../application/useCase/deleteShuttleStopUseCase";
import {DeleteShuttleStopController} from "./controller/deleteShuttleStopController";
import {UpdateShuttleStopUseCase} from "../application/useCase/updateShuttleStopUseCase";
import {UpdateShuttleStopController} from "./controller/updateShuttleStopController";
import {GetAllShuttleStopUseCase} from "../application/useCase/getAllShuttleStopUseCase";
import {GetAllShuttleStopController} from "./controller/getAllShuttleStopController";
import {GetShuttleStopByIdUsecase} from "../application/useCase/getShuttleStopByIdUsecase";
import {GetShuttleStopByIdController} from "./controller/getShuttleStopByIdController";

export const database = new MySqlShuttleStopRepository()

export const createShuttleStopUseCase = new CreateShuttleStopUseCase(database)
export const createShuttleStopController = new CreateShuttleStopController(createShuttleStopUseCase)

export const deleteShuttleStopUseCase = new DeleteShuttleStopUseCase(database)
export const deleteShuttleStopController = new DeleteShuttleStopController(deleteShuttleStopUseCase)

export const getAllShuttleStopUseCase = new GetAllShuttleStopUseCase(database)
export const getAllShuttleStopController = new GetAllShuttleStopController(getAllShuttleStopUseCase)

export const getShuttleStopByIdUseCase = new GetShuttleStopByIdUsecase(database)
export const getShuttleStopByIdController = new GetShuttleStopByIdController(getShuttleStopByIdUseCase)

export const updateShuttleStopUseCase = new UpdateShuttleStopUseCase(database)
export const updateShuttleStopController = new UpdateShuttleStopController(updateShuttleStopUseCase)