import React from 'react';

const AccordionContent: React.FC = (props) => {
    return (
        <div id="accordion-with-summary-sections-content-1" className="govuk-accordion__section-content" aria-labelledby="accordion-with-summary-sections-heading-1">
            {props.children}
        </div>
    )
}

export default AccordionContent;