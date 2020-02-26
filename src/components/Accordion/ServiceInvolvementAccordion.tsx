import React from 'react';
import AccordionHeader from './AccordionHeader';
import ServiceInvolvementAccordionSummary from './ServiceInvolvementAccordionSummary';
import AccordionSection from './AccordionSection';
import AccordionSectionHeader from './AccordionSectionHeader';
import AccordionContent from './AccordionContent';
import ServiceInvolvementDetailsSummary from '../../models/ServiceInvolvementDetailsSummary';

const ServiceInvolvementAccordion: React.FC<{ serviceInvolvementDetailsSummary: ServiceInvolvementDetailsSummary, click: () => void, children: any }> = (props: { serviceInvolvementDetailsSummary: ServiceInvolvementDetailsSummary, click: () => void, children: any }) => {

    return (
      <AccordionSection>
      <AccordionSectionHeader>
        <AccordionHeader title={props.serviceInvolvementDetailsSummary.title} click={props.click}></AccordionHeader>
        <ServiceInvolvementAccordionSummary serviceInvolvement={props.serviceInvolvementDetailsSummary} />
      </AccordionSectionHeader>
      <AccordionContent>
        {props.children}
      </AccordionContent>
    </AccordionSection>
    )
}

export default ServiceInvolvementAccordion;