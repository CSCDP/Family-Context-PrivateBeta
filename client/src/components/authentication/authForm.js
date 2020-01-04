import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core/";

import { useDispatch } from 'react-redux'


import { checkAuthState } from "../../actions/auth";
import { authenticate } from "../../services/authService";
import Layout from "../layout";

import EmailForm from "./formEmail";

const useStyles = makeStyles(theme => ({
  resetMessage: {
    fontSize: ".8rem",
    paddingTop: 10,
  },
  errorMessage: {
    fontSize: ".8rem",
    paddingTop: 5,
    paddingBottom: 5,
    color: "red"
  },
  form: {},
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4)
  },
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
    padding: `${theme.spacing(8)} 0 ${theme.spacing(6)}`
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(1100 + theme.spacing(6))]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  spinner: {
    margin: theme.spacing(6)
  },
  toolbar: theme.mixins.toolbar,
}));

const SendToken = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const onEmailSubmit = async (email, password) => {
    const response = await authenticate(email, password);
    dispatch(checkAuthState());
  }

  return (
    <Layout loginPage={true}>
      <main className={classes.heroContent}>
        <div className={classes.toolbar} />
        <div className={classes.heroUnit}>
          <Grid container spacing={4}>
            <EmailForm classes={classes} onSubmit={onEmailSubmit} />
          </Grid>
        </div>
      </main>
    </Layout>
  );
};

export default SendToken;
