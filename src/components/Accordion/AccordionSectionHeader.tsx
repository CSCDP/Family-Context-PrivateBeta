import React from 'react';

const AccordionSectionHeader: React.FC<{click: () => void}> = (props) => {
    return (
        <div className="govuk-accordion__section-header" onClick={()=>props.click()}>
            {props.children}
        </div>
    )
}

export default AccordionSectionHeader;