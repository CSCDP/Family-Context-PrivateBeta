import React from 'react';
import { Urls } from '../tools/ConfigurableContent';

const PhaseBanner: React.FC = () => {
    var text;
    var url;
    console.log(Urls.Links.FeedbackEmail)
    if (Urls.Links.FeedbackEmail !== "") {
        text = "";
        url = <a href={`mailto:${Urls.Links.FeedbackEmail}`}>your feedback</a>
    } else {
        url = "";
        text = "your feedback";
    }
    return (
        <div className="PhaseBanner">
            <div className="govuk-phase-banner govuk-width-container">
                <p className="govuk-phase-banner__content">
                    <strong className="govuk-tag govuk-phase-banner__content__tag">
                        beta
                    </strong>
                    <span className="govuk-phase-banner__text">
                        {`This is a new service - ${text}`}{url}{` will help us to improve it.`}
                    </span>
                </p>
            </div>
        </div>
    )
}

export default PhaseBanner;