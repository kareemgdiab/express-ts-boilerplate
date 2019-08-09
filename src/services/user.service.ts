import { getUser } from '../data';
import { DefaultError } from '../middlewares';

export function getUserById(id: number): object | undefined {
    const user = getUser(Number(id));

    if (!user) {
        // throwing an error object will be caught with our responseHandler middleware
        throw new DefaultError(404, { success: false, data: { code: 'user_not_found', msg: 'User not found!' } });
    } else {
        return user;
    }
}
