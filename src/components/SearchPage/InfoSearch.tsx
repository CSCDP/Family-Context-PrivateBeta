import React from "react";
import { TextInputGroup } from "../InputGroups";

type InfoSearchProps = {
    search: (info: {[id: string]: string}) => void
}

const InfoSearch: React.FC<InfoSearchProps> = (props) => {
    var firstName = "";
    var familyName = "";
    var day = "";
    var month = "";
    var year = "";

    var search = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) : void => {
        event.preventDefault();
        let dob = day != "" && month != "" && year != "" ? month+"%2F"+day+"%2F"+year : "";
        props.search({firstName: firstName, familyName: familyName, dob: dob});
    }

    return (
        <div className="NameSearch">
            <TextInputGroup onChange={(text: string) => firstName = text} id="firstName" name="First Name"/>

            <TextInputGroup onChange={(text: string) => familyName = text} id="familyName" name="Family Name"/>
            <div className="govuk-hint">
                Date of birthday (optional)
            </div>
            <TextInputGroup onChange={(text: string) => day = text} id="day" name="Day"/>
            <TextInputGroup onChange={(text: string) => month = text} id="month" name="Month"/>
            <TextInputGroup onChange={(text: string) => year = text} id="year" name="Year"/>
            <button className="govuk-button" data-module="govuk-button" onClick={(event) => search(event)}>
                Search
            </button>
        </div>
    )
}

export default InfoSearch;