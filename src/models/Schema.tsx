interface Schema {
    properties: { [id: string]: { [id: string]: any}};
    type: string;
    "x-ref": string;
}

export default Schema;