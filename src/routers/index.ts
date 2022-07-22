import express from 'express';
import { registerRouter } from './registerRouter';
import {loginRouter} from "./loginRouter";
import {logRouter} from "./logRouter";

export const router = express.Router();
router.use('/', registerRouter);
router.use('/', loginRouter);
router.use('/', logRouter);
