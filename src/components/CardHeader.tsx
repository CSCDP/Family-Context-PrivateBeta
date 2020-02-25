import React from 'react';

const CardHeader: React.FC<{ title: string }> = (props: { title: string }) => {

    return (
        <h2>
            <div id="accordion-with-summary-sections-heading-1" className="govuk-heading-m govuk-!-margin-bottom-0" style={{ color: '#1d70b8' }}>
                {props.title}
            </div>
        </h2>
    )
}

export default CardHeader;