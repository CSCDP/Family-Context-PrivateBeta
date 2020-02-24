import React from 'react';

const AccordionSection: React.FC = (props) => {
    return (
        <div className="govuk-accordion__section">
            {props.children}
        </div>
    )
}

export default AccordionSection;