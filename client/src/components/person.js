import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { CircularProgress, Grid } from "@material-ui/core";
import Layout from "./layout"
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

const Person = () => {
  const { personId } = useParams();

  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const person = await personApi.getPersonById(personId);
      setData(person);
    };
    fetchData();
  }, [personId]);


  if (data) {
    return (<Layout><PersonDetails person={data}/></Layout>);
  } else {
    return (<Layout><Spinner/></Layout>);
  }

}

export default Person;