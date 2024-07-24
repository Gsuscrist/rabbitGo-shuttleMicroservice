import express from "express";
import {createShuttleRouteController, deleteShuttleRouteController, getAllByShuttleIdShuttleRouteController, getByIdShuttleRouteController, updateShuttleRouteController} from "../dependecies";
import {authenticateMiddleware, authorizeRole, sanitizeMiddleware} from "../../../middleware/authenticator";

export const shuttleRouteRouter = express.Router();

shuttleRouteRouter.post('/',authenticateMiddleware,sanitizeMiddleware,authorizeRole("admin"),createShuttleRouteController.execute.bind(createShuttleRouteController))
shuttleRouteRouter.delete('/:id',authenticateMiddleware,sanitizeMiddleware,authorizeRole("admin"),deleteShuttleRouteController.execute.bind(deleteShuttleRouteController))
shuttleRouteRouter.get('/byShuttle/:id',authenticateMiddleware,sanitizeMiddleware,getAllByShuttleIdShuttleRouteController.execute.bind(getAllByShuttleIdShuttleRouteController))
shuttleRouteRouter.get('/:id',authenticateMiddleware,sanitizeMiddleware,getByIdShuttleRouteController.execute.bind(getByIdShuttleRouteController))
shuttleRouteRouter.put('/:id',authenticateMiddleware,sanitizeMiddleware,authorizeRole("admin"),updateShuttleRouteController.execute.bind(updateShuttleRouteController))