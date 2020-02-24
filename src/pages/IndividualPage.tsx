import React from 'react';
import BasicDetails from '../components/BasicDetails';
import PersonDetails from '../models/PersonDetails';
import ServiceInvolvementDetailsSummary from '../models/ServiceInvolvementDetailsSummary';
import ServiceInvolvement from '../components/ServiceInvolvement';

const IndividualPage: React.SFC = () => {
  let person: PersonDetails = { address: "17 Lighthorne Road \n Stockport \n SK3 0QD", dateOfBirth: "10/07/2012", ethnicity: "Jedi", firstName: "Charlie", gender: "Male", id: 10, lastName: "Brooks" }
  let serviceInvolvementDetailsSummary: ServiceInvolvementDetailsSummary = { service:"Adult Social Care", syncedDuraction: "31/10/2017-04/11/2019", syncedWith: "CIS", correctAsOf: "04/11/2019 at 23.59"}
  return (
    <div className="IndividualPage">
      <a href="#" className="govuk-back-link">Back</a>
      <BasicDetails personDetails={person}></BasicDetails>
      <ServiceInvolvement person={person} serviceInvolvementDetailsSummary={serviceInvolvementDetailsSummary} />
    </div>
  );
}

export default IndividualPage;