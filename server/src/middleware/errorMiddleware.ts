import { NextFunction, Request, Response } from "express"

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    }).status(res.statusCode ? res.statusCode : 500)
}