import React from "react";
import ServiceDetail from "../../models/ServiceDetail";
import TitleValuePairTableRow from "../Table/TitleValuePairTableRow";
import Schema, { ObjectSchema, StringSchema, ArraySchema } from "../../models/Schema";

interface DataDictionary { [id: string]: any }

const ServiceInvolvementDisplay: React.SFC<{ details: ServiceDetail }> = (props: { details: ServiceDetail }) => {
    return <ObjectComponent schema={props.details.schema} data={props.details.data}/>
}

const ObjectComponent: React.FC<{ data: DataDictionary, schema: ObjectSchema, keyId?: string }> = (props: { data: DataDictionary, schema: ObjectSchema, keyId?: string }) => {
    console.log(props.schema);
    let results: any[] = [];
    for (let propertyKey in props.schema.properties) {
        let property = props.schema.properties[propertyKey];
        if (property.xItemSeq) {
            results[property.xItemSeq] = { ...property, propertyKey }
        } else {
            if (Object.keys(props.schema.properties).length !== 1) throw "No order attribute for multiple properties in schema";
            results[0] = { ...property, propertyKey };
        }
    }
    return (
        <>
            <ObjectTitle keyId={props.keyId} title={props.schema.title}/>
            {results.map(result =>
                (
                    <GenericComponent schema={result} data={props.data[result.propertyKey]} keyId={result.propertyKey}/>
                )
            )}
        </>
    );
}

const ObjectTitle: React.FC<{keyId?: string, title?: string}> = (props) =>{
    if (props.title){
        return <th>{props.title}</th>
    }
    if(props.keyId){
        return <th>{props.keyId}</th>
    }
    return null;
}

const ArrayComponent: React.FC<{ data: any[], schema: ArraySchema, keyId: string }> = (props: { data:  any[], schema: ArraySchema, keyId: string }) => {

    let arrayKeyRoot = props.schema.title ?? props.keyId;
    let elementArray =props.data.map((dataItem, index) =>
    (
        <GenericComponent schema={props.schema.items} data={dataItem} keyId={arrayKeyRoot + index}/>
    ));

    return <>{elementArray}</>;
}


const StringComponent: React.FC<{ data: string, schema: StringSchema, keyId: string }> = (props: { data: string, schema: StringSchema, keyId: string }) => {
    let title = props.schema.title ? props.schema.title : props.keyId;
    return <TitleValuePairTableRow rowTitle={title} rowValue={props.data} format="govuk-!-font-size-14" />
}

const GenericComponent: React.FC<{ schema: Schema, data: any, keyId: string }> = (props: { schema: Schema, data: any, keyId: string }) => {

    let type = props.schema.type;
    switch (type) {
        case "array": {
            let arraySchema = props.schema as ArraySchema;
            return <ArrayComponent schema={arraySchema} data={props.data} keyId={props.keyId} />
        }
        case "object": {
            let objectSchema = props.schema as ObjectSchema;
            return <ObjectComponent schema={objectSchema} data={props.data} keyId={props.keyId} />
        }
        case "string": {
            let stringSchema = props.schema as StringSchema;
            return <StringComponent schema={stringSchema} data={props.data} keyId={props.keyId} />
        }
    }
    return (
        null
    );
}

export default ServiceInvolvementDisplay;
