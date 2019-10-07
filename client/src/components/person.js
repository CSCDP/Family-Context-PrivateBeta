import React, { useState, useEffect } from 'react';
import {Grid, CircularProgress} from "@material-ui/core/";

import fetch from "cross-fetch";

import PersonDetails from "./personDetails";

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