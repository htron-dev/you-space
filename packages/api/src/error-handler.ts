import { ErrorRequestHandler } from "express";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    const { message } = err;
    const status = err.status || 500;

    res.status(status).json({
        status,
        message
    });
};

export default errorHandler;