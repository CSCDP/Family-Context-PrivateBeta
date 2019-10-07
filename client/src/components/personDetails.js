import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {Paper, Table, TableBody, TableRow, TableCell, TableHead, Typography} from "@material-ui/core/";

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 650,
  },
  paper: {
    ...theme.mixins.gutters(),
    maxWidth: 800,
    margin: "0 auto",
    marginTop: 25,
    padding: 10,
  },
 }));


const PersonDetails = ({ person }) => {
    const classes = useStyles();

	return(
	  <>
		  <Paper className={classes.paper}>
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
	      </Paper>
	      <AdultSocialCare classes={classes} serviceData={person.serviceData}/>
	      <Police classes={classes} serviceData={person.serviceData}/>
      </>
	);

}

const AdultSocialCare = ({ classes, serviceData }) => {
	const data = serviceData.ASC;
	if (data) {
		return (
		  <Paper className={classes.paper}>
		    <Typography variant="h4">Adult Social Care</Typography>
		  	<Typography>Data exists from <b>{data.coverageStartDate}</b> to <b>{data.coverageEndDate} </b> 
		  		for the <b>{data.coverageGeographicArea}</b> area.</Typography>
		      <Table className={classes.table}>
		        <TableHead>
		          <TableRow>
		            <TableCell>Contact Name</TableCell>
		            <TableCell align="right">Contact Phone</TableCell>
		            <TableCell align="right">Contact Email</TableCell>
		            <TableCell align="right">Contact Role</TableCell>
		          </TableRow>
		        </TableHead>
		        <TableBody>
		          <TableRow>
		            <TableCell>{data.leadPractitionerName}</TableCell>
		            <TableCell align="right">{data.leadPractitionerEmail}</TableCell>
		            <TableCell align="right">{data.leadPractitionerPhone}</TableCell>
		            <TableCell align="right">{}</TableCell>
		          </TableRow>
		        </TableBody>
		        <TableHead>
		          <TableRow>
		            <TableCell>Service Involvement</TableCell>
		            <TableCell align="right" colSpan={3}>Start of Last Involvement</TableCell>
		          </TableRow>
		        </TableHead>
		        <TableBody>
		          <TableRow>
		            <TableCell>{data.serviceInvolvement}</TableCell>
		            <TableCell align="right" colSpan={3}>{data.startDateOfLastInvolvement}</TableCell>
		          </TableRow>
		        </TableBody>
		      </Table>
		  </Paper>
		);

	} else {
		return (<></>);
	}

}

const Police = ({ classes, serviceData }) => {
	const data = serviceData.POLICE;
	console.log(data)
	if (data) {
		return (
		  <Paper className={classes.paper}>
		    <Typography variant="h4">Police</Typography>
		  	<Typography>Data exists from <b>{data.coverageStartDate}</b> to <b>{data.coverageEndDate} </b> 
		  		for the <b>{data.coverageGeographicArea}</b> area.</Typography>
		      <Table className={classes.table}>
		        <TableHead>
		          <TableRow>
		            <TableCell>Contact Name</TableCell>
		            <TableCell align="right">Contact Phone</TableCell>
		            <TableCell align="right">Contact Email</TableCell>
		            <TableCell align="right">Police Station</TableCell>
		          </TableRow>
		        </TableHead>
		        <TableBody>
		          <TableRow>
		            <TableCell>{}</TableCell>
		            <TableCell align="right">{}</TableCell>
		            <TableCell align="right">{data.contactEmail}</TableCell>
		            <TableCell align="right">{data.policeStation}</TableCell>
		          </TableRow>
		        </TableBody>
		        <TableHead>
		          <TableRow>
		            <TableCell>Date of Offence</TableCell>
		            <TableCell align="right" colSpan={2}>Type of Offence</TableCell>
		            <TableCell align="right" colSpan={1}>Nature of Involvement</TableCell>
		          </TableRow>
		        </TableHead>
		        <TableBody>
		          { data.offences.map((offence, ix) => (
			          <TableRow key={ix}>
			            <TableCell>{offence.dateOfOffence}</TableCell>
			            <TableCell align="right" colSpan={2}>{offence.typeOfOffence}</TableCell>
			            <TableCell align="right" colSpan={1}>{offence.natureOfInvolvement}</TableCell>
			          </TableRow>		          	
		          ))}
		        </TableBody>
		      </Table>
		  </Paper>
		);

	} else {
		return (<></>);
	}

}

export default PersonDetails;