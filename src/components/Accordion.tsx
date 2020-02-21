import React from 'react';
import PersonDetails from '../models/PersonDetails';
import AccordionHeader from './AccordionHeader';
import AccordionSummary from './AccordionSummary';
import ServiceInvolvementDetailsSummary from '../models/ServiceInvolvementDetailsSummary';
import AccordionContent from './AccordionContent';

const Accordion: React.FC<{ title: string, serviceInvolvement: ServiceInvolvementDetailsSummary, personDetails?: PersonDetails }> = (props: { title: string, serviceInvolvement: ServiceInvolvementDetailsSummary, personDetails?: PersonDetails }) => {

  function RecordsFound() {
    if (props.personDetails) {
      return true;
    } else {
      return false;
    }
  }

  function RecordsFoundLabel() {
    if (props.personDetails) {
      return <div>RECORDS AVAILABLE</div>
    } else {
      return <div>NO RECORDS FOUND</div>
    }
  }

  function Content() {
    if (props.personDetails) {
      return <AccordionContent personDetails={props.personDetails} />
    } else {
      return <div></div>
    }
  }

  return (
    <div className="govuk-accordion__section">
      <div className="govuk-accordion__section-header">
        <AccordionHeader title={props.title} recordsFound={RecordsFound()} />
        <RecordsFoundLabel />
        <AccordionSummary serviceInvolvement={props.serviceInvolvement} />
      </div>
      <Content />
    </div>
  )
}

export default Accordion;
