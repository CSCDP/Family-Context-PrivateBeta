import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography } from "@material-ui/core";
import Layout from "./layout"
import {makeStyles} from "@material-ui/core/styles";

import SearchDetailForm from "./searchDetailsForm"
import SearchIDForm from "./searchIDForm"
import {useSelector} from "react-redux";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        height: "100%",
        color: theme.palette.text.secondary,
    },
}));

const Search = () => {
    const classes = useStyles();
    const features = useSelector(state => state.features);

    const gridItemSize = features.personSearch ? 6 : 12;

    return (
        <Layout>
            <div className={classes.root}>

                <Grid container spacing={2} alignItems="stretch" direction="row-reverse">
                    <Grid item md={12} sm={12} xs={12}>
                        <Paper className={classes.paper}>
                            <Typography variant="h5">Find Service Involvement</Typography>
                        </Paper>
                    </Grid>
                    <Grid item md={gridItemSize} sm={gridItemSize} xs={12}>
                        <Paper className={classes.paper}>
                            <SearchIDForm />
                        </Paper>
                    </Grid>
                    { (features.personSearch) && (
                        <Grid item md={6} sm={6} xs={12}>
                            <Paper className={classes.paper}>
                                <SearchDetailForm />
                            </Paper>
                        </Grid>
                    )}
                </Grid>

            </div>
        </Layout>
    )
}

export default Search