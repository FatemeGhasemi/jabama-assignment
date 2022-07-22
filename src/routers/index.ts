import express from 'express';
import { registerRouter } from './registerRouter';

export const router = express.Router();
router.use('/', registerRouter);
