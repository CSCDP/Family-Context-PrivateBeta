import React from "react";
import ServiceDetail from "../../models/ServiceDetail";
import InitialObjectComponent from "./InitialObjectComponent";

const ServiceInvolvementDisplay: React.SFC<{ details: ServiceDetail }> = (props: { details: ServiceDetail }) => {
    return <dl className="govuk-summary-list govuk-summary-list--no-border"><InitialObjectComponent schema={props.details.schema} data={props.details.data}/></dl>
}

export default ServiceInvolvementDisplay;
