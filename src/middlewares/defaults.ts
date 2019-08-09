import { Request, Response } from 'express';

interface AppResponse {
    success: true;
    data?: AppObject;
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
    [key: string]: object | string;
}

export class DefaultResponse {
    public status: number;
    public response: AppResponse;

    public constructor(status: number, response: AppResponse) {
        this.status = status;
        this.response = response;
    }
}

export class DefaultError {
    public status: number;
    public response: AppError;

    public constructor(status: number, response: AppError) {
        this.status = status;
        this.response = response;
    }
}

export function responseHandler(obj: object, req: Request, res: Response): void {
    // (response | error) object
    if (obj instanceof DefaultResponse || obj instanceof DefaultError) {
        res.status(obj.status).send(obj.response);
    } else {
        // unhandled object
        console.error(obj);
        res.status(500).send({ success: false, data: { code: 'internal_error' } });
    }
}
