import React from 'react'

const SummaryListTitle: React.FC = (props) => {
    return (
        <dt className="govuk-summary-list__key govuk-!-font-size-14">
            {props.children}:
        </dt>
    )
}

export default SummaryListTitle;