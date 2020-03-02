import React from 'react'
import TitleValuePairTableRow from '../Table/TitleValuePairTableRow';

interface GetStringDataProps {
    key: string, 
    value: { [id: string]: any }, 
    data: { [id: string]: any }, 
    index?: number
}

const GetStringData: React.SFC<GetStringDataProps> = (props: GetStringDataProps) => {
    let title = props.value["title"] ? props.value["title"] : props.key;
    return props.index == undefined 
        ? <TitleValuePairTableRow rowTitle={title} rowValue={props.data[props.key]} format="govuk-!-font-size-14" /> 
        : <TitleValuePairTableRow rowTitle={title + " " + props.index} rowValue={props.data[props.key]} format="govuk-!-font-size-14" />;
}

export default GetStringData;