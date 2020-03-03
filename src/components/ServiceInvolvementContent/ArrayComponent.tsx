import React from 'react'
import { ArraySchema } from '../../models/Schema';
import GenericComponent from './GenericComponent';

const ArrayComponent: React.FC<{ data: any[], schema: ArraySchema, keyId: string }> = (props: { data: any[], schema: ArraySchema, keyId: string }) => {

    let arrayKeyRoot = props.schema.title ?? props.keyId;
    let elementArray = props.data.map((dataItem, index) =>
        (
            <GenericComponent schema={props.schema.items} data={dataItem} keyId={" " + ++index} key={index}/>
        ));

    return <>
        <th>{arrayKeyRoot}</th>
        {elementArray}
        </>;
}

export default ArrayComponent;