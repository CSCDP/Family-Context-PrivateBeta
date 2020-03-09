import React from "react";
import PersonDetails from "../../models/PersonDetails";
import Warning from "../Warning";

type RelatedIndividualsInfoProps = {
    person: PersonDetails,
    matches: number
}

const RelatedIndividualsInfo: React.FC<RelatedIndividualsInfoProps> = (props: RelatedIndividualsInfoProps) => {
    return (
        <div className="ResultsInfo">
            <h1 className="govuk-heading-m">Related individuals from CMS</h1>
            <Warning>Please note: once selecting an individual from the list below, you may see sensitive information about that individual.</Warning>
            <p className="govuk-body">{props.matches || "No"} individual{props.matches === 1 ? " is" : "s are"} linked to {props.person.firstName || "_"} {props.person.lastName || "_"} in the CMS</p>
        </div>
    )
}

export default RelatedIndividualsInfo;