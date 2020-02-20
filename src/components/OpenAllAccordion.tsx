import React from 'react';

const OpenAllAccordion: React.FC = () => {
    return (
        <div className="govuk-accordion__controls">
            <button type="button" className="govuk-accordion__open-all" aria-expanded="false">Open all<span className="govuk-visually-hidden"> sections</span></button>
        </div>
    )
}

export default OpenAllAccordion;