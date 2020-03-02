import React from "react";
import PersonDetails from "../../models/PersonDetails";
import {ResultsListRow, ResultsListHeader} from "./ResultsListRow";
import TableBody from "../Table/TableBody";
import Table from "../Table/Table";
import TableHeader from "../Table/TableHeader";

type ResultsListProps = {
    results: PersonDetails[],
    navigate: (id: number) => void
}

const ResultsList: React.FC<ResultsListProps> = (props) => {
    return (
        <div className="ResultsInfo">
            <Table>
                <TableHeader> 
                    <ResultsListHeader />
                </TableHeader>
                <TableBody>
                    {props.results.map(result =>  
                        <ResultsListRow person={result} key={result.id} onClickFunc={(event) => {event.preventDefault(); props.navigate(result.id)}} />
                    )}
                </TableBody>
            </Table>
        </div>
    )
}

export default ResultsList;