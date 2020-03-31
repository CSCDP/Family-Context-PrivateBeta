import React from 'react'

const SummaryListValue: React.FC = (props) => {
    return (
        <dd className="govuk-summary-list__value govuk-!-font-size-14">
            {props.children}
        </dd>
    )
}

export default SummaryListValue;