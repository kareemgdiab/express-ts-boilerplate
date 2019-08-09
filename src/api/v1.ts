import express from 'express';
import { userRoutes } from '../routes';

export const apiV1 = express();

// api base routes
apiV1.use('/user', userRoutes);