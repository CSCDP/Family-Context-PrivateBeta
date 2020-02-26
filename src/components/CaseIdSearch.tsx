import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { TextInputGroup } from "./InputGroups";

type CaseIdSearchProps = {
    search: (caseId: string) => void
}

const CaseIdSearch: React.FC<CaseIdSearchProps> = (props) => {
    var caseId = "";

    var search = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) : void => {
        event.preventDefault();
        props.search(caseId);
    }

    return (
        <div className="CaseIdSearch">
            <div className="govuk-hint">
                To view a child with a known case, enter case ID below:
            </div>
            <TextInputGroup onChange={(text: string) => caseId = text} id="caseId" name="Case ID"/>
            <button className="govuk-button" data-module="govuk-button" onClick={(event) => search(event)}>
                View child details
            </button>
        </div>
    )
}

export default CaseIdSearch;