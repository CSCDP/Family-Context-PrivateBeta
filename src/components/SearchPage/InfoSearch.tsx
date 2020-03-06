import React from "react";
import { TextInputGroup, DobInputGroup } from "../InputGroups";
import Warning from "../Warning";

type InfoSearchProps = {
    search: (info: { [id: string]: string }) => void
}

type InfoSearchState = {
    warningHidden: boolean, 
    errorText: string, 
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
        this.state = {warningHidden: true, errorText: "", searchState: {firstName: "", familyName: "", year: "", month: "", day: ""}};
    }

    search (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        event.preventDefault();

        let dobWarning = this.dobCheck();
        let nameWarning = this.nameCheck();

        if (dobWarning){
            this.setState({...this.state, warningHidden: false, errorText: dobWarning})
            return;
        } 
        if (nameWarning){
            this.setState({...this.state, warningHidden: false, errorText: nameWarning})
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
        if (this.state.searchState.firstName !== "" && this.state.searchState.familyName != "") {
            return null;
        } else {
            return "Please include both first name and family name.";
        }
    }

    dobCheck(){
        if ((this.state.searchState.day !== "" || this.state.searchState.month !== "" || this.state.searchState.year !== "") 
        && (this.state.searchState.day === "" || this.state.searchState.month === "" || this.state.searchState.year === "")) {
            return "Please enter a valid date";
        }
        if (isNaN(parseInt(this.state.searchState.day)) || isNaN(parseInt(this.state.searchState.month)) || isNaN(parseInt(this.state.searchState.year))) {
            return "Please enter a valid date";
        }
        return null;
    }

    render() {
    return (
        <div className="InfoSearch">
            <Warning hidden={this.state.warningHidden}>{this.state.errorText}</Warning>
            <div className="govuk-grid-column-one-half">
                <TextInputGroup onChange={(text: string) => this.state.searchState.firstName = text} id="firstName" name="First Name" format="govuk-!-width-one-half" />
                <TextInputGroup onChange={(text: string) => this.state.searchState.familyName = text} id="familyName" name="Family Name" format="govuk-!-width-one-half" />
                <DobInputGroup onChange={(year: string, month: string, day: string ) => {
                    var newSearchState = {firstName: this.state.searchState.firstName, familyName: this.state.searchState.familyName, year: year, month: month, day: day};
                    this.setState({...this.state, searchState: newSearchState});}} />
                <button className="govuk-button" data-module="govuk-button" onClick={(event) => this.search(event)}>
                    Search
                </button>
            </div>
        </div>
    )
    }
}

export default InfoSearch;