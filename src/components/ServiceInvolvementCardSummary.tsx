import React from 'react';
import ServiceInvolvementDetailsSummary from '../models/ServiceInvolvementDetailsSummary';

const ServiceInvolvementCardSummary: React.FC<{ serviceInvolvement: ServiceInvolvementDetailsSummary,}> = (props: { serviceInvolvement: ServiceInvolvementDetailsSummary, }) => {
    return (
        <div>
            <p className="govuk-body govuk-!-font-size-14 govuk-!-margin-0">Information is correct as of <b>{props.serviceInvolvement.lastSynchronized}</b></p>
    <p className="govuk-body govuk-!-font-size-14 govuk-!-margin-0">Information is synced with <b>{/*props.serviceInvolvement.syncedWith*/}</b> for the duration of <b>{props.serviceInvolvement.coverageStartDate}-{props.serviceInvolvement.coverageEndDate}</b></p>
        </div>
    )
}

export default ServiceInvolvementCardSummary;