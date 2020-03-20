import React from 'react'
import { StringSchema } from '../../models/Schema';
import SummaryListRow from '../SummarryList/SummaryListRow';
import SummaryListTitle from '../SummarryList/SummaryListTitle';
import SummaryListValue from '../SummarryList/SummaryListValue';
import { formatShortDateOrString } from '../../tools/FormattingTools';

type StringComponentProps = { 
    data: string, 
    schema: StringSchema, 
    keyId: string, 
    arrayIndex?: string
}

const StringComponent: React.FC<StringComponentProps> = (props: StringComponentProps) => {

    if (props.data === "") {
        return <></>
    }

    let title = props.schema.title ? props.schema.title : props.keyId;
    let result = props.data ?? null;

    if (result && props.schema.format === "date") {
        result = formatShortDateOrString(result);
    }

    return (
        <SummaryListRow>
            <SummaryListTitle>
                {title}{props.arrayIndex}
            </SummaryListTitle>
            <SummaryListValue>
                {result}
            </SummaryListValue>
        </SummaryListRow>
    )
}

export default StringComponent;