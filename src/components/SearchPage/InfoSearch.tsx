import React from "react";
import { TextInputGroup, DobInputGroup } from "../InputGroups";
import NameWarning from "./NameWarning";

type InfoSearchProps = {
    search: (info: { [id: string]: string }) => void
}

const InfoSearch: React.FC<InfoSearchProps> = (props) => {
    var firstName = "";
    var familyName = "";
    var dob : Date;

    var search = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        event.preventDefault();
        if (firstName !== "" && familyName != "") {
            if (dob !== undefined) {
                props.search({ firstName: firstName, lastName: familyName, dateOfBirth: dob.toISOString() });
            } else {
                props.search({ firstName: firstName, lastName: familyName });
            }
        } else {
            var warning = document.getElementById("NameWarning") as HTMLElement;
            warning.style.display = "initial";
        }
    }

    return (
        <div className="InfoSearch">
            <NameWarning />
            <div className="govuk-grid-column-one-half">
                <TextInputGroup onChange={(text: string) => firstName = text} id="firstName" name="First Name" format="govuk-!-width-one-half" />
                <TextInputGroup onChange={(text: string) => familyName = text} id="familyName" name="Family Name" format="govuk-!-width-one-half" />
                <DobInputGroup onChange={(text: Date) => dob = text} />
                <button className="govuk-button" data-module="govuk-button" onClick={(event) => search(event)}>
                    Search
                </button>
            </div>
        </div>
    )
}

export default InfoSearch;