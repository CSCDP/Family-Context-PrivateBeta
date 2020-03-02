import React from "react";
import PersonDetails from "../../models/PersonDetails";
import ResultsListRow from "./ResultsListRow";
import TableBody from "../Table/TableBody";
import Table from "../Table/Table";
import TableHeader from "../Table/TableHeader";
import RowValues from '../Table/RowValues';

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

const ResultsListHeader: React.FC = () => {
    var values = [
        "ID",
        "First name",
        "Family name",
        "Date of Birth",
        "Age",
        "Address"
    ]

    var format = new Array(values.length).fill("govuk-table__header")

    return (
        <RowValues rowValues={values} format={format} />
    )
}

export default ResultsList;