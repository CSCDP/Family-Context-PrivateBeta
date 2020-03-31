import React from 'react'
import { ArraySchema } from '../../models/Schema';
import GenericComponent from './GenericComponent';

const ArrayComponent: React.FC<{ data: any[], schema: ArraySchema, keyId: string }> = (props: { data: any[], schema: ArraySchema, keyId: string }) => {

    if (props.data == null) {
        return <></>
    }

    let arrayKeyRoot = props.schema.title ?? props.keyId;
    let elementArray = props.data.map((dataItem, index) =>
        (
            <GenericComponent schema={props.schema.items} data={dataItem} keyId={""} key={index} arrayIndex={" " + ++index} />
        ));

    return <>
        <br />
        <p className="govuk-!-font-weight-bold govuk-!-font-size-16">{arrayKeyRoot}</p>
        {elementArray}
    </>;
}

export default ArrayComponent;