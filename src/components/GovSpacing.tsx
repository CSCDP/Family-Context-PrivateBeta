import React from 'react';

const GovSpacing: React.FC = (props) => {
    return (
        <div className="govuk-width-container">
            <main className="govuk-main-wrapper">
                {props.children}
            </main>
        </div>
    )
}

export default GovSpacing;