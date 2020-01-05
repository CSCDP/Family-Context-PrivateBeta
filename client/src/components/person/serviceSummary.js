import React, {useEffect, useState} from "react";
import {Chip, Button, Paper, Typography} from "@material-ui/core";
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

import ServiceDetails from "./serviceDetails";
import { dateTimeFormat , longDateFormat } from "../../helpers/formatters";
import PersonApi from "../../api/api/PersonApi";


const personApi = new PersonApi();


const ServiceSummary = ({ service, personId, className }) => {
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
            <Typography component="span">
                {service.title}
                { service.recordsAvailable ?
                    (<Chip label="Records Available" icon={<CheckIcon />} size="small" color="primary" variant="outlined"/>) :
                    (<Chip label="No Records Found" icon={<CloseIcon />} size="small" color="secondary" variant="outlined"/>)
                }
            </Typography>
            <Typography>Information is correct as of {dateTimeFormat.format(service.lastSynchronised)}</Typography>
            <Typography>Information is synced with XXXXXX for the duration of {
                longDateFormat.format(service.coverageStartDate)} to {longDateFormat.format(service.coverageEndDate)}
            </Typography>
            {service.recordsAvailable &&
                <Button color="primary" variant="outlined" onClick={clickHandler}>Fetch</Button>
            }
            { details && (<ServiceDetails details={details}/>)}
        </Paper>
    )
}

export default ServiceSummary