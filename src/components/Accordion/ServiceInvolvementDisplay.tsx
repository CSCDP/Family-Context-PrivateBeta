import React from "react";
import ServiceDetail from "../../models/ServiceDetail";
import TitleValuePairTableRow from "../Table/TitleValuePairTableRow";
import TableHeader from "../Table/TableHeader";

const ServiceInvolvementDisplay: React.SFC<{ details: ServiceDetail | null }> = (props: { details: ServiceDetail | null }) => {

    let properties = props.details?.schema.properties;
    let results: any[] = [];
    for (let key in properties) {
        let value = properties[key];
        results[value["x-item-seq"] - 1] = getData(key, value, props.details?.data);
    }

    function getData(key: string, value: { [id: string]: any }, data?: { [id: string]: any }, index?: number) {
        if (data) {
            if (value["type"] == "string") {
                return getStringData(key, value, data, index);
            } else if (value["type"] == "array") {
                return getArrayData(key, value, data);
            } else if (value["type"] == "object") {
                return getObjectData(key, value, data, index);
            }
        }
    }

    function getStringData(key: string, value: { [id: string]: any }, data: { [id: string]: any }, index?: number) {
        let title = value["title"] ? value["title"] : key;
        let result;
        index == undefined ? result = <TitleValuePairTableRow rowTitle={title} rowValue={data[key]} format="govuk-!-font-size-14" /> : result = <TitleValuePairTableRow rowTitle={title + " " + index} rowValue={data[key]} format="govuk-!-font-size-14" />;
        return result;
    }
    function getArrayData(key: string, value: { [id: string]: any }, data: { [id: string]: any }) {
        let title = value["title"] ? value["title"] : key;
        let table = value["items"]["properties"];
        let results: any[] = [];
        results[0] = <th>{title}</th>
        let internalIndex = 1;
        for (let dataKey in data[key]) {
            let dataItem = data[key][dataKey];
            results[internalIndex] = getSmallTableData(table, dataItem, internalIndex);
            internalIndex++;
        }
        return results;
    }
    function getObjectData(key: string, value: { [id: string]: any }, data: { [id: string]: any }, index?: number) {
        let title = value["title"] ? value["title"] : key;
        let table = value["properties"];
        let results = getSmallTableData(table, data[key], index);
        results[0] = <th>{title}</th>
        return results;
    }

    function getSmallTableData(table: { [id: string]: any }, data: { [id: string]: any }, index?: number) {
        let results: any[] = [];
        for (let key in table) {
            let value = table[key];
            results[value["x-item-seq"]] = getData(key, value, data, index);
        }
        return results;
    }

    return results.length > 0 ? <div>{results}</div> : null;
}

export default ServiceInvolvementDisplay;