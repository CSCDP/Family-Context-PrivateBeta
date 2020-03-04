import React from 'react'
import { StringSchema } from '../../models/Schema';
import SummaryListRow from '../SummarryList/SummaryListRow';
import SummaryListTitle from '../SummarryList/SummaryListTitle';
import SummaryListValue from '../SummarryList/SummaryListValue';

const StringComponent: React.FC<{ data: string, schema: StringSchema, keyId: string }> = (props: { data: string, schema: StringSchema, keyId: string }) => {

    let title = props.schema.title ? props.schema.title : props.keyId;
    let result;
    props.data ? result = props.data : result = null

    return (
        <SummaryListRow>
            <SummaryListTitle>
                {title}
            </SummaryListTitle>
            <SummaryListValue>
                {result}
            </SummaryListValue>
        </SummaryListRow>
    )
}

export default StringComponent;