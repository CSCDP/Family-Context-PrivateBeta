import React from 'react'
import { ObjectSchema } from '../../models/Schema';
import GetResultsOrder from './GetResultsOrder';
import GenericComponent from './GenericComponent';

type GenericComponentGroupProps = { 
    schema: ObjectSchema, 
    data: any,
    arrayIndex?: string
}

const GenericComponentGroup: React.FC<GenericComponentGroupProps> = (props: GenericComponentGroupProps) => {
    let results = GetResultsOrder(props.schema);

    return (
        <>
        {results.map(
            result =>
            (
                <GenericComponent 
                    schema={result} 
                    data={props.data[result.propertyKey]} 
                    keyId={result.propertyKey} 
                    key={result.propertyKey}
                    arrayIndex={props.arrayIndex}
                />
            )
        )}
        <br/>
        </>
    )
}

export default GenericComponentGroup;