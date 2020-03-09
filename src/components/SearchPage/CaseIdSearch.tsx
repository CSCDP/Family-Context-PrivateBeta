import React from "react";
import { TextInputGroup } from "../InputGroups";

type CaseIdSearchProps = {
    search: (caseId: string) => Promise<boolean>
}

const CaseIdSearch: React.FC<CaseIdSearchProps> = (props) => {
    var caseId = "";

    var search = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        event.preventDefault();
        var buttons = document.getElementsByClassName("govuk-button");       

        if (caseId !== "") {
            props.search(caseId).then(isFound => {
                if (!isFound) {
                    displayError("Child not found")
                }
            })
        } else {
            displayError("Enter the Case ID")
        }
    }

    var displayError = (errorMessage: string): void => {
        var formGroup = document.getElementById("caseIdSearchFormGroup") || new Element();
        formGroup.classList.add("govuk-form-group--error");

        var errorDiv = document.getElementById("caseIdSearchError") || new Element();
        errorDiv.innerHTML = errorMessage
        errorDiv.setAttribute("aria-hidden", "false")

        var inputBox = document.getElementById("caseIdInput") || new Element();
        inputBox.classList.add("govuk-input--error");
    }

    return (
        <div className="CaseIdSearch">
            <div className="govuk-grid-column-one-half govuk-form-group" id="caseIdSearchFormGroup">
                <div className="govuk-hint">
                    To view a child with a known case, enter case ID below:
                </div>
                <span id="caseIdSearchError" className="govuk-error-message" aria-hidden="true">
                </span>
                <TextInputGroup onChange={(text: string) => caseId = text} id="caseIdInput" name="Case ID" format="govuk-!-width-one-half" />
                <button className="govuk-button" id="caseIdSearchViewChildButton" data-module="govuk-button" onClick={(event) => search(event)}>
                    View child details
            </button>
            </div>
        </div>
    )
}

export default CaseIdSearch;