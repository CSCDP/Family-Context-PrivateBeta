type Schema = ArraySchema | ObjectSchema | StringSchema;

export interface ArraySchema {
    type: string,
    title?: string,
    xRef?: string,
    xItemSeq?: number,
    items: Schema
}

export interface ObjectSchema {
    type: string,
    title?: string,
    xRef?: string,
    xItemSeq?: number,
    properties: {[id: string]: Schema}
}

export interface StringSchema {
    type: string,
    title?: string,
    xItemSeq?: number,
    format?: string,
    pattern? : string
}

export default Schema
