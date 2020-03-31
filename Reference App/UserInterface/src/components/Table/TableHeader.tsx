import React from 'react';

const TableHeader: React.FC = (props) => {
    return (
        <thead className="govuk-table__header">{props.children}</thead>
    )
}

export default TableHeader;