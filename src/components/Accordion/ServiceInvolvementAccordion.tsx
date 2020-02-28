import React from 'react';
import AccordionHeader from './AccordionHeader';
import ServiceInvolvementAccordionSummary from './ServiceInvolvementAccordionSummary';
import AccordionSection from './AccordionSection';
import AccordionSectionHeader from './AccordionSectionHeader';
import AccordionContent from './AccordionContent';
import ServiceInvolvementDetailsSummary from '../../models/ServiceInvolvementDetailsSummary';

const ServiceInvolvementAccordion: React.SFC<{ serviceInvolvementDetailsSummary: ServiceInvolvementDetailsSummary, click: () => void, children: any }> = (props: { serviceInvolvementDetailsSummary: ServiceInvolvementDetailsSummary, click: () => void, children: any }) => {

    return (
      <AccordionSection>
      <AccordionSectionHeader click={() => props.click()}>
        <AccordionHeader title={props.serviceInvolvementDetailsSummary.title} ></AccordionHeader>
        <ServiceInvolvementAccordionSummary serviceInvolvement={props.serviceInvolvementDetailsSummary} />
      </AccordionSectionHeader>
      <AccordionContent>
        {props.children}
      </AccordionContent>
    </AccordionSection>
    )
}

export default ServiceInvolvementAccordion;