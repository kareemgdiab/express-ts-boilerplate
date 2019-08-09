import express from 'express';
import { apiV1 } from './api';
import config from './config.json';
import { responseHandler } from './middlewares';

const app = express();

/** Add global middlewares applied on all api routes here */

app.use('/api/v1', apiV1);
app.use(responseHandler);

app.listen(config.app.port, 'localhost', (): void => console.log('listening on port: 3000'));
