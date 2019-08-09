import { Request, Response, NextFunction } from "express";

interface AppResponse {
    success: true;
    data: AppObject;
}

interface AppError {
    success: false;
    data: ErrorObject;
}

interface AppObject {
    [key: string]: any;
}

interface ErrorObject {
    code: string;
    [key: string]: any;
}

export class DefaultResponse {
    constructor(public status: number, public response: AppResponse) { }
}

export class DefaultError {
    constructor(public status: number, public response: AppError) {}
}

export function responseHandler(obj: any, req: Request, res: Response, next: NextFunction) {
    // (response | error) object
    if (obj instanceof DefaultResponse || obj instanceof DefaultError) {
        res.status(obj.status).send(obj.response)
    } else {
        // unhandled object
        console.error(obj);
        res.status(500).send({success: false, data: { code: "internal_error" }})
    }
}