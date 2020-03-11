import React from "react";
import {ResultsListRow, ResultsListHeader} from "./ResultsListRow";
import TableBody from "../Table/TableBody";
import Table from "../Table/Table";
import TableHeader from "../Table/TableHeader";
import SearchResponse from "../../models/SearchResponse";
import PaginationDetails from "../../models/PaginationDetails";
import PaginationMenu from "../Pagination/PaginationMenu";
import PersonDetails from "../../models/PersonDetails";

type ResultsListProps = {
    response: SearchResponse,
    navigatePage: (pagination: PaginationDetails) => void
    navigateToPerson: (person: PersonDetails) => void
}

const ResultsList: React.FC<ResultsListProps> = (props) => {
    return (
        <div className="ResultsInfo">
            <Table>
                <TableHeader> 
                    <ResultsListHeader />
                </TableHeader>
                <TableBody>
                    {props.response.results.map(result =>  
                        <ResultsListRow person={result} key={result.id} onClickFunc={(event) => {event.preventDefault(); props.navigateToPerson(result)}} />
                    )}
                </TableBody>
            </Table>
            {props.response.paginationInfo ?
                <PaginationMenu 
                  paginationInfo={props.response.paginationInfo} 
                  navigatePage={(page: number) => {props.navigatePage({pageNumber: page, resultsPerPage: props.response.paginationInfo?.resultsPerPage })}} />
            : <></>}
        </div>
    )
}

export default ResultsList;