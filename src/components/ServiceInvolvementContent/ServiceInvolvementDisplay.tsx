import React from "react";
import ServiceDetail from "../../models/ServiceDetail";
import GetStringData from "./GetStringData";
import TitleValuePairTableRow from "../Table/TitleValuePairTableRow";

const ServiceInvolvementDisplay: React.SFC<{ details: ServiceDetail }> = (props: { details: ServiceDetail }) => {

    let properties = props.details.schema.properties;
    let results: any[] = [];
    for (let key in properties) {
        let value = properties[key];
        results[value["x-item-seq"] - 1] = formatData(key, value, props.details.data);
    }

    function formatData(key: string, value: { [id: string]: any }, data?: { [id: string]: any }, index?: number) {
        if (data) {
            if (value["type"] == "string") {
                let title = value["title"] ? value["title"] : key;
                return index == undefined
                    ? <TitleValuePairTableRow rowTitle={title} rowValue={data[key]} format="govuk-!-font-size-14" />
                    : <TitleValuePairTableRow rowTitle={title + " " + index} rowValue={data[key]} format="govuk-!-font-size-14" />;
            } else if (value["type"] == "array") {
                return formatArrayData(key, value, data);
            } else if (value["type"] == "object") {
                return formatObjectData(key, value, data, index);
            }
        }
    }


    function formatArrayData(key: string, value: { [id: string]: any }, data: { [id: string]: any }) {
        let title = value["title"] ? value["title"] : key;
        let table = value["items"]["properties"];
        let results: any[] = [];
        results[0] = <th>{title}</th>
        let internalIndex = 1;
        for (let dataKey in data[key]) {
            let dataItem = data[key][dataKey];
            results[internalIndex] = formatSmallTableData(table, dataItem, internalIndex);
            internalIndex++;
        }
        return results;
    }
    function formatObjectData(key: string, value: { [id: string]: any }, data: { [id: string]: any }, index?: number) {
        let title = value["title"] ? value["title"] : key;
        let table = value["properties"];
        let results = formatSmallTableData(table, data[key], index);
        results[0] = <th>{title}</th>
        return results;
    }

    function formatSmallTableData(table: { [id: string]: any }, data: { [id: string]: any }, index?: number) {
        let results: any[] = [];
        for (let key in table) {
            let value = table[key];
            results[value["x-item-seq"]] = formatData(key, value, data, index);
        }
        return results;
    }

    return results.length > 0 ? <div>{results}</div> : null;
}

export default ServiceInvolvementDisplay;
