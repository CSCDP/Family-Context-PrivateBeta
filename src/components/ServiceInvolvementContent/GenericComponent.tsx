import React from 'react'
import Schema, { ArraySchema, ObjectSchema, StringSchema } from '../../models/Schema';
import ArrayComponent from './ArrayComponent';
import StringComponent from './StringComponent';
import ObjectComponent from './ObjectComponent';
import InitialObjectComponent from './InitialObjectComponent';

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

export default GenericComponent;