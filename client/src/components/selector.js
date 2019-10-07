import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {Select, InputLabel, FormControl, MenuItem} from "@material-ui/core/";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


const Person = ({ personId , changeHandler }) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({personId});
  const handleChange = event => {
  	setValues({personId: event.target.value})
  	changeHandler(event.target.value);
  }
  return (
    <form className={classes.root} autoComplete="off">
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="personId">Person</InputLabel>
        <Select
          value={values.personId}
          onChange={handleChange}
          inputProps={{
            name: 'person',
            id: 'personId',
          }}
        >
          <MenuItem value={1}>Person 1</MenuItem>
          <MenuItem value={2}>Person 2</MenuItem>
          <MenuItem value={3}>Person 3</MenuItem>
          <MenuItem value={4}>Person 4</MenuItem>
          <MenuItem value={5}>Person 5</MenuItem>
          <MenuItem value={6}>Person 6</MenuItem>
          <MenuItem value={7}>Person 7</MenuItem>
          <MenuItem value={8}>Person 8</MenuItem>
          <MenuItem value={9}>Person 9</MenuItem>
          <MenuItem value={10}>Person 10</MenuItem>
        </Select>
      </FormControl>
    </form>
  );
}

export default Person;