import React, {useEffect, useState} from "react";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    head: {
        fontWeight: "bold",
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    item: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    }
}));
const getData = (data, path) => {
    let v = data
    path.forEach(p => {
        v = v[p]
    })
    return v
}

/**
 * Make sure properties are rendered in the correct order,
 * then pass to sub-renderer
 * @param data
 * @param schema
 */
const layoutObject = (data, schema, propName) => {
    const properties = schema.properties
    const propDefs = []
    for (const prop in properties) {
        const def = {...properties[prop]}
        def.key = prop
        def.title = def.title ? def.title : prop
        def.sort = def["x-item-seq"] ? def["x-item-seq"] : def.title
        propDefs.push(def)
    }
    propDefs.sort((a,b) =>  a.sort - b.sort  )

    const values = []
    propDefs.forEach(prop => {
        values.push(...layoutData(data[prop.key], prop, prop.key))
    })
    return values
}

const layoutArray = (data, schema, propName) => {
    console.log(data, schema, propName)

    schema = {...schema, ...schema.items}
    console.log("SCHEMA", schema)
    const values = []
    data.forEach(datum => {
        values.push(...layoutData(datum, schema, propName))
    })

    return values
}

const layoutData = (data, schema, propName) => {
    let type = schema.type
    if (type === "string" && schema.format) {
        type = type + "-" + schema.format
    } else if (schema["x-ref"]) {
        type = "object-" + schema["x-ref"]
    }
    const values = []
    if (type.startsWith("object-")) {
        values.push(...layoutObject(data, schema, propName))
    } else if (type === "array") {
            values.push(...layoutArray(data, schema, propName))
    } else {
        const value = {}
        value.key = propName
        value.title = schema.title ? schema.title : propName
        value.value = data
        value.type = type
        values.push(value)
    }
    return values
}

const ServiceDetails = ({ details }) => {
    const classes = useStyles();

    const values = layoutData(details.data, details.schema)

    return (
        <>
            { values.map(v => (
                <>
                    <Grid item xs={4} key={"h-"+v.key} className={classes.head}>{v.title}</Grid>
                    <Grid item xs={8} key={v.key} className={classes.item}>{v.value}</Grid>
                </>
                )) }
        </>
    )


}

export default  ServiceDetails