import React from 'react';
import BasicDetails from '../components/BasicDetails';
import PersonDetails from '../models/PersonDetails';
import SmallAccordion from '../components/Accordion';

const IndividualPage: React.SFC = () => {
  let person: PersonDetails = { address: "17 Lighthorne Road \n Stockport \n SK3 0QD", dateOfBirth: "10/07/2012", ethnicity: "Jedi", firstName: "Charlie", gender: "Male", id: 10, lastName: "Brooks" }
  var string = "{scope: document.getElementById(\"accordion-with-summary-sections\")}"
  return (
    <div className="IndividualPage">
      <a href="#" className="govuk-back-link">Back</a>
      <BasicDetails personDetails={person}></BasicDetails>
      <div className="govuk-accordion js-enabled" data-module="govuk-accordion" id="accordion-with-summary-sections">
        <SmallAccordion title="Titlething" summary="summary" personDetails={person}></SmallAccordion>
        <SmallAccordion title="Titlething" summary="summary" personDetails={person}></SmallAccordion>
      </div>
      <script>window.GOVUKFrontend.initAll({string})</script>
    </div>
  );
}

export default IndividualPage;