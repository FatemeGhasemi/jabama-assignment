import dotenv from 'dotenv';
import * as path from 'path';

if (process.env.NODE_ENV==='development'){
    // Loading dotenv should be above other imports
    dotenv.config({
        path: path.resolve(__dirname, '../development.env'),
    });
}


import { initDbConnection, initServer } from './server';

initDbConnection()
    .then(() => {
        return initServer();
    })
    .then(() => {
        console.log('server is up');
    })
    .catch(e => {
        console.log('init server error', e);
        throw e;
    });
