import React from 'react';

const TableHeader: React.FC = (props) => {
    return (
        <caption className="govuk-table__caption">{props.children}</caption>
    )
}

export default TableHeader;