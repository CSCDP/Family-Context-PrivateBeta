import React from 'react';

const Table: React.FC<any> = (props: any) => {
    return (
        <table className="govuk-table govuk-!-margin-4">
            {props.children}
        </table> 
    )
}

export default Table;
