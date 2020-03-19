import React from 'react';
import { Feedback } from '../tools/ConfigurableContent';

const PhaseBanner: React.FC = () => {
    return (
        <div className="PhaseBanner">
            <div className="govuk-phase-banner govuk-width-container">
                <p className="govuk-phase-banner__content">
                    <strong className="govuk-tag govuk-phase-banner__content__tag">
                        beta
                    </strong>
                    <span className="govuk-phase-banner__text">
                        {"This is a new tool to provide service involvement information for any child in your caseload.\n"}
                        {"Your "}<a href={`mailto:${Feedback.Email}`}>feedback</a>{" will help us to improve it."}
                    </span>
                </p>
            </div>
        </div>
    )
}

export default PhaseBanner;