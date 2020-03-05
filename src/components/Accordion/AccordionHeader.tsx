import React from 'react';

const AccordionHeader: React.FC<{ title: string}> = (props: { title: string}) => {

    return (
        <h2 className="govuk-accordion__section-heading">
            <button type="button" id="accordion-with-summary-sections-heading-1" 
            aria-controls="accordion-with-summary-sections-content-key"
            className="govuk-accordion__section-button" 
            aria-describedby="accordion-with-summary-sections-summary-1" 
            aria-expanded="false" >
                {props.title}
            </button>
            <strong className="govuk-tag">
                    RECORDS AVAILABLE
            </strong>
            <span className="govuk-accordion__icon" aria-hidden="true" />
        </h2>
    )
}

export default AccordionHeader;