import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {AppBar, Toolbar, Paper, Table, TableBody, Typography} from "@material-ui/core";

import { shortDateFormat as dateFormat } from "../../helpers/formatters";

const useStyles = makeStyles(theme => ({
  coverage: {
  	fontSize: 12,
  },
  table: {
    minWidth: 650,
  },  
 }));

const DetailsBlock = ({ className, data, children, title }) => {
    const classes = useStyles();

    let coverage = "";
    if (data.coverageStartDate || data.coverageEndDate || data.coverageGeographicArea) {
    	coverage = "Data exists"
    	if (data.coverageStartDate) {
    		coverage += " from " + dateFormat.format(data.coverageStartDate);
    	}
    	if (data.coverageEndDate) {
    		coverage += " to " + dateFormat.format(data.coverageEndDate);
    	}
    	if (data.coverageGeographicArea) {
    		coverage += " for the " + data.coverageGeographicArea + " area";
    	}
    }

    return (
      <Paper className={className}>
          <AppBar position="static" color="primary">
            <Toolbar>
              <Typography style={{ flex: 1 }}>{title}</Typography>
              <Typography className={classes.coverage}>{coverage}</Typography>
            </Toolbar>
          </AppBar>
          <Table className={classes.table}>
            <TableBody>
              { children }
            </TableBody>
          </Table>
      </Paper>
    );

}

export default DetailsBlock;