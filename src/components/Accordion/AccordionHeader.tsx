import React from 'react';

const AccordionHeader: React.FC<{ title: string, recordsFound: boolean }> = (props: { title: string, recordsFound: boolean }) => {

    function RecordsFound() {
        if (props.recordsFound) {
            return <h2 className="govuk-accordion__section-heading">
                <button type="button" id="accordion-with-summary-sections-heading-1" aria-controls="accordion-with-summary-sections-content-1" className="govuk-accordion__section-button" aria-describedby="accordion-with-summary-sections-summary-1" aria-expanded="false">
                    {props.title}
                </button>
                <span className="govuk-accordion__icon" aria-hidden="true" />
            </h2>
        } else {
            return <h2 className="govuk-accordion__section-heading">
                <button type="button" id="accordion-with-summary-sections-heading-1" aria-controls="accordion-with-summary-sections-content-1" className="govuk-accordion__section-button" aria-describedby="accordion-with-summary-sections-summary-1" aria-expanded="false">
                    {props.title}
                </button>
                <span className="govuk-accordion__icon" aria-hidden="true" />
            </h2>
        }
    }

    return (
        <RecordsFound />
    )
}

export default AccordionHeader;
