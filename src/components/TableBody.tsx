import React from 'react';
import TableRow from './TableRow';

const TableBody: React.FC<any> = (props: any) => {
    return (
        <tbody className="govuk-table__body">
                {props.rowList.map((rowList: any) => (
                    <TableRow rowTitle={rowList[0]} rowValue={rowList[1]}></TableRow>
                ))}
            </tbody>
    )
}

export default TableBody;