import React from 'react'
import { ObjectSchema } from '../../models/Schema';
import GenericComponent from './GenericComponent';

interface DataDictionary { [id: string]: any }

const InitialObjectComponent: React.FC<{ data: DataDictionary, schema: ObjectSchema, keyId?: string }> = (props: { data: DataDictionary, schema: ObjectSchema, keyId?: string }) => {
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
            {results.map(result =>
                (
                    <GenericComponent schema={result} data={props.data[result.propertyKey]} keyId={result.propertyKey}/>
                )
            )}
        </>
    );
}

export default InitialObjectComponent;