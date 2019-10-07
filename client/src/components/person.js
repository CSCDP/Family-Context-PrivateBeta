import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {Chip, Grid, Typography, CircularProgress} from "@material-ui/core/";

import fetch from "cross-fetch";

import PersonDetails from "./personDetails";


const useStyles = makeStyles(theme => ({
  heroUnit: {
    backgroundColor: theme.palette.background.paper
  },
  heroContent: {
    maxWidth: 1000,
    margin: "0 auto",
    padding: `${theme.spacing(8)} 0 ${theme.spacing(6) }`
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "100%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  personName: {
    whiteSpace: "nowrap"
  }
}));

const Spinner = (classes) => {
  return (
    <Grid container justify="center" alignItems="center">
      <CircularProgress className={classes.spinner} />
    </Grid>
  );
}

const Person = ({ personId }) => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        `/person/${personId}`,
      );
      const person = await result.json();
      setData(person);
    };
    fetchData();
  }, [personId]);


  if (data) {
    return (<PersonDetails person={data}/>);
  } else {
    return (<Spinner/>);
  }

}

export default Person;