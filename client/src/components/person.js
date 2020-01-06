import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { CircularProgress, Grid } from "@material-ui/core";
import Layout from "./layout"
import { PersonApi } from "../api";
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

  const [person, setPerson] = useState();
  const [services, setServices] = useState();

  useEffect(() => {
    const fetchPerson = async () => {
      const person = await personApi.getPersonById(personId);
      setPerson(person);
    };
    fetchPerson();
    const fetchServices = async () => {
      const services = await personApi.getPersonServicesById(personId)
      setServices(services);
    };
    fetchServices();
  }, [personId]);


  if (person && services) {
    return (<Layout><PersonDetails person={person} services={services}/></Layout>);
  } else {
    return (<Layout><Spinner/></Layout>);
  }

}

export default Person;