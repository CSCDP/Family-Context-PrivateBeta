import React from 'react';
import TitleValuePair from './TitleValuePair';

const TableBody: React.FC<{children: any}> = (props) => {
    return (
        <tbody className="govuk-table__body">
            {props.children}
        </tbody>
    )
}

export default TableBody;
