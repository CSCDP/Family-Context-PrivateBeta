import React from 'react';

const SensitiveInformationWarning: React.FC = () => {
    return (
        <div className="SensitiveInformationWarning">
            <div className="govuk-warning-text">
                <span className="govuk-warning-text__icon" aria-hidden="true">!</span>
                <strong className="govuk-warning-text__text">
                    <span className="govuk-warning-text__assistive">Warning</span>
                    {"Please note: once selecting an individual from the list below, you may see sensitive information about that individual."}
                </strong>
            </div>
        </div>
    )
}

export default SensitiveInformationWarning