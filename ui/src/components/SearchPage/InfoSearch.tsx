import React from "react";
import { TextInputGroup, DobInputGroup } from "../InputGroups";
import ErrorMessage from "../ErrorMessage";

type InfoSearchProps = {
    search: (info: { [id: string]: string }) => void
}

enum ErrorType {
    Name = "Enter the first name and last name",
    Date = "Enter a real date of birth or leave it empty"
}

type InfoSearchState = {
    warningHidden: boolean, 
    errorType: ErrorType | null,
    searchState: {
        firstName: string, 
        familyName: string, 
        year: string, 
        month: string, 
        day: string
    }
}

class InfoSearch extends React.Component<InfoSearchProps, InfoSearchState> {

    constructor(props: InfoSearchProps ) {
        super(props);
        this.state = {warningHidden: true, errorType: null, searchState: {firstName: "", familyName: "", year: "", month: "", day: ""}};
    }

    search (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        event.preventDefault();

        let dobWarning = this.dobCheck();
        let nameWarning = this.nameCheck();

        if (dobWarning){
            this.setState({...this.state, warningHidden: false, errorType: dobWarning})
            return;
        }

        if (nameWarning){
            this.setState({...this.state, warningHidden: false, errorType: nameWarning})
            return;
        }

        this.searchForIndividual();
    }

    searchForIndividual() { 
        if (this.state.searchState.day !== "" && this.state.searchState.month !== "" && this.state.searchState.year !== "") {
            var dob = new Date(Date.UTC(parseInt(this.state.searchState.year), parseInt(this.state.searchState.month)-1, parseInt(this.state.searchState.day)));
            this.props.search({ firstName: this.state.searchState.firstName, lastName: this.state.searchState.familyName, dateOfBirth: dob.toISOString() });
        } else {
            this.props.search({ firstName: this.state.searchState.firstName, lastName: this.state.searchState.familyName});
        }
    }

    nameCheck(){
        if (this.state.searchState.firstName !== "" && this.state.searchState.familyName !== "") {
            return null;
        } else {
            return ErrorType.Name;
        }
    }

    dobCheck(){
        if (this.state.searchState.day === "" && this.state.searchState.month === "" && this.state.searchState.year === "") {
            return null;
        }
        if ((this.state.searchState.day !== "" || this.state.searchState.month !== "" || this.state.searchState.year !== "") 
        && (this.state.searchState.day === "" || this.state.searchState.month === "" || this.state.searchState.year === "")) {
            return ErrorType.Date;
        }
        if (isNaN(parseInt(this.state.searchState.day)) || isNaN(parseInt(this.state.searchState.month)) || isNaN(parseInt(this.state.searchState.year))) {
            return ErrorType.Date;
        }
        return null;
    }

    render() {
    var isNameError = this.state.errorType === ErrorType.Name;
    var isDateError = this.state.errorType === ErrorType.Date;

    return (
        <div className="InfoSearch">
            <div className={"govuk-grid-column-one-half govuk-form-group " + (isNameError || isDateError ? "govuk-form-group--error" : "")}>
                <ErrorMessage hidden={this.state.warningHidden}>{this.state.errorType?.toString() || ""}</ErrorMessage>
                <TextInputGroup 
                    onChange={(text: string) => {
                        var newSearchState = {
                            firstName: text, 
                            familyName: this.state.searchState.familyName, 
                            year: this.state.searchState.year, 
                            month: this.state.searchState.month, 
                            day: this.state.searchState.day};
                        this.setState({...this.state, searchState: newSearchState});}} 
                    id="firstName" 
                    name="First Name" 
                    format={"govuk-!-width-one-half " + (isNameError ? "govuk-input--error" : "")} />
                <TextInputGroup 
                    onChange={(text: string) => {
                        var newSearchState = {
                            firstName: this.state.searchState.firstName,
                            familyName: text, 
                            year: this.state.searchState.year, 
                            month: this.state.searchState.month, 
                            day: this.state.searchState.day};
                        this.setState({...this.state, searchState: newSearchState});}} 
                    id="familyName" 
                    name="Family Name" 
                    format={"govuk-!-width-one-half " + (isNameError ? "govuk-input--error" : "")} />
                <DobInputGroup 
                    onChange={(year: string, month: string, day: string ) => {
                        var newSearchState = {
                            firstName: this.state.searchState.firstName, 
                            familyName: this.state.searchState.familyName, 
                            year: year, 
                            month: month, 
                            day: day};
                        this.setState({...this.state, searchState: newSearchState});}}
                    format={(isDateError ? "govuk-input--error" : "")}
                />
                <button className="govuk-button" data-module="govuk-button" onClick={(event) => this.search(event)}>
                    Search
                </button>
            </div>
        </div>
    )
    }
}

export default InfoSearch;