import express, {Application} from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import {connect, connection} from 'mongoose'
import {router} from "./routers";
import {errorHandler} from "./middlewares/errorHandler";
import {addLog} from "./middlewares/logMiddleware";

export const initDbConnection = async () => {
    try {
        const mongoUrl = process.env.MONGO_URL as string
        console.log({mongoUrl})

        await connect(mongoUrl, {useNewUrlParser: true});
        const db = connection;

        db.on('error',
            (e:any) => {
                console.error({title: 'db connection error...', error: e, data: {}})
                throw e
            });
        db.once('open', () => {
            console.log({title: 'db opened...', data: {mongoUrl}});

        });
    } catch (e) {
        console.log('initDbConnection error', e);
        throw e;
    }
};

export const initServer = async () => {
    const app: Application = express();


    app.use(bodyParser.json());
    const swaggerDocument = require('../public/swagger.json');

    app.use(
        '/docs',
        swaggerUi.serve,
        swaggerUi.setup(swaggerDocument),
    );

    // I put the logger after swagger to not save entity for loading swagger page
    app.use(addLog)
    app.use(router);
    app.use(errorHandler);


    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`The application is listening on port ${port}`);
    });
};
