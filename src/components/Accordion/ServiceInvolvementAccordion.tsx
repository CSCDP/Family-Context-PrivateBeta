import React from 'react';
import PersonDetails from '../../models/PersonDetails';
import AccordionHeader from './AccordionHeader';
import ServiceInvolvementAccordionSummary from './ServiceInvolvementAccordionSummary';
import ServiceInvolvementDetailsSummary from '../../models/ServiceInvolvementDetailsSummary';
import BasicDetails from '../BasicDetails';
import AccordionSection from './AccordionSection';
import AccordionSectionHeader from './AccordionSectionHeader';
import AccordionContent from './AccordionContent';

//todo: change personDetails to serviceInvolvementDetailsContent
const ServiceInvolvementAccordion: React.FC<{ serviceInvolvement: ServiceInvolvementDetailsSummary, serviceDetailsContent?: PersonDetails }> = (props: { serviceInvolvement: ServiceInvolvementDetailsSummary, serviceDetailsContent?: PersonDetails }) => {

  function RecordsFound() {
    if (props.serviceDetailsContent) {
      return true;
    } else {
      return false;
    }
  }

  function RecordsFoundLabel() {
    if (props.serviceDetailsContent) {
      return <div>RECORDS AVAILABLE</div>
    } else {
      return <div>NO RECORDS FOUND</div>
    }
  }

  function Content() {
    if (props.serviceDetailsContent) {
      return <AccordionContent>
        <BasicDetails personDetails={props.serviceDetailsContent}></BasicDetails>
      </AccordionContent>
    } else {
      return <div></div>
    }
  }

  return (
    <AccordionSection>
      <AccordionSectionHeader>
        <AccordionHeader title={props.serviceInvolvement.service} recordsFound={RecordsFound()}></AccordionHeader>
        <ServiceInvolvementAccordionSummary serviceInvolvement={props.serviceInvolvement} />
      </AccordionSectionHeader>
      <Content />
    </AccordionSection>
  )
}

export default ServiceInvolvementAccordion;