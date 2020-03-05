import React from 'react'
import PaginationInfo from '../../models/PaginationInfo'
import './Pagination.css'
import PaginationItem from './PaginationItem'

type PaginationButtonsProps = {
    paginationInfo: PaginationInfo,
    navigatePage: (page: number) => void
}

const PaginationButtons: React.FC<PaginationButtonsProps> = (props: PaginationButtonsProps) => {
    var items: React.ReactNode[] = []

    if (props.paginationInfo.pageNumber > 1) {
        items.push(<FirstButton navigatePage={props.navigatePage} page={1} key={"First button"}/>)
        items.push(<PreviousButton navigatePage={props.navigatePage} page={props.paginationInfo.pageNumber - 1} key={"Previous button"}/>)
    }

    for (let page = Math.max(props.paginationInfo.pageNumber - 2, 1); page < props.paginationInfo.pageNumber; page++) {
        items.push(
            <PaginationItem action={() => {props.navigatePage(page)}} label={`Page ${page}`} key={page}>
                {page}
            </PaginationItem>
        )
    }

    items.push(
        <PaginationItem action={() => {}} label={`Page ${props.paginationInfo.pageNumber}, current`} current={true} key={"current"}>
            {props.paginationInfo.pageNumber}
        </PaginationItem>
    )

    var maxPage = Math.ceil(props.paginationInfo.totalResults / props.paginationInfo.resultsPerPage)
    
    for (let page = props.paginationInfo.pageNumber + 1; page <= Math.min(props.paginationInfo.pageNumber + 2, maxPage); page++) {
        items.push(
            <PaginationItem action={() => {props.navigatePage(page)}} label={`Page ${page}`} key={page}>
                {page}
            </PaginationItem>)
    }

    if (props.paginationInfo.pageNumber < maxPage) {
        items.push(<NextButton navigatePage={props.navigatePage} page={props.paginationInfo.pageNumber + 1} key={"Next button"}/>)
        items.push(<LastButton navigatePage={props.navigatePage} page={maxPage} key={"Last button"}/>)
    }

    return (
        <ol className="pagination">
            {items}
        </ol>
    )
}

type ButtonProps = {
    navigatePage: (page: number) => void,
    page: number
}

const FirstButton: React.FC<ButtonProps> = (props: ButtonProps) => {
    return (
        <PaginationItem action={() => {props.navigatePage(props.page)}} label={`First page`}>
            <span aria-hidden="true" role="presentation">&laquo;</span> First
        </PaginationItem>
    )
}

const PreviousButton: React.FC<ButtonProps> = (props: ButtonProps) => {
    return (
        <PaginationItem action={() => {props.navigatePage(props.page)}} label={`Previous page`}>
            <span aria-hidden="true" role="presentation">&lsaquo;</span> Previous
        </PaginationItem>
    )
}

const NextButton: React.FC<ButtonProps> = (props: ButtonProps) => {
    return (
        <PaginationItem action={() => {props.navigatePage(props.page)}} label={`Next page`}>
            Next <span aria-hidden="true" role="presentation">&rsaquo;</span>
        </PaginationItem>
    )
}

const LastButton: React.FC<ButtonProps> = (props: ButtonProps) => {
    return (
        <PaginationItem action={() => {props.navigatePage(props.page)}} label={`Last page`} key={"Last button"}>
            Last <span aria-hidden="true" role="presentation">&raquo;</span>
        </PaginationItem>
    )
}




export default PaginationButtons