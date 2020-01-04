import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography } from "@material-ui/core";
import Layout from "./layout"
import {makeStyles} from "@material-ui/core/styles";

import SearchDetailForm from "./searchDetailsForm"
import SearchIDForm from "./searchIDForm"
import PersonApi from "../api/api/PersonApi";
import DetailsBlock from "./person/detailsBlock";

import { longDateFormat as dateFormat } from "../helpers/formatters"
import {Link} from "react-router-dom";
import {blue, red} from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        height: "100%",
        color: theme.palette.text.secondary,
    },
    headerRow: {
        fontWeight: "bold",
    },
    viewLink: {
        color: blue["900"],
    }
}));

const personApi = new PersonApi();

const colSpec = {
    "fn": 3,
    "ln": 3,
    "dob": 2,
    "adr": 3,
    "view": 1,
}

const Search = () => {
    const classes = useStyles();

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const person = await personApi.searchPerson("","")
            setData(person);
        };
        fetchData();
    }, []);


    return (
        <Layout>
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid container spacing={2} alignItems="stretch" direction="row" className={classes.headerRow}>
                        <Grid item xs={colSpec.fn}>
                            First Name
                        </Grid>
                        <Grid item xs={colSpec.ln}>
                            Last Name
                        </Grid>
                        <Grid item xs={colSpec.dob}>
                            Date of Birth
                        </Grid>
                        <Grid item xs={colSpec.adr}>
                            Address
                        </Grid>
                        <Grid item xs={colSpec.view}>
                        </Grid>
                    </Grid>
                    { data.map((person, ix) => (
                        <Grid key={person.id} container spacing={2} alignItems="stretch" direction="row">
                            <Grid item xs={colSpec.fn}>
                                {person.firstName}
                            </Grid>
                            <Grid item xs={colSpec.ln}>
                                {person.lastName}
                            </Grid>
                            <Grid item xs={colSpec.dob}>
                                {dateFormat.format(person.dateOfBirth)}
                            </Grid>
                            <Grid item xs={colSpec.adr}>
                                {person.address}
                            </Grid>
                            <Grid item xs={colSpec.view}>
                                <Link to={`/person/${person.id}`} className={classes.viewLink}>View</Link>
                            </Grid>
                        </Grid>
                    ))}
                </Paper>

            </div>
        </Layout>
    )
}

export default Search