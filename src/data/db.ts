export function getUser(id: number): object | null {
    if (id === 1) {
        return { fullName: 'Kareem G. Diab' };
    } else {
        return null;
    }
}
