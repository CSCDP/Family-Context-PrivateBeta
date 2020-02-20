import React from 'react';
import TitleValuePair from './TitleValuePair';

const TableBody: React.FC<{children: string[][]}> = (props) => {
    return (
        <tbody className="govuk-table__body">
                {props.children.map((rowList: string[]) => (
                    <TitleValuePair rowTitle={rowList[0]} rowValue={rowList[1]}></TitleValuePair>
                ))}
            </tbody>
    )
}

export default TableBody;
