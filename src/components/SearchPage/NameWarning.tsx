import React from 'react'

const NameWarning: React.FC = () => {
    return (
        <div className="NameWarning" id="NameWarning" hidden>
            <div className="govuk-warning-text">
                <span className="govuk-warning-text__icon" aria-hidden="true">!</span>
                <strong className="govuk-warning-text__text">
                    <span className="govuk-warning-text__assistive">Warning</span>
                    {"Please include both first name and family name."}
                </strong>
            </div>
        </div>
    )
}

export default NameWarning;