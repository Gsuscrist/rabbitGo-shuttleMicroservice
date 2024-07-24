import express from "express";
import {
    createShuttleController,
    deleteShuttleController,
    getAllShuttleByNameController, getAllShuttleByStopController,
    getAllShuttleController, getShuttleByIdController, updateShuttleController
} from "../dependencies";
import {authenticateMiddleware, authorizeRole, sanitizeMiddleware} from "../../../middleware/authenticator";


export const shuttleRouter = express.Router();

shuttleRouter.post('/',authenticateMiddleware,sanitizeMiddleware,authorizeRole("admin"),createShuttleController.execute.bind(createShuttleController));
shuttleRouter.delete('/:id',authenticateMiddleware,sanitizeMiddleware,authorizeRole("admin"),deleteShuttleController.execute.bind(deleteShuttleController));

shuttleRouter.post('/byName',authenticateMiddleware,sanitizeMiddleware,getAllShuttleByNameController.execute.bind(getAllShuttleByNameController));
shuttleRouter.get('/',authenticateMiddleware,sanitizeMiddleware,getAllShuttleController.execute.bind(getAllShuttleController));
shuttleRouter.get('/from/:id',authenticateMiddleware,sanitizeMiddleware,getAllShuttleByStopController.execute.bind(getAllShuttleByStopController));
shuttleRouter.get('/:id',authenticateMiddleware,sanitizeMiddleware,getShuttleByIdController.execute.bind(getShuttleByIdController));

shuttleRouter.put('/:id',authenticateMiddleware,sanitizeMiddleware,authorizeRole("admin"),updateShuttleController.execute.bind(updateShuttleController));
