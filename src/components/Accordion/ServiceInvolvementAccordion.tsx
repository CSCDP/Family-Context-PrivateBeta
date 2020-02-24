import React from 'react';
import PersonDetails from '../../models/PersonDetails';
import AccordionHeader from './AccordionHeader';
import ServiceInvolvementAccordionSummary from './ServiceInvolvementAccordionSummary';
import ServiceInvolvementDetailsSummary from '../../models/ServiceInvolvementDetailsSummary';
import BasicDetails from '../BasicDetails';
import AccordionSection from './AccordionSection';
import AccordionSectionHeader from './AccordionSectionHeader';
import AccordionContent from './AccordionContent';

const ServiceInvolvementAccordion: React.FC<{ title: string, serviceInvolvement: ServiceInvolvementDetailsSummary, personDetails: PersonDetails }> = (props: { title: string, serviceInvolvement: ServiceInvolvementDetailsSummary, personDetails: PersonDetails }) => {

  return (
    <AccordionSection>
      <AccordionSectionHeader>
        <AccordionHeader>{props.title}</AccordionHeader>
        <ServiceInvolvementAccordionSummary serviceInvolvement={props.serviceInvolvement} />
      </AccordionSectionHeader>
      <AccordionContent>
        <BasicDetails personDetails={props.personDetails}></BasicDetails>
      </AccordionContent>
    </AccordionSection>
  )
}

export default ServiceInvolvementAccordion;
