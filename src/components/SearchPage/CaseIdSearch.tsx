import React from "react";
import { TextInputGroup } from "../InputGroups";

type CaseIdSearchProps = {
    search: (caseId: string) => void
}

const CaseIdSearch: React.FC<CaseIdSearchProps> = (props) => {
    var caseId = "";

    var search = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        event.preventDefault();
        props.search(caseId);
    }

    return (
        <div className="CaseIdSearch">
            <div className="govuk-grid-column-one-half">
                <TextInputGroup onChange={(text: string) => caseId = text} id="caseId" name="Case ID" format="govuk-!-width-one-half" />
                <button className="govuk-button" data-module="govuk-button" onClick={(event) => search(event)}>
                    View child details
            </button>
            </div>
        </div>
    )
}

export default CaseIdSearch;