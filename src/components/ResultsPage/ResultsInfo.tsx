import React from "react";
import SearchDetails from "../../models/SearchDetails";
import Warning from "../Warning";

type ResultsInfoProps = {
    search: SearchDetails,
    matches: number
}

const ResultsInfo: React.FC<ResultsInfoProps> = (props) => {
    return (
        <div className="ResultsInfo">
            <h1>Search results for {`"${props.search.firstName || "_"} ${props.search.lastName || "_"}"`}</h1> 
            <h3>{props.matches} matches found</h3>
            <Warning>Please note: once selecting an individual from the list below, you may see sensitive information about that individual.</Warning>
        </div>
    )
}

export default ResultsInfo;