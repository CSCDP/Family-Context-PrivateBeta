import React from "react";
import { TextInputGroup, DobInputGroup } from "../InputGroups";

type InfoSearchProps = {
    search: (info: { [id: string]: string }) => void
}

const InfoSearch: React.FC<InfoSearchProps> = (props) => {
    var firstName = "";
    var familyName = "";
    var dob = "";

    var search = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        event.preventDefault();
        props.search({ firstName: firstName, familyName: familyName, dob: dob });
    }

    return (
        <div className="InfoSearch">
            <div className="govuk-grid-column-one-half">
                <TextInputGroup onChange={(text: string) => firstName = text} id="firstName" name="First Name" />
                <TextInputGroup onChange={(text: string) => familyName = text} id="familyName" name="Family Name" />
                <DobInputGroup onChange={(text: string) => dob = text} />
                <button className="govuk-button" data-module="govuk-button" onClick={(event) => search(event)}>
                    Search
                </button>
            </div>
        </div>
    )
}

export default InfoSearch;