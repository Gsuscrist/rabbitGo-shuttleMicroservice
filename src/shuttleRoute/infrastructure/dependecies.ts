import {MySqlShuttleRouteRepository} from "./repository/mysqlShuttleRouteRepository";
import {CreateShuttleRouteUseCase} from "../application/useCase/createShuttleRouteUseCase";
import {CreateShuttleRouteController} from "./controller/createShuttleRouteController";
import {DeleteShuttleRouteUseCase} from "../application/useCase/deleteShuttleRouteUseCase";
import {DeleteShuttleRouteController} from "./controller/deleteShuttleRouteController";
import {GetAllByShuttleIdShuttleRouteUseCase} from "../application/useCase/getAllByShuttleIdShuttleRouteUseCase";
import {GetAllByShuttleIdShuttleRouteController} from "./controller/getAllByShuttleIdShuttleRouteController";
import {UpdateShuttleUseCase} from "../../shuttle/application/useCase/updateShuttleUseCase";
import {UpdateShuttleController} from "../../shuttle/infrastructure/controller/updateShuttleController";
import {UpdateShuttleRouteUseCase} from "../application/useCase/updateShuttleRouteUseCase";
import {UpdateShuttleRouteController} from "./controller/updateShuttleRouteController";
import {GetByIdShuttleRouteUseCase} from "../application/useCase/getByIdShuttleRouteUseCase";
import {GetByIdShuttleRouteController} from "./controller/getByIdShuttleRouteController";

export const database = new MySqlShuttleRouteRepository()

const createShuttleRouteUseCase = new CreateShuttleRouteUseCase(database)
export const createShuttleRouteController = new CreateShuttleRouteController(createShuttleRouteUseCase)

const deleteShuttleRouteUseCase = new DeleteShuttleRouteUseCase(database)
export const deleteShuttleRouteController = new DeleteShuttleRouteController(deleteShuttleRouteUseCase)

const getAllByShuttleIdShuttleRouteUseCase = new GetAllByShuttleIdShuttleRouteUseCase(database)
export const getAllByShuttleIdShuttleRouteController = new GetAllByShuttleIdShuttleRouteController(getAllByShuttleIdShuttleRouteUseCase)

const getByIdShuttleRouteUseCase = new GetByIdShuttleRouteUseCase(database)
export const getByIdShuttleRouteController = new GetByIdShuttleRouteController(getByIdShuttleRouteUseCase)

const updateShuttleRouteUseCase = new UpdateShuttleRouteUseCase(database)
export const updateShuttleRouteController = new UpdateShuttleRouteController(updateShuttleRouteUseCase)
