import React from 'react';

const TitleValuePair: React.FC<{rowTitle: string, rowValue: string}> = (props: {rowTitle: string, rowValue: string}) => {
    return (
        <tr className="govuk-table__row">
            <td className="govuk-table__cell">{props.rowTitle}</td>
            <th scope="row" className="govuk-table__header govuk-!-width-three-quarters">{props.rowValue}</th>
        </tr>
    )
}

export default TitleValuePair;
