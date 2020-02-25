import React from 'react';
import BasicDetails from '../components/BasicDetails';
import PersonDetails from '../models/PersonDetails';
import ServiceInvolvementDetailsSummary from '../models/ServiceInvolvementDetailsSummary';
import ServiceInvolvement from '../components/ServiceInvolvement';
import ServiceInvolvementDetails from '../models/ServiceInvolvementDetails';
import { RouteComponentProps } from 'react-router-dom';
import BackButton from '../components/BackButton';
import TitleValuePair from '../models/TitleValuePair';

const IndividualPage: React.FC<RouteComponentProps> = (props) => {
  let person: PersonDetails = { address: "17 Lighthorne Road \n Stockport \n SK3 0QD", dateOfBirth: "10/07/2012", ethnicity: "Jedi", firstName: "Charlie", gender: "Male", id: 10, lastName: "Brooks" }
  let serviceInvolvementDetailsSummary2: ServiceInvolvementDetailsSummary = { title:"Police", coverageStartDate: "31/10/2017", coverageEndDate: "04/11/2019", recordsAvailable: true, id: 1, lastSynchronized: "04/11/2019"}
  let content: TitleValuePair[] = [{title: "Service Involvement", value: "Current"}, {title: "Police Contact", value: "Jason Davies"}, {title: "Lead practitioner contact", value: ""}, {title: "Last offence", value: ""}, {title: "Date of offence", value: ""}, {title: "Type of offence", value: "Domestic abuse"}, {title: "Nature of involvement", value: "Victim"}]
  let serviceInvolvementDetails: ServiceInvolvementDetails = {serviceInvolvementDetailsSummary: serviceInvolvementDetailsSummary2, serviceInvolvementContent: content}
  return (
    <div className="IndividualPage">
      {BackButton(props)}
      <BasicDetails personDetails={person}></BasicDetails>
      <ServiceInvolvement serivceInvolvementDetails={[serviceInvolvementDetails]} />
    </div>
  );
}

export default IndividualPage;