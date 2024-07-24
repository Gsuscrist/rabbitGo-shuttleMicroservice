
import express from 'express';
import {Response,Request} from 'express';
import {Signale} from 'signale';
import {shuttleRouter} from "./shuttle/infrastructure/route/shuttleRouter";
import {shuttleStopRouter} from "./shuttleStop/infrastructure/route/shuttleStopRouter";
import {shuttleRouteRouter} from "./shuttleRoute/infrastructure/route/shuttleRouteRouter";
import {MysqlShuttleRepository} from "./shuttle/infrastructure/repository/mysqlShuttleRepository";
import {VerifyShuttleConsumer} from "./shuttle/infrastructure/brocker/consumer/verifyShuttleConsumer";
import {initVerifyShuttleConsumer} from "./shuttle/infrastructure/dependencies";



const app = express();
const signale = new Signale();

app.use(express.json())
app.use('/health', (req: Request, res: Response) => {
    res.status(200).send({
        status: "Success",
        data: [],
        message: "Health ok!"
    });
});

app.use('/shuttle',shuttleRouter)
app.use('/shuttleStop',shuttleStopRouter)
app.use('/shuttleRoute',shuttleRouteRouter)


app.listen(8082,async ()=>{
    signale.success("Server on line in port: 8082")
    // Inicializar consumidores
    try {
        await initVerifyShuttleConsumer.initialize()
        signale.success('VerifyShuttleConsumer is running');
    } catch (error) {
        signale.error('Failed to start consumers:', error);
    }
})
