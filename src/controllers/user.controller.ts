import { Request, Response, NextFunction } from 'express';
import { getUserById } from '../services';
import { DefaultResponse } from '../middlewares';

/** Request lifecycle shouldn't go further after the controller,
 *  use services to manage app logic
 */
export function getUser(req: Request, res: Response, next: NextFunction): void {
    const { id } = req.params;

    try {
        const user = getUserById(id);
        next(new DefaultResponse(200, { success: true, data: { user } }));
    } catch (error) {
        next(error);
    }
}
