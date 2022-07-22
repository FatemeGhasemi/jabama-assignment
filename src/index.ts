
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
