import React from 'react';
import ServiceInvolvementDetailsSummary from '../../models/ServiceInvolvementDetailsSummary';
import { formatShortDateOrString, formatLongDateOrString } from '../../tools/FormattingTools';

const ServiceInvolvementAccordionSummary: React.FC<{ serviceInvolvement: ServiceInvolvementDetailsSummary }> = (props: { serviceInvolvement: ServiceInvolvementDetailsSummary, }) => {
    var startCoverageDate = formatShortDateOrString(props.serviceInvolvement.coverageStartDate)
    var endCoverageDate = formatShortDateOrString(props.serviceInvolvement.coverageEndDate)
    var shouldShowDate = (startCoverageDate || endCoverageDate) !== ""
    
    return (
        <div className="govuk-accordion__section-summary govuk-body" id="accordion-with-summary-sections-summary-1">
            <p className="govuk-body govuk-!-font-size-14 govuk-!-margin-0">
                {"Information is correct as of "}
                <b>{formatLongDateOrString(props.serviceInvolvement.lastSynchronised)}</b>
            </p>
            <p className="govuk-body govuk-!-font-size-14 govuk-!-margin-0">
                {"Information is synced with "}
                <b>{props.serviceInvolvement.dataSource}</b>
                {shouldShowDate ? " for the duration of " : <></>}
                {shouldShowDate ? <b>{startCoverageDate}-{endCoverageDate}</b> : <></>}
                {props.serviceInvolvement.coverageExplanation ? `and ${props.serviceInvolvement.coverageExplanation}` : <></>}
                </p>
        </div>
    )
}

export default ServiceInvolvementAccordionSummary;