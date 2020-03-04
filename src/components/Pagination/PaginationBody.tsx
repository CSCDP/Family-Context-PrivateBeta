import React from 'react'
import './Pagination.css'

const PaginationBody: React.FC = (props) => {
    return (
        <nav role="navigation" aria-label="Pagination" className="govuk-body">
            {props.children}
        </nav>
    )
}

export default PaginationBody