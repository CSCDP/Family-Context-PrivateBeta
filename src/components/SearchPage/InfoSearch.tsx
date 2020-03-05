import React from "react";
import { TextInputGroup, DobInputGroup } from "../InputGroups";
import Warning from "../Warning";

type InfoSearchProps = {
    search: (info: { [id: string]: string }) => void
}

class InfoSearch extends React.Component<InfoSearchProps, any> {

    constructor(props: InfoSearchProps ) {
        super(props);
        this.state = {warningHidden: true, searchState: {firstName: "", familyName: ""}};
    }

    search (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        event.preventDefault();

        let dobWarning = this.dobCheck();
        let nameWarning = this.nameCheck();

        if (typeof dobWarning === 'string'){
            this.setState({...this.state, warningHidden: false, errorText: dobWarning})
            return;
        } else if (dobWarning) {
            this.setState({...this.state, dob: dobWarning})
            this.searchForEverything(dobWarning);
            return;
        }
        if (nameWarning){
            this.setState({...this.state, warningHidden: false, errorText: nameWarning})
            return;
        }

        this.searchForEverything();
    }

    searchForEverything(dob?: Date) { 
        if (dob) {
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
        if (this.state.day === null && this.state.month === null && this.state.year === null) {
            return null;
        }
        if ((this.state.day !== null || this.state.month !== null || this.state.year !== null) && (this.state.day === null || this.state.month === null || this.state.year === null)) {
            console.log(1)
            return "Please enter a valid date";
        }
        if (isNaN(parseInt(this.state.day)) || isNaN(parseInt(this.state.month)) || isNaN(parseInt(this.state.year))) {
            console.log(2)
            return "Please enter a valid date";
        }
        return new Date(Date.UTC(parseInt(this.state.year), parseInt(this.state.month)-1, parseInt(this.state.day)));
    }

    render() {
    return (
        <div className="InfoSearch">
            <Warning hidden={this.state.warningHidden}>{this.state.errorText}</Warning>
            <div className="govuk-grid-column-one-half">
                <TextInputGroup onChange={(text: string) => this.state.searchState.firstName = text} id="firstName" name="First Name" format="govuk-!-width-one-half" />
                <TextInputGroup onChange={(text: string) => this.state.searchState.familyName = text} id="familyName" name="Family Name" format="govuk-!-width-one-half" />
                <DobInputGroup onChange={(year: string, month: string, day: string ) => {this.setState({day: day}); this.setState({month: month}); this.setState({year: year});}} />
                <button className="govuk-button" data-module="govuk-button" onClick={(event) => this.search(event)}>
                    Search
                </button>
            </div>
        </div>
    )
    }
}

export default InfoSearch;