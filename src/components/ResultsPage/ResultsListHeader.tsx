import React from 'react';
import RowValues from '../Table/RowValues';

const ResultsListHeader: React.FC = () => {
    var values = [
        "ID",
        "First name",
        "Family name",
        "Date of Birth",
        "Age",
        "Address"
    ]

    var format = new Array(6).fill("govuk-table__header")

    return (
        <RowValues rowValues={values} format={format} />
    )
}

export default ResultsListHeader;