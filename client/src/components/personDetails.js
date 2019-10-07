import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {Table, TableBody, TableRow, TableCell, TableHead} from "@material-ui/core/";

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 650,
  },
}));


const PersonDetails = ({ person }) => {
    const classes = useStyles();

	return(
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">DOB</TableCell>
            <TableCell align="right">Ethnicity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>{person.firstName} {person.lastName}</TableCell>
            <TableCell align="right">{person.gender}</TableCell>
            <TableCell align="right">{person.dateOfBirth}</TableCell>
            <TableCell align="right">{person.ethnicity}</TableCell>
          </TableRow>
        </TableBody>
      </Table>

	);

}

export default PersonDetails;