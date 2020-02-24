import React from 'react';

const AccordionSectionHeader: React.FC = (props) => {
    return (
        <div className="govuk-accordion__section-header">
            {props.children}
        </div>
    )
}

export default AccordionSectionHeader;