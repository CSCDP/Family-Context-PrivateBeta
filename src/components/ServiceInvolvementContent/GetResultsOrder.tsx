import { ObjectSchema } from '../../models/Schema';

function GetResultsOrder(schema: ObjectSchema): any[] {
    let results: any[] = [];
    for (let propertyKey in schema.properties) {
        let property = schema.properties[propertyKey];
        if (property.xItemSeq) {
            results[property.xItemSeq] = { ...property, propertyKey }
        } else {
            if (Object.keys(schema.properties).length !== 1) throw new Error("No order attribute for multiple properties in schema");
            results[0] = { ...property, propertyKey };
        }
    }
    return results;
}

export default GetResultsOrder;