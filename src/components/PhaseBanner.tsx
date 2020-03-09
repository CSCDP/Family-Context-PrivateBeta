import React from 'react';

const PhaseBanner: React.FC = () => {
    return (
        <div className="PhaseBanner">
            <div className="govuk-phase-banner govuk-width-container">
                <p className="govuk-phase-banner__content">
                    <strong className="govuk-tag govuk-phase-banner__content__tag">
                        beta
                    </strong>
                    <span className="govuk-phase-banner__text">
                        {"This is a new tool to provide the service involvement for any child in your case load and the relevant individuals to them.\n"}
                        {"Your feedback will help us to improve it."}
                    </span>
                </p>
            </div>
        </div>
    )
}

export default PhaseBanner;