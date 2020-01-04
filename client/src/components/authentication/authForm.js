import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core/";

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
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    maxWidth: "750px",
    margin: "auto",
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
        <div className={classes.toolbar} />
        <Paper className={classes.paper}>
          <EmailForm classes={classes} onSubmit={onEmailSubmit} />
        </Paper>
    </Layout>
  );
};

export default SendToken;
