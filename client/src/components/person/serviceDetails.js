import React, {useEffect, useState} from "react";


const ServiceDetails = ({ details }) => {

    const properties = details.schema.properties;
    let values = []
    for (const prop in properties) {
        const def = properties[prop]

        let type = def.type
        if (type == "string" && def.format) {
            type = type + "-" + def.format
        } else if (def["x-ref"]) {
            type = def["x-ref"]
        }


        const value = {}
        value.key = prop
        value.title = def.title ? def.title : prop
        value.sort = def["x-item-seq"] ? def["x-item-seq"] : value.title
        value.value = new String(details.data[prop])
        value.type = type
        values.push(value)
    }
    values = values.sort((a,b) =>  a.sort - b.sort  )


    return (
        <>
            { values.map(v => (<div key={v.key}>{v.title}: {v.value} {v.sort} {v.type}</div>)) }
        </>
    )


}

export default  ServiceDetails