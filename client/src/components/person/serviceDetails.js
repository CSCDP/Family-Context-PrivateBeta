import React, {useEffect, useState} from "react";

const getData = (data, path) => {
    let v = data
    path.forEach(p => {
        v = v[p]
    })
    return v
}

const layoutData = (details, schema, prefix) => {
    const values = []
    const properties = schema.properties
    for (const prop in properties) {
        const myPrefix = [...prefix, prop]
        const def = properties[prop]

        let type = def.type
        if (type === "string" && def.format) {
            type = type + "-" + def.format
        } else if (def["x-ref"]) {
            type = "object-" + def["x-ref"]
        }

        if (type.startsWith("object-")) {
            values.push(...layoutData(details, def, myPrefix))
        } else {
            const value = {}
            value.key = prop
            value.title = def.title ? def.title : prop
            value.sort = def["x-item-seq"] ? def["x-item-seq"] : value.title
            value.value = new String(getData(details.data, myPrefix))
            value.type = type
            values.push(value)
        }
    }
    values.sort((a,b) =>  a.sort - b.sort  )
    return values
}

const ServiceDetails = ({ details }) => {
    const values = layoutData(details, details.schema, [])

    return (
        <>
            { values.map(v => (<div key={v.key}><b>{v.title}:</b> "{v.value}"   {v.sort} {v.type}</div>)) }
        </>
    )


}

export default  ServiceDetails