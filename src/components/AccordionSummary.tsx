import React from 'react';
import AccordionHeader from './AccordionHeader';

const AccordionSummary: React.FC<{ summary: string }> = (props: { summary: string }) => {
    return (
        <div className="govuk-accordion__section-summary govuk-body" id="accordion-with-summary-sections-summary-1">
            {props.summary}
        </div>
    )
}

export default AccordionSummary;