import React from 'react';
import AccordionHeader from './AccordionHeader';
import ServiceInvolvementAccordionSummary from './ServiceInvolvementAccordionSummary';
import AccordionSection from './AccordionSection';
import AccordionSectionHeader from './AccordionSectionHeader';
import AccordionContent from './AccordionContent';
import Table from '../Table/Table';
import TableBody from '../Table/TableBody';
import TitleValuePair from '../Table/TitleValuePair';
import ServiceInvolvementDetails from '../../models/ServiceInvolvementDetails';

const ServiceInvolvementAccordion: React.FC<{ serivceInvolvementDetails: ServiceInvolvementDetails }> = (props: { serivceInvolvementDetails: ServiceInvolvementDetails }) => {

  function RecordsFound() {
    if (props.serivceInvolvementDetails.serviceInvolvementContent) {
      return true;
    } else {
      return false;
    }
  }

  function RecordsFoundLabel() {
    if (props.serivceInvolvementDetails.serviceInvolvementContent) {
      return <div>RECORDS AVAILABLE</div>
    } else {
      return <div>NO RECORDS FOUND</div>
    }
  }

  function Content() {
    if (props.serivceInvolvementDetails.serviceInvolvementContent) {
      return <AccordionContent>
        <Table>
          <TableBody>
            <TitleValuePair rowTitle="First name" rowValue={props.serivceInvolvementDetails.serviceInvolvementContent.firstName} format="govuk-!-font-size-14" />
            <TitleValuePair rowTitle="Last name" rowValue={props.serivceInvolvementDetails.serviceInvolvementContent.lastName} format="govuk-!-font-size-14" />
            <TitleValuePair rowTitle="Date of Birth" rowValue={props.serivceInvolvementDetails.serviceInvolvementContent.dateOfBirth} format="govuk-!-font-size-14" />
            <TitleValuePair rowTitle="Gender" rowValue={props.serivceInvolvementDetails.serviceInvolvementContent.gender} format="govuk-!-font-size-14" />
            <TitleValuePair rowTitle="Address" rowValue={props.serivceInvolvementDetails.serviceInvolvementContent.address} format="govuk-!-font-size-14" />
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
        <AccordionHeader title={props.serivceInvolvementDetails.serviceInvolvementDetailsSummary.service}  recordsFound={RecordsFound()}></AccordionHeader>
        <ServiceInvolvementAccordionSummary serviceInvolvement={props.serivceInvolvementDetails.serviceInvolvementDetailsSummary} />
      </AccordionSectionHeader>
      <Content />
    </AccordionSection>
  )
}

export default ServiceInvolvementAccordion;