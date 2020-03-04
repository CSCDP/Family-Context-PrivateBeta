import React from "react";
import ServiceDetail from "../../models/ServiceDetail";
import GenericComponent from "./GenericComponent";
import GetResultsOrder from "./GetResultsOrder";

const ServiceInvolvementDisplay: React.SFC<{ details: ServiceDetail }> = (props: { details: ServiceDetail }) => {

    let results = GetResultsOrder(props.details.schema);

    return (
        <dl className="govuk-summary-list govuk-summary-list--no-border">
            {results.map(result =>
                (
                    <GenericComponent schema={result} data={props.details.data[result.propertyKey]} keyId={result.propertyKey} key={result.propertyKey}/>
                )
            )}
        </dl>
    );
}

export default ServiceInvolvementDisplay;
