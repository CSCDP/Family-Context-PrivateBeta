import React from 'react';

const TitleValuePairTableRow: React.FC<{rowTitle: string, rowValue: string, format?: string}> = (props: {rowTitle: string, rowValue: string, format?: string}) => {
    return (
        <tr className="govuk-table__row">
            <td className={`govuk-table__cell ${props.format}`}>{props.rowTitle}</td>
            <th scope="row" className={`govuk-table__header govuk-!-width-three-quarters ${props.format}`}>{props.rowValue}</th>
        </tr>
    )
}

export default TitleValuePairTableRow;
