export function formatShortDateOrString(maybeDate: string | Date): string {
    if (!maybeDate) {
        return ""
    }

    let date = new Date(maybeDate);
    if ((date as Date).getDate()) {
        return date.toLocaleDateString('en-GB');
    }
    else {
        return (date as Date).getDate().toString();
    }
}

export function formatLongDateOrString(maybeDate: string | Date): string {
    if (!maybeDate) {
        return ""
    }

    let date = new Date(maybeDate);
    if ((date as Date).getDate()) {
        return `${date.toLocaleDateString('en-GB')} at ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
    }
    else {
        return (date as Date).getDate().toString();
    }
}
