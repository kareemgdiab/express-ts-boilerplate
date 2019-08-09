/** data formating related util functions */
export function removeNumbers(str: string): string {
    return str.replace(/\d+/g, '');
}
