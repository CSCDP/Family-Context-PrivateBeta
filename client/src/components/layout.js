import React from "react";

import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
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
  paper: {
    ...theme.mixins.gutters(),
    maxWidth: 800,
    minHeight: 300,
    margin: "0 auto",
  },
}));

const SFLogo = ({ styles }) => {
  return (<SvgIcon viewBox="0 0 50 20" style={styles}>
    <g id="logo-socialfinance">
      <circle id="circle" cx="10" cy="10" r="10"/>
      <rect x="22" y="1" width="18" height="18" />
    </g>
  </SvgIcon>);
};

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <SFLogo styles={{ width: "70px" }} />
          <Typography variant="h6" color="inherit" noWrap>
            Family Context
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
          <div className={classes.toolbar} />
          <Paper className={classes.paper}>
            {children}
          </Paper>
      </main>
    </div>
  );
};

export default Layout;
