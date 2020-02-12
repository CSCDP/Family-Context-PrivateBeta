import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

import DetailsBlock from "./person/detailsBlock";
import DetailsRow from "./person/detailsRow";
import ServiceSummary from "./person/serviceSummary";

import { longDateFormat as dateFormat } from "../helpers/formatters"

const useStyles = makeStyles(theme => ({

  paper: {
    maxWidth: 800,
    margin: "0 auto 16px auto",
  },
  coverage: {
    fontSize: 12,
    valign: "baseline"
  }
 }));


const PersonDetails = ({ person, services }) => {
    const classes = useStyles();

    return(
      <>
        <DetailsBlock className={classes.paper} data={person} title="Subject">
            <DetailsRow title="Name">{person.firstName} {person.lastName}</DetailsRow>
            <DetailsRow title="DOB">{dateFormat.format(person.dateOfBirth)}</DetailsRow>
            <DetailsRow title="Gender">{person.gender}</DetailsRow>
        </DetailsBlock>

          { services.map((service, ix) => (
              <ServiceSummary className={classes.paper} service={service} personId={person.id} key={service.id} />
          ))}

      </>
    );

}

export default PersonDetails;