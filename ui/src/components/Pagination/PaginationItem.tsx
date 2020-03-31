import React from 'react'
import './Pagination.css'

type PaginationItemProps = {
    action: () => void,
    current?: boolean,
    label: string
}

const PaginationItem: React.FC<PaginationItemProps> = (props) => {
    return (
        <li className="pagination__item">
            <a className={`pagination__link govuk-link ${props.current ? "current" : ""}`}
              href="/#0" 
              aria-label={props.label} 
              aria-current={props.current ? "true" : "false"} 
              onClick={(event) => {event.preventDefault(); props.action()}}
            >
                {props.children}
            </a>
        </li>
    )
}

export default PaginationItem