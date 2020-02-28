import React from "react";
import ServiceDetail from "../../models/ServiceDetail";
import TitleValuePairTableRow from "../Table/TitleValuePairTableRow";
import TableHeader from "../Table/TableHeader";

const ServiceInvolvementDisplay: React.SFC<{ details: ServiceDetail | null }> = (props: { details: ServiceDetail | null }) => {

    let properties = props.details?.schema.properties;
    let results: any[] = []; 
    for (let key in properties) {
        let value = properties[key];
        results[value["x-item-seq"]-1] = getData(key, value, props.details?.data);
    }

    function getData(key: string, value: { [id: string]: any}, data?: { [id: string]: any}, index?: number) {
        if (data) {
            if (value["type"] == "string") {
                let title = value["title"] ? value["title"] : key;
                let result;
                index==undefined ? result = <TitleValuePairTableRow rowTitle={title} rowValue={data[key]} format="govuk-!-font-size-14" /> : result = <TitleValuePairTableRow rowTitle={title+" "+index} rowValue={data[key]} format="govuk-!-font-size-14" />;
                return result;
            } else if (value["type"] == "array") {
                let title = value["title"] ? value["title"] : key;
                let minitable = value["items"]["properties"];
                let results: any[] = [];
                results[0] = <th>{title}</th>
                let index = 1;
                for (let dataKey in data[key]) {
                    let dataItem = data[key][dataKey];
                    let miniresults: any[] = [];
                    for (let minikey in minitable) {
                        let minivalue = minitable[minikey];
                        miniresults[minivalue["x-item-seq"]] = getData(minikey, minivalue, dataItem, index);
                    }
                    results[index] = miniresults;
                    index++;
                }
                return results;
            } else if (value["type"] == "object") {
                let title = value["title"] ? value["title"] : key;
                let minitable = value["properties"];
                let miniresults: any[] = [];
                miniresults[0] = <th>{title}</th>
                for (let minikey in minitable) {
                    let minivalue = minitable[minikey];
                    miniresults[minivalue["x-item-seq"]] = getData(minikey, minivalue, data[key]);
                }
                return miniresults;
            }
        }
    }
    
    return results.length > 0 ? <div>{results}</div> : null;
}

export default ServiceInvolvementDisplay;