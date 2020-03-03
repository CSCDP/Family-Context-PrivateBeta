import React from 'react'
import { ObjectSchema } from '../../models/Schema';
import BottomLevelStringComponent from './BottomLevelStringComponent';
import SummaryListValue from '../SummarryList/SummaryListValue';
import SummaryListRow from '../SummarryList/SummaryListRow';
import SummaryListTitle from '../SummarryList/SummaryListTitle';
import GetResultsOrder from './GetResultsOrder';

interface DataDictionary { [id: string]: any }

const ObjectComponent: React.FC<{ data: DataDictionary, schema: ObjectSchema, keyId?: string, arrayIndex?: string }> = (props: { data: DataDictionary, schema: ObjectSchema, keyId?: string, arrayIndex?: string }) => {

    let results = GetResultsOrder(props.schema);
    let title = props.schema.title ? props.schema.title : props.keyId;

    return (
        <SummaryListRow>
            <SummaryListTitle>{title}{props.arrayIndex}</SummaryListTitle>

            <SummaryListValue>
                {results.map(result =>
                    (
                        <BottomLevelStringComponent key={result.propertyKey}>{props.data[result.propertyKey]}</BottomLevelStringComponent>
                    )
                )}
            </SummaryListValue>
        </SummaryListRow>
    );
}

export default ObjectComponent;