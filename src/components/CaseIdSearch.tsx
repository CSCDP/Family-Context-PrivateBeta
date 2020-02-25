import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { TextInputGroup } from "./InputGroups";

const CaseIdSearch: React.FC<RouteComponentProps> = (props) => {
    var caseId = "";

    var search = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) : void => {
        event.preventDefault();
        if (caseId != "") {
            props.history.push(`/person/${caseId}`)
        }
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