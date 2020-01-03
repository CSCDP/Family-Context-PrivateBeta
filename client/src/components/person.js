import React, { useState, useEffect } from 'react';
import { CircularProgress, Grid } from "@material-ui/core";

import PersonApi from "../api/api/PersonApi";

import PersonDetails from "./personDetails";

const personApi = new PersonApi();

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
      const person = await personApi.getPersonById(personId);
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