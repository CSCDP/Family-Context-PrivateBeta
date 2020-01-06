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
    const classes = useStyles();

    const values = layoutData(details, details.schema, [])

    return (
        <>
            { values.map(v => (
                <>
                    <Grid item xs="4" key={"h-"+v.key} className={classes.head}>{v.title}</Grid>
                    <Grid item xs="8" key={v.key} className={classes.item}>{v.value}</Grid>
                </>
                )) }
        </>
    )


}

export default  ServiceDetails