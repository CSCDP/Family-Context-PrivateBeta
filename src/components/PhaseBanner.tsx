import React from 'react';
import { Urls } from '../tools/ConfigurableContent';

const PhaseBanner: React.FC = () => {

    const feedbackNode = Urls.Links.FeedbackEmail ?
        (<a href={`mailto:${Urls.Links.FeedbackEmail}`}>your feedback</a>) :
        (<>your feedback</>)

    return (
        <div className="PhaseBanner">
            <div className="govuk-phase-banner govuk-width-container">
                <p className="govuk-phase-banner__content">
                    <strong className="govuk-tag govuk-phase-banner__content__tag">
                        beta
                    </strong>
                    <span className="govuk-phase-banner__text">
                        This is a new service - {feedbackNode} will help us to improve it.
                    </span>
                </p>
            </div>
        </div>
    )
}

export default PhaseBanner;