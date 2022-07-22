import { ErrorRequestHandler } from 'express';
import {sendResponse} from "../utils/responseHandler";

export const errorHandler: ErrorRequestHandler = async (
  error,
  req,
  res,
  next,
) => {
  //TODO standardize error
  console.log('errorHandler ', {
    error,
  });
  await sendResponse(res, {
    message: error.message,
    success: false,
  },
      //TODO Return appropriate status codes based on error
      400)
};
