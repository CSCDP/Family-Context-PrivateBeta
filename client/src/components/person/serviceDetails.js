import React from "react";
import Grid from "@material-ui/core/Grid";
import  {makeStyles } from "@material-ui/core/styles";
import createFragment from 'react-addons-create-fragment';

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

const joinStrings = (sep, ...strings) => {
    const values = []
    strings.forEach(s => {
        if (s) values.push(s)
    })
    return values.join(sep)
}


const LayoutObject = ({data, schema}) => {
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
        values.push(...LayoutData({data: data[prop.key], schema: prop, propName: prop.key}))
    })
    return values
}

const LayoutArray = ({data, schema, propName}) => {
    schema = {...schema, ...schema.items}
    const values = []
    data.forEach(datum => {
        values.push(...LayoutData({data: datum, schema, propName}))
    })

    return values
}

const RenderStringValue = ({data, schema, propName}) => {
    const classes = useStyles();

    const value = {}
    value.key = propName
    value.title = schema.title ? schema.title : propName
    value.value = data

    return [(<Grid item xs={4} key={"h-"+value.key} className={classes.head}>{value.title}</Grid>),
            (<Grid item xs={8} key={value.key} className={classes.item}>{value.value}</Grid>)]
}

const RenderContact = ({data, schema, propName}) => {
    const classes = useStyles();
    const title = schema.title ? schema.title : propName
    const name = joinStrings(" | ", data.name, data.role)
    const contact = joinStrings(" | ", data.email, data.phone)
    return [createFragment({ propName: (
            <>
            <Grid item xs={4} className={classes.head}>{title}</Grid>
            <Grid item xs={8} className={classes.item}>{name} </Grid>
            <Grid item xs={4} className={classes.head}></Grid>
            <Grid item xs={8} className={classes.item}>{contact} </Grid>
        </>
    )})];
}

const RenderOffenceSummary = ({data, schema, propName}) => {
    const classes = useStyles();
    const title = schema.title ? schema.title : propName
    const name = joinStrings(" - ", data.dateOfOffence, data.natureOfInvolvement, data.typeOfOffence)
    return [createFragment({ propName:(
        <>
            <Grid item xs={4} className={classes.head}>{title}</Grid>
            <Grid item xs={8} className={classes.item}>{name} </Grid>
        </>
    )})];
}


const LayoutData = ({data, schema, propName}) => {
    let type = schema.type
    if (type === "string" && schema.format) {
        type = type + "-" + schema.format
    } else if (schema["x-ref"]) {
        type = type + "-" + schema["x-ref"]
    }

    const values = []
    if (type.endsWith("#Contact")) {
        values.push(...RenderContact({data, schema, propName}))
    } else if (type.endsWith("#OffenceSummary")) {
        values.push(...RenderOffenceSummary({data, schema, propName}))
    } else if (type.startsWith("object-")) {
        values.push(...LayoutObject({data, schema, propName}))
    } else if (type === "array") {
        values.push(...LayoutArray({data, schema, propName}))
    } else if (type === "string") {
        values.push(...RenderStringValue({data, schema, propName}))
    }
    return values
}

const ServiceDetails = ({ details }) => {
    return (
        <LayoutData data={details.data} schema={details.schema}/>
    )
}

export default  ServiceDetails