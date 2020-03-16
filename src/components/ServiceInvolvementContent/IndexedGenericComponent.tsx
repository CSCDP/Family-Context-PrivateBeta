import React from 'react'
import { ObjectSchema } from '../../models/Schema';
import GetResultsOrder from './GetResultsOrder';
import GenericComponent from './GenericComponent';

type IndexedGenericComponentProps = { 
    schema: ObjectSchema, 
    data: any,
    arrayIndex?: string
}

const IndexedGenericComponent: React.FC<IndexedGenericComponentProps> = (props: IndexedGenericComponentProps) => {
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

export default IndexedGenericComponent;