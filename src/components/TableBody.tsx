import React from 'react';

const TableBody: React.FC = (props) => {
    return (
        <tbody className="govuk-table__body">
            {props.children}
        </tbody>
    )
}

export default TableBody;
