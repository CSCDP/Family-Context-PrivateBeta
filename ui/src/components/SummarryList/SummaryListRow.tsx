import React from 'react'

const SummaryListRow: React.FC = (props) => {
    return (
        <div className="govuk-summary-list__row">
            {props.children}
        </div>
    )
}

export default SummaryListRow;