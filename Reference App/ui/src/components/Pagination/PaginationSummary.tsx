import React from 'react'
import PaginationInfo from '../../models/PaginationInfo'
import './Pagination.css'

const PaginationSummary: React.FC<{info: PaginationInfo}> = (props: {info: PaginationInfo}) => {
    var firstResultNumber = ((props.info.pageNumber - 1) * props.info.resultsPerPage) + 1
    var lastResultNumber = Math.min(props.info.totalResults, props.info.pageNumber * props.info.resultsPerPage)

    return (
        <div className="pagination__summary">
            Showing {firstResultNumber} - {lastResultNumber} of {props.info.totalResults} results
        </div>
    )
}

export default PaginationSummary