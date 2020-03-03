import React from "react";
import ServiceDetail from "../../models/ServiceDetail";
import GenericComponent from "./GenericComponent";

const ServiceInvolvementDisplay: React.SFC<{ details: ServiceDetail }> = (props: { details: ServiceDetail }) => {
    let results: any[] = [];
    for (let propertyKey in props.details.schema.properties) {
        let property = props.details.schema.properties[propertyKey];
        if (property.xItemSeq) {
            results[property.xItemSeq] = { ...property, propertyKey }
        } else {
            if (Object.keys(props.details.schema.properties).length !== 1) throw "No order attribute for multiple properties in schema";
            results[0] = { ...property, propertyKey };
        }
    }
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
