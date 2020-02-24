import React from 'react';
import BasicDetails from '../components/BasicDetails';
import PersonDetails from '../models/PersonDetails';
import ServiceInvolvementDetailsSummary from '../models/ServiceInvolvementDetailsSummary';
import ServiceInvolvement from '../components/ServiceInvolvement';
import ServiceInvolvementDetails from '../models/ServiceInvolvementDetails';
import { RouteComponentProps } from 'react-router-dom';
import BackButton from '../components/BackButton';

const IndividualPage: React.FC<RouteComponentProps> = (props) => {
  let person: PersonDetails = { address: "17 Lighthorne Road \n Stockport \n SK3 0QD", dateOfBirth: "10/07/2012", ethnicity: "Jedi", firstName: "Charlie", gender: "Male", id: 10, lastName: "Brooks" }
  let serviceInvolvementDetailsSummary: ServiceInvolvementDetailsSummary = { service:"Adult Social Care", syncedDuraction: "31/10/2017-04/11/2019", syncedWith: "CIS", correctAsOf: "04/11/2019 at 23.59"}
  let serviceInvolvementDetailsSummary2: ServiceInvolvementDetailsSummary = { service:"Police", syncedDuraction: "31/10/2017-04/11/2019", syncedWith: "CIS", correctAsOf: "04/11/2019 at 23.59"}
  let serviceInvolvementDetails: ServiceInvolvementDetails = {serviceInvolvementDetailsSummary: serviceInvolvementDetailsSummary, serviceInvolvementContent: person}
  let serviceInvolvementDetails2: ServiceInvolvementDetails = {serviceInvolvementDetailsSummary: serviceInvolvementDetailsSummary2}
  return (
    <div className="IndividualPage">
      {BackButton(props)}
      <BasicDetails personDetails={person}></BasicDetails>
      <ServiceInvolvement serivceInvolvementDetails={[serviceInvolvementDetails, serviceInvolvementDetails2]} />
    </div>
  );
}

export default IndividualPage;