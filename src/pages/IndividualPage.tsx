import React from 'react';
import BasicDetails from '../components/BasicDetails';
import PersonDetails from '../models/PersonDetails';
import ServiceInvolvementDetailsSummary from '../models/ServiceInvolvementDetailsSummary';
import SmallAccordion from '../components/Accordion';

const IndividualPage: React.SFC = () => {
  let person: PersonDetails = { address: "17 Lighthorne Road \n Stockport \n SK3 0QD", dateOfBirth: "10/07/2012", ethnicity: "Jedi", firstName: "Charlie", gender: "Male", id: 10, lastName: "Brooks" }
  let serviceInvolvementDetails: ServiceInvolvementDetailsSummary = { syncedDuraction: "31/10/2017-04/11/2019", syncedWith: "CIS", correctAsOf: "04/11/2019 at 23.59"}
  var accordionCommand = "{scope: document.getElementById(\"accordion-with-summary-sections\")}"
  return (
    <div className="IndividualPage">
      <a href="#" className="govuk-back-link">Back</a>
      <BasicDetails personDetails={person}></BasicDetails>
      <div className="govuk-accordion js-enabled" data-module="govuk-accordion" id="accordion-with-summary-sections">
        <SmallAccordion title="Adult Social Care" serviceInvolvement={serviceInvolvementDetails} personDetails={person}></SmallAccordion>
        <SmallAccordion title="Police" serviceInvolvement={serviceInvolvementDetails} personDetails={person}></SmallAccordion>
      </div>
      <script>window.GOVUKFrontend.initAll({accordionCommand})</script>
    </div>
  );
}

export default IndividualPage;