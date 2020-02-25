import React from 'react';
import AccordionHeader from './AccordionHeader';
import ServiceInvolvementAccordionSummary from './ServiceInvolvementAccordionSummary';
import AccordionSection from './AccordionSection';
import AccordionSectionHeader from './AccordionSectionHeader';
import AccordionContent from './AccordionContent';
import Table from '../Table/Table';
import TableBody from '../Table/TableBody';
import TitleValuePairTableRow from '../Table/TitleValuePairTableRow';
import ServiceInvolvementDetailsSummary from '../../models/ServiceInvolvementDetailsSummary';
import PersonDetails from '../../models/PersonDetails';
import TitleValuePair from '../../models/TitleValuePair';

const ServiceInvolvementAccordion: React.FC<{ personDetails: PersonDetails }> = (props: { personDetails: PersonDetails }) => {

  function Content() {
    if (props.personDetails.id > 0) {
      let serviceInvolvementDetailsSummary: ServiceInvolvementDetailsSummary = { title: "Police", coverageStartDate: "31/10/2017", coverageEndDate: "04/11/2019", recordsAvailable: true, id: 1, lastSynchronized: "04/11/2019" }
      return <div className="govuk-accordion js-enabled" data-module="govuk-accordion" id="accordion-with-summary-sections">
        <AccordionSection>
          <AccordionSectionHeader>
            <AccordionHeader title={serviceInvolvementDetailsSummary.title}></AccordionHeader>
            <ServiceInvolvementAccordionSummary serviceInvolvement={serviceInvolvementDetailsSummary} />
          </AccordionSectionHeader>
          <TableContent recordsAvailable={serviceInvolvementDetailsSummary.recordsAvailable} ></TableContent>
        </AccordionSection>
      </div>
    } else {
      return null;
    }
  }

  function TableContent(props: { recordsAvailable: boolean; }) {
    const recordsAvailable = props.recordsAvailable;
    if (recordsAvailable) {
      let content: TitleValuePair[] = [{ title: "Service Involvement", value: "Current" }, { title: "Police Contact", value: "Jason Davies" }, { title: "Lead practitioner contact", value: "" }, { title: "Last offence", value: "" }, { title: "Date of offence", value: "" }, { title: "Type of offence", value: "Domestic abuse" }, { title: "Nature of involvement", value: "Victim" }]
      return <AccordionContent>
        <Table>
          <TableBody>
            {content.map(element => (
              <TitleValuePairTableRow rowTitle={element.title} rowValue={element.value} format="govuk-!-font-size-14" />
            ))}
          </TableBody>
        </Table>
      </AccordionContent>
    } else {
      return null;
    }
  }

  return (
    <Content />
  )
}

export default ServiceInvolvementAccordion;