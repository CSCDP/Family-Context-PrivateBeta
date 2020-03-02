import React from "react";
import SearchDetails from "../../models/SearchDetails";
import SensitiveInformationWarning from "../SensitiveInformationWarning";

type ResultsInfoProps = {
    search: SearchDetails,
    matches: number
}

const ResultsInfo: React.FC<ResultsInfoProps> = (props) => {
    return (
        <div className="ResultsInfo">
            <h1>Search results for {`"${props.search.firstName || "_"} ${props.search.lastName || "_"}"`}</h1> 
            <h3>{props.matches} matches found</h3>
            <SensitiveInformationWarning />
        </div>
    )
}

export default ResultsInfo;