import React from "react";
import { TextInputGroup } from "../InputGroups";
import { Error } from '../../tools/ConfigurableContent';

type CaseIdSearchProps = {
    search: (caseId: string) => Promise<boolean>
}

type CaseIdSearchState = {
    caseId: string,
    searching: boolean, 
    errorMessage: string
}

class CaseIdSearch extends React.Component<CaseIdSearchProps, CaseIdSearchState> {
    constructor(props: CaseIdSearchProps) {
        super(props)
        this.state = {caseId: "", searching: false, errorMessage: ""}
    }

    search(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        event.preventDefault();
        this.setState({...this.state, searching: true})

        if (this.state.caseId === "") {
            this.displayError(Error.Search.NoCaseIdEntered)
        } else {
            this.props.search(this.state.caseId).then(isFound => {
                if (!isFound) {
                    this.displayError(Error.Search.CaseIdNotFound)
                }
            })
        }
    }
    
    displayError(errorMessage: string): void {
        this.setState({...this.state, searching: false, errorMessage})
    }

    render() {
        var isError = !this.state.searching && this.state.errorMessage !== ""

        return (
            <div className="CaseIdSearch">
                <div className={"govuk-grid-column-one-half govuk-form-group " + (isError ? "govuk-form-group--error" : "")} id="caseIdSearchFormGroup">
                    {isError ? 
                        <span id="caseIdSearchError" className="govuk-error-message">
                            <span className="govuk-visually-hidden">Error:</span> {this.state.errorMessage}
                        </span>
                        :
                        <></>
                    }
                    <TextInputGroup 
                        onChange={(text: string) => this.setState({...this.state, caseId: text})} 
                        id="caseIdInput" 
                        name="Case ID" 
                        format={"govuk-!-width-one-half " + (isError ? "govuk-input--error" : "")}
                    />
                    <button 
                        className="govuk-button"
                        id="caseIdSearchViewChildButton" 
                        data-module="govuk-button" 
                        disabled={this.state.searching} 
                        onClick={(event) => this.search(event)}
                    >
                        Search
                </button>
                </div>
            </div>
        )
    }
}

export default CaseIdSearch;