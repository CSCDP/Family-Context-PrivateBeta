import React from 'react';
import PersonDetails from '../../models/PersonDetails';
import AccordionHeader from './AccordionHeader';
import ServiceInvolvementAccordionSummary from './ServiceInvolvementAccordionSummary';
import ServiceInvolvementDetailsSummary from '../../models/ServiceInvolvementDetailsSummary';
import AccordionSection from './AccordionSection';
import AccordionSectionHeader from './AccordionSectionHeader';
import AccordionContent from './AccordionContent';
import Table from '../Table/Table';
import TableBody from '../Table/TableBody';
import TitleValuePair from '../Table/TitleValuePair';

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
        <Table>
          <TableBody>
            <TitleValuePair rowTitle="First name" rowValue={props.serviceDetailsContent.firstName} format="govuk-!-font-size-14" />
            <TitleValuePair rowTitle="Last name" rowValue={props.serviceDetailsContent.lastName} format="govuk-!-font-size-14" />
            <TitleValuePair rowTitle="Date of Birth" rowValue={props.serviceDetailsContent.dateOfBirth} format="govuk-!-font-size-14" />
            <TitleValuePair rowTitle="Gender" rowValue={props.serviceDetailsContent.gender} format="govuk-!-font-size-14" />
            <TitleValuePair rowTitle="Address" rowValue={props.serviceDetailsContent.address} format="govuk-!-font-size-14" />
          </TableBody>
        </Table>
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