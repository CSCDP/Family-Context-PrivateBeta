import React from "react";

import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SvgIcon from "@material-ui/core/SvgIcon";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  headerLink: {
    color: "inherit",
    textDecoration: "none"
  },
  grow: {
    flexGrow: 1,
  },
  layout: {
      width: "auto",
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
      [theme.breakpoints.up(1100 + theme.spacing(6))]: {
          width: 1100,
          marginLeft: "auto",
          marginRight: "auto",
      },
  },
  toolbar: theme.mixins.toolbar,
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Family Context
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
          <div className={classes.toolbar} />
          {children}
      </main>
    </div>
  );
};

export default Layout;
