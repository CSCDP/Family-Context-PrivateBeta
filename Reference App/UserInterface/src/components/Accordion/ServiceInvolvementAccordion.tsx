import React from 'react';
import AccordionHeader from './AccordionHeader';
import ServiceInvolvementAccordionSummary from './ServiceInvolvementAccordionSummary';
import AccordionSection from './AccordionSection';
import AccordionSectionHeader from './AccordionSectionHeader';
import AccordionContent from './AccordionContent';
import ServiceInvolvementDetailsSummary from '../../models/ServiceInvolvementDetailsSummary';
import CardHeader from '../CardHeader';

const ServiceInvolvementAccordion: React.FC<{ serviceInvolvementDetailsSummary: ServiceInvolvementDetailsSummary, click: () => void, children: any }> = (props: { serviceInvolvementDetailsSummary: ServiceInvolvementDetailsSummary, click: () => void, children: any }) => {

  if (props.serviceInvolvementDetailsSummary.recordsAvailable) {
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
  } else {
    return (
      <div className="CardHeader">
        <CardHeader title={props.serviceInvolvementDetailsSummary.title} ></CardHeader>
        <ServiceInvolvementAccordionSummary serviceInvolvement={props.serviceInvolvementDetailsSummary} />
      </div>
    )
  }
}

export default ServiceInvolvementAccordion;