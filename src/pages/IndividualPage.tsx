import React from 'react';
import BasicDetails from '../components/BasicDetails';
import PersonDetails from '../models/PersonDetails';
import SmallAccordion from '../components/SmallAccordion';

const IndividualPage: React.FC = () => {
  let person: PersonDetails = {address: "17 Lighthorne Road \n Stockport \n SK3 0QD", dateOfBirth: "10/07/2012", ethnicity: "Jedi", firstName: "Charlie", gender: "Male", id:10, lastName:"Brooks"}
  return (
    <div className="IndividualPage">
      <a href="#" className="govuk-back-link">Back</a>
      <BasicDetails personDetails={person}></BasicDetails>
      <SmallAccordion title="Titlething" personDetails={person}></SmallAccordion>
    </div>
  );
}

export default IndividualPage;