import React from 'react';
import Table from './Table';
import TableBody from './TableBody';
import TitleValuePair from './TitleValuePair';
import PersonDetails from '../models/PersonDetails';

const AccordionContent: React.FC<{personDetails: PersonDetails}> = (props: {personDetails: PersonDetails}) => {
    return (
        <div id="accordion-with-summary-sections-content-1" className="govuk-accordion__section-content" aria-labelledby="accordion-with-summary-sections-heading-1">
        <Table>
          <TableBody>
            <TitleValuePair rowTitle="First name" rowValue={props.personDetails.firstName} format="govuk-!-font-size-14" />
            <TitleValuePair rowTitle="Last name" rowValue={props.personDetails.lastName} format="govuk-!-font-size-14" />
            <TitleValuePair rowTitle="Date of Birth" rowValue={props.personDetails.dateOfBirth} format="govuk-!-font-size-14" />
            <TitleValuePair rowTitle="Gender" rowValue={props.personDetails.gender} format="govuk-!-font-size-14" />
            <TitleValuePair rowTitle="Address" rowValue={props.personDetails.address} format="govuk-!-font-size-14" />
          </TableBody>
        </Table>
      </div>
    )
}

export default AccordionContent;