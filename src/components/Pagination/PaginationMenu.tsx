import React from 'react'
import PaginationInfo from '../../models/PaginationInfo'
import PaginationSummary from './PaginationSummary'
import PaginationBody from './PaginationBody'
import PaginationButtons from './PaginationButtons'
import './Pagination.css'

type PaginationMenuProps = {
    paginationInfo: PaginationInfo,
    navigatePage: (page: number) => void
}

const PaginationMenu: React.FC<PaginationMenuProps> = (props: PaginationMenuProps) => {
    return (
        <div className="PaginationMenu">
            <PaginationBody>
                <PaginationSummary info={props.paginationInfo} />
                <PaginationButtons paginationInfo={props.paginationInfo} navigatePage={props.navigatePage}/>
            </PaginationBody>
        </div>
    )
}

export default PaginationMenu