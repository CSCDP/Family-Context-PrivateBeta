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
import ServiceInvolvementCardSummary from '../ServiceInvolvementCardSummary';
import CardHeader from '../CardHeader';

const ServiceInvolvementAccordion: React.FC<{ serivceInvolvementDetails: ServiceInvolvementDetails }> = (props: { serivceInvolvementDetails: ServiceInvolvementDetails }) => {

  function RecordsFoundLabel() {
    if (props.serivceInvolvementDetails.serviceInvolvementContent) {
      return <div>RECORDS AVAILABLE</div>
    } else {
      return <div>NO RECORDS FOUND</div>
    }
  }

  // function Content() {
  //   if (true) {
  //     return <AccordionSection>
  //       <AccordionSectionHeader>
  //         <AccordionHeader title={props.serivceInvolvementDetails.serviceInvolvementDetailsSummary.service}></AccordionHeader>
  //         <ServiceInvolvementAccordionSummary serviceInvolvement={props.serivceInvolvementDetails.serviceInvolvementDetailsSummary} />
  //       </AccordionSectionHeader>
  //       <AccordionContent>
  //         <Table>
  //           <TableBody>
  //             <TitleValuePair rowTitle="First name" rowValue={props.serivceInvolvementDetails.serviceInvolvementContent?.firstName ?? ""} format="govuk-!-font-size-14" />
  //             <TitleValuePair rowTitle="Last name" rowValue={props.serivceInvolvementDetails.serviceInvolvementContent?.lastName ?? ""} format="govuk-!-font-size-14" />
  //             <TitleValuePair rowTitle="Date of Birth" rowValue={props.serivceInvolvementDetails.serviceInvolvementContent?.dateOfBirth ?? ""} format="govuk-!-font-size-14" />
  //             <TitleValuePair rowTitle="Gender" rowValue={props.serivceInvolvementDetails.serviceInvolvementContent?.gender ?? ""} format="govuk-!-font-size-14" />
  //             <TitleValuePair rowTitle="Address" rowValue={props.serivceInvolvementDetails.serviceInvolvementContent?.address ?? ""} format="govuk-!-font-size-14" />
  //           </TableBody>
  //         </Table>
  //       </AccordionContent>
  //     </AccordionSection>
  //   } else {
  //     return null;
  //   }
  // }

  return (
    <AccordionSection>
        <AccordionSectionHeader>
          <AccordionHeader title={props.serivceInvolvementDetails.serviceInvolvementDetailsSummary.title}></AccordionHeader>
          <ServiceInvolvementAccordionSummary serviceInvolvement={props.serivceInvolvementDetails.serviceInvolvementDetailsSummary} />
        </AccordionSectionHeader>
        <AccordionContent>
          <Table>
            <TableBody>
              {props.serivceInvolvementDetails.serviceInvolvementContent.map(element => (
        <TitleValuePair rowTitle={element.title} rowValue={element.value} format="govuk-!-font-size-14" />
      ))}
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionSection>
  )
}

export default ServiceInvolvementAccordion;