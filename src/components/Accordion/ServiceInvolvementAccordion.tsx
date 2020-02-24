import React from 'react';
import AccordionHeader from './AccordionHeader';
import ServiceInvolvementAccordionSummary from './ServiceInvolvementAccordionSummary';
import BasicDetails from '../BasicDetails';
import AccordionSection from './AccordionSection';
import AccordionSectionHeader from './AccordionSectionHeader';
import AccordionContent from './AccordionContent';
import ServiceInvolvementDetails from '../../models/ServiceInvolvementDetails';

const ServiceInvolvementAccordion: React.FC<{ serivceInvolvementDetails: ServiceInvolvementDetails }> = (props: { serivceInvolvementDetails: ServiceInvolvementDetails }) => {

  return (
    <AccordionSection>
      <AccordionSectionHeader>
        <AccordionHeader>{props.serivceInvolvementDetails.serviceInvolvementDetailsSummary.service}</AccordionHeader>
        <ServiceInvolvementAccordionSummary serviceInvolvement={props.serivceInvolvementDetails.serviceInvolvementDetailsSummary} />
      </AccordionSectionHeader>
      <AccordionContent>
        <BasicDetails personDetails={props.serivceInvolvementDetails.serviceInvolvementContent}></BasicDetails>
      </AccordionContent>
    </AccordionSection>
  )
}

export default ServiceInvolvementAccordion;
