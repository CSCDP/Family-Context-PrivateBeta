import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { TableRow, TableCell } from "@material-ui/core/";

const useStyles = makeStyles(theme => ({
	title: {
		fontWeight: 800,
		width: 150,
	},
	value: {
		width: "auto",
	}
}));

const DetailsRow = ({title, children}) => {
    const classes = useStyles();
    return (
      <TableRow>
        <TableCell className={classes.title}>{title}</TableCell>
        <TableCell className={classes.value}>{children}</TableCell>
      </TableRow>
    );
}

export default DetailsRow;