import React from 'react'
import { ObjectSchema } from '../../models/Schema';
import BottomLevelStringComponent from './BottomLevelStringComponent';
import SummaryListValue from '../SummarryList/SummaryListValue';
import SummaryListRow from '../SummarryList/SummaryListRow';
import SummaryListTitle from '../SummarryList/SummaryListTitle';

interface DataDictionary { [id: string]: any }

const ObjectComponent: React.FC<{ data: DataDictionary, schema: ObjectSchema, keyId?: string, arrayIndex?: string }> = (props: { data: DataDictionary, schema: ObjectSchema, keyId?: string, arrayIndex?: string }) => {

    let results = getResults();
    let title = props.schema.title ? props.schema.title : props.keyId;

    function getResults() {
        let results: any[] = [];
        for (let propertyKey in props.schema.properties) {
            let property = props.schema.properties[propertyKey];
            if (property.xItemSeq) {
                results[property.xItemSeq] = { ...property, propertyKey }
            } else {
                if (Object.keys(props.schema.properties).length !== 1) throw "No order attribute for multiple properties in schema";
                results[0] = { ...property, propertyKey };
            }
        }
        return results;
    }

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