import express from "express";
import {
    createShuttleStopController,
    deleteShuttleStopController,
    getAllShuttleStopController, getShuttleStopByIdController, updateShuttleStopController,
} from "../dependencies";
import {authenticateMiddleware, authorizeRole, sanitizeMiddleware} from "../../../middleware/authenticator";

export const shuttleStopRouter = express.Router()

shuttleStopRouter.post('/', authenticateMiddleware,sanitizeMiddleware,authorizeRole("admin"),createShuttleStopController.execute.bind(createShuttleStopController))
shuttleStopRouter.delete('/:id', authenticateMiddleware,sanitizeMiddleware,authorizeRole("admin"),deleteShuttleStopController.execute.bind(deleteShuttleStopController))
shuttleStopRouter.get('/',authenticateMiddleware,sanitizeMiddleware,getAllShuttleStopController.execute.bind(getAllShuttleStopController))
shuttleStopRouter.get('/:id',authenticateMiddleware,sanitizeMiddleware,getShuttleStopByIdController.execute.bind(getShuttleStopByIdController))
shuttleStopRouter.put('/:id',authenticateMiddleware,sanitizeMiddleware,authorizeRole("admin"),updateShuttleStopController.execute.bind(updateShuttleStopController))