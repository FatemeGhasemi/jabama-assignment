import express from 'express';
import { registerRouter } from './registerRouter';
import {loginRouter} from "./loginRouter";

export const router = express.Router();
router.use('/', registerRouter);
router.use('/', loginRouter);
