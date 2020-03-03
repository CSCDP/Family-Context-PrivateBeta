import React from "react";
import PersonDetails from "../../models/PersonDetails";
import SensitiveInformationWarning from "../SensitiveInformationWarning";

type RelatedIndividualsInfoProps = {
    person: PersonDetails,
    matches: number
}

const RelatedIndividualsInfo: React.FC<RelatedIndividualsInfoProps> = (props: RelatedIndividualsInfoProps) => {
    return (
        <div className="ResultsInfo">
            <h1 className="govuk-heading-m">Related individuals from CMS</h1>
            <SensitiveInformationWarning />
            <p className="govuk-body">{props.matches || "No"} individuals are linked to {props.person.firstName || "_"} {props.person.lastName || "_"} in the CMS</p>
        </div>
    )
}

export default RelatedIndividualsInfo;