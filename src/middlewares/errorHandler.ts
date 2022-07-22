import { ErrorRequestHandler } from 'express';

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
  //TODO Return appropriate status codes based on error
  res.status(400).send({
    message: error.message,
    success: false,
  });
};
