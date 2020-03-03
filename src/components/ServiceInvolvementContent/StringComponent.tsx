import React from 'react'
import { StringSchema } from '../../models/Schema';

const StringComponent: React.FC<{ data: string, schema: StringSchema, keyId: string }> = (props: { data: string, schema: StringSchema, keyId: string }) => {
    
    let title = props.schema.title ? props.schema.title : props.keyId;
    let result;
    props.data ? result = props.data : result = null

    return (
        <div className="govuk-summary-list__row">
            <dt className="govuk-summary-list__key govuk-!-font-size-14">
                {title}
            </dt>
            <dd className="govuk-summary-list__value govuk-!-font-size-14">
                {result}
            </dd>
        </div>
    )
}

export default StringComponent;