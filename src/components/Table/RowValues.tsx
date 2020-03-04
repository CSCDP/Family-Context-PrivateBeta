import React from 'react';

type RowValuesProps = {
    rowValues: (string | React.ReactNode)[],
    format?: string[],
    onClickFunc?: (event: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void
}

const RowValues: React.FC<RowValuesProps> = (props) => {
    return (
        <tr className="govuk-table__row" onClick={props.onClickFunc} >
            {props.rowValues.map((value, index) => 
                <td className={`govuk-table__cell ${(props.format && props.format[index]) || ""}`} key={index}>
                    {value}
                </td>
            )}
        </tr>
    )
}

export default RowValues;
