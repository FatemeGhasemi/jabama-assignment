import express, { Application } from 'express';
import bodyParser from 'body-parser';

export const initDbConnection = async () => {
  try {
    //TODO init mongo db
  } catch (e) {
    console.log('initDbConnection error', e);
    throw e;
  }
};

export const initServer = async () => {
  const app: Application = express();


  app.use(bodyParser.json());


  const port = process.env.PORT || 3040;
  app.listen(port, () => {
    console.log(`The application is listening on port ${port}`);
  });
};
