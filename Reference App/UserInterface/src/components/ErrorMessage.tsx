import React from 'react'

type ErrorMessageProps = {
    hidden?: boolean,
    children: string
}

const ErrorMessage: React.FC<ErrorMessageProps> = (props: ErrorMessageProps) => {
    return (
        <div className="Error" hidden={props.hidden}>
            <span className="govuk-error-message">
                <span className="govuk-visually-hidden">Error:</span>
                {props.children}
            </span>
        </div>
    )
}

export default ErrorMessage;