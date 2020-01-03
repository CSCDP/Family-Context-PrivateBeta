import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

import DetailsBlock from "./person/detailsBlock";
import DetailsRow from "./person/detailsRow";
import AdultSocialCare from "./person/adultSocialCare";
import Housing from "./person/housing";
import Police from "./person/police";
import School from "./person/school";

const useStyles = makeStyles(theme => ({

  paper: {
    maxWidth: 800,
    margin: "0 auto",
    marginTop: 25,
  },
  coverage: {
    fontSize: 12,
    valign: "baseline"
  }
 }));


const PersonDetails = ({ person }) => {
    const classes = useStyles();

    return(
      <>
        <DetailsBlock className={classes.paper} data={person} title="Subject">
            <DetailsRow title="Name">{person.firstName} {person.lastName}</DetailsRow>
            {/*<DetailsRow title="DOB">{person.dateOfBirth}</DetailsRow>*/}
            <DetailsRow title="Gender">{person.gender}</DetailsRow>
            <DetailsRow title="Ethnicity">{person.ethnicity}</DetailsRow>
        </DetailsBlock>
        <AdultSocialCare className={classes.paper} serviceData={person.serviceData}/>
        <Housing className={classes.paper} serviceData={person.serviceData}/>
        <Police className={classes.paper} serviceData={person.serviceData}/>
        <School className={classes.paper} serviceData={person.serviceData}/>
      </>
    );

}

export default PersonDetails;