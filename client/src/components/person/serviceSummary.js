import React, {useEffect, useState} from "react";
import {Chip, Button, Paper, Typography, AppBar, Toolbar, Grid} from "@material-ui/core";
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

import ServiceDetails from "./serviceDetails";
import { dateTimeFormat , longDateFormat } from "../../helpers/formatters";
import PersonApi from "../../api/api/PersonApi";
import {makeStyles} from "@material-ui/core/styles";

const personApi = new PersonApi();

const useStyles = makeStyles(theme => ({
    coverage: {
        fontSize: 12,
    },
    table: {
        minWidth: 650,
    },
    grid: {
        padding: theme.spacing(2),
    }
}));

const ServiceSummary = ({ service, personId, className }) => {
    const classes = useStyles();
    const [details, setDetails] = useState();
    const [loadDetails, setLoadDetails] = useState(false);

    useEffect(() => {
            const fetchDetails = async () => {
                const details = await personApi.getPersonServiceByTypeAndId(personId, service.id);
                setDetails(details);
            }
            if (loadDetails) {
                fetchDetails();
            } else {
                setDetails(undefined)
            }
        }, [service, personId, loadDetails]);

    const clickHandler = async event => {
        setLoadDetails(!loadDetails)
    }

    return (
        <Paper className={className}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography  component="span" style={{ flex: 1 }}>{service.title} { service.recordsAvailable ?
                            (<Chip label="Records Available" icon={<CheckIcon />} size="small"/>) :
                            (<Chip label="No Records Found" icon={<CloseIcon />} size="small" color="secondary"/>)
                        }
                    </Typography>
                    {service.recordsAvailable &&
                    <Button variant="outlined" onClick={clickHandler}>{ details ? "-" : "+"}</Button>
                    }
                </Toolbar>
            </AppBar>
            <Grid container className={classes.grid}>
                <Grid item xs="12">
                    <Typography>Information is correct as of {dateTimeFormat.format(service.lastSynchronised)}</Typography>
                    <Typography>Information is synced with XXXXXX for the duration of {
                        longDateFormat.format(service.coverageStartDate)} to {
                        longDateFormat.format(service.coverageEndDate)}
                    </Typography>
                </Grid>
            { details && (<ServiceDetails details={details}/>)}
            </Grid>
        </Paper>
    )
}

export default ServiceSummary