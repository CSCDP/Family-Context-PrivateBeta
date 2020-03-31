import React from 'react'

const Warning: React.FC<{hidden?: boolean, children: string}> = (props: {hidden?: boolean, children: string}) => {
    return (
        <div className="Warning" id="Warning" hidden={props.hidden}>
            <div className="govuk-warning-text">
                <span className="govuk-warning-text__icon" aria-hidden="true">!</span>
                <strong className="govuk-warning-text__text">
                    <span className="govuk-warning-text__assistive">Warning</span>
                    {props.children}
                </strong>
            </div>
        </div>
    )
}

export default Warning;