import express from 'express';
import { getUser } from '../controllers';

export const userRoutes = express.Router();

userRoutes.get('/:id', getUser);
