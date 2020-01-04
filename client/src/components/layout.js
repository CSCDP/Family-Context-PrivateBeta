import React from "react";
import {Link as RouterLink} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import {AppBar, Button, Typography, Toolbar} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch, useSelector} from "react-redux";
import {signOut} from "../services/authService";
import {checkAuthState} from "../actions/auth";

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
    layout: {
        flexGrow: 1,
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        [theme.breakpoints.up(1100 + theme.spacing(6))]: {
            flexGrow: 0,
            width: 1100,
            marginLeft: "auto",
            marginRight: "auto",
        },
    },
    grow: {
        flexGrow: 1,
    },
    toolbar: {
        ...theme.mixins.toolbar,
        marginBottom: "25px"
    },
}));


const Layout = ({loginPage, children}) => {
    const classes = useStyles();
    const authentication = useSelector(state => state.authentication);
    const dispatch = useDispatch();

    const Link = loginPage ? ({children}) => (<>{children}</>) : RouterLink;

    const clickEndSession = async event => {
        const response = await signOut();
        dispatch(checkAuthState());
    }
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap className={classes.grow}>
                        <Link to="/" className={classes.headerLink}>Family Context</Link>
                    </Typography>
                    {(authentication.authenticated === "authenticated") &&
                    (<Button variant="contained" color="secondary" onClick={clickEndSession}>End session</Button>)
                    }
                </Toolbar>
            </AppBar>
            <main className={classes.layout}>
                <div className={classes.toolbar}/>
                {children}
            </main>
        </div>
    );
};

export default Layout;
