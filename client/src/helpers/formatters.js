
export const longDateFormat = new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
})

export const shortDateFormat = new Intl.DateTimeFormat('en-GB', {
    year: '2-digit',
    month: 'numeric',
    day: 'numeric'
})

export const dateTimeFormat = new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
})