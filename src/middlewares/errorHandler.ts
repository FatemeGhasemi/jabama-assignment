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
  res.send({
    message: error.message,
    success: false,
  });
};
