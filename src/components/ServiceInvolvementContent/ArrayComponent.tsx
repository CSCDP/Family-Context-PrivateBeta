import React from 'react'
import { ArraySchema, ObjectSchema } from '../../models/Schema';
import GenericComponent from './GenericComponent';
import IndexedGenericComponent from './IndexedGenericComponent';

const ArrayComponent: React.FC<{ data: any[], schema: ArraySchema, keyId: string }> = (props: { data: any[], schema: ArraySchema, keyId: string }) => {

    if (props.data == null) {
        return <></>
    }
   
    let arrayKeyRoot = props.schema.title ?? props.keyId;
    let elementArray = props.data.map((dataItem, index) =>
        {
            if (props.schema.items.type === "object") {  
                return (
                    <IndexedGenericComponent 
                        schema={props.schema.items as ObjectSchema} 
                        data={props.data[index]} 
                        key={index} 
                        arrayIndex={(props.data.length > 1) ? " " + (index+1) : undefined} 
                    />
                )
            } else {
                return (
                    <GenericComponent schema={props.schema.items} data={dataItem} keyId={""} key={index} arrayIndex={" " + ++index}/>
                )
            }
        });

    return <>
        <br/>
        <p className="govuk-!-font-weight-bold govuk-!-font-size-16">{arrayKeyRoot}</p>
        {elementArray}
        </>;
}

export default ArrayComponent;