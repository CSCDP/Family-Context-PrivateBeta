import React from 'react';
import AccordionHeader from './AccordionHeader';
import ServiceInvolvementAccordionSummary from './ServiceInvolvementAccordionSummary';
import AccordionSection from './AccordionSection';
import AccordionSectionHeader from './AccordionSectionHeader';
import AccordionContent from './AccordionContent';
import ServiceInvolvementDetailsSummary from '../../models/ServiceInvolvementDetailsSummary';

class ServiceInvolvementAccordion extends React.Component<{ serviceInvolvementDetailsSummary: ServiceInvolvementDetailsSummary, click: () => void }> {

  render() {
    return (
      <AccordionSection>
      <AccordionSectionHeader click={() => this.props.click()}>
        <AccordionHeader title={this.props.serviceInvolvementDetailsSummary.title} ></AccordionHeader>
        <ServiceInvolvementAccordionSummary serviceInvolvement={this.props.serviceInvolvementDetailsSummary} />
      </AccordionSectionHeader>
      <AccordionContent>
        {this.props.children}
      </AccordionContent>
    </AccordionSection>
    )
  }
}

export default ServiceInvolvementAccordion;