export function formatShortDateOrString(maybeDate: string | Date): string {
    if (!maybeDate) {
        return ""
    }

    let date = new Date(maybeDate);
    if ((date as Date).getDate()) {
        return date.toLocaleDateString('en-GB');
    }
    else {
        return maybeDate.toString();
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
        return maybeDate.toString();
    }
}

export function formatShortAddress(address: string): string {
    var firstLine = address.split('\n')[0]
    if (firstLine) {
        return `${firstLine}...` 
    } else {
        return ""
    }
}

export function formatAgeInYearsFromStringOrDate(dateOfBirth: string | Date): string {
    if (!dateOfBirth) {
        return "- yrs"
    } else {
        var birthDate = new Date(dateOfBirth);

        return `${getAgeInYears(birthDate)} yrs`;
    }
}

function getAgeInYears(dateOfBirth: Date): number {
    var dateNow = new Date();
    var years = dateNow.getFullYear() - dateOfBirth.getFullYear()

    var hasBirthdayHappenedThisYear = dateOfBirth.setFullYear(dateNow.getFullYear()) < Number(dateNow)
    years -= hasBirthdayHappenedThisYear ? 0 : 1

    return years
}