import React from 'react';
import Table from './Table/Table';
import TableBody from './Table/TableBody';
import PersonDetails from '../models/PersonDetails';
import TitleValuePair from './Table/TitleValuePairTableRow';
import { formatShortDateOrString } from '../tools/FormattingTools';

const BasicDetails: React.FC<{ personDetails: PersonDetails }> = (props: { personDetails: PersonDetails }) => {

    return (
        <div>
            <h1 className="govuk-heading-m">Details of individual</h1>
            <div className="govuk-grid-row">
                <div className="govTableDiv">
                    <Table>
                        <TableBody>
                            <TitleValuePair rowTitle="First name" rowValue={props.personDetails.firstName} />
                            <TitleValuePair rowTitle="Last name" rowValue={props.personDetails.lastName} />
                            <TitleValuePair rowTitle="Date of Birth" rowValue={formatShortDateOrString(props.personDetails.dateOfBirth)} />
                            <TitleValuePair rowTitle="Gender" rowValue={props.personDetails.gender} />
                            <TitleValuePair rowTitle="Address" rowValue={props.personDetails.address} />
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}

export default BasicDetails;