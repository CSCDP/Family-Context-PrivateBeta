import React from 'react';
import Table from './Table';
import TableBody from './TableBody';
import PersonDetails from '../models/PersonDetails';
import TitleValuePair from './TitleValuePair';

const BasicDetails: React.FC<{ personDetails: PersonDetails }> = (props: { personDetails: PersonDetails }) => {
    return (
        <div>
            <h1 className="govuk-heading-m">Details of individual</h1>

            <div className="govuk-grid-row">

                <div className="govTableDiv">
                    <Table>
                        <TableBody>
                            <TitleValuePair rowTitle="First name" rowValue={props.personDetails.firstName} format=""/>
                            <TitleValuePair rowTitle="Last name" rowValue={props.personDetails.lastName} format=""/>
                            <TitleValuePair rowTitle="Date of Birth" rowValue={props.personDetails.dateOfBirth} format=""/>
                            <TitleValuePair rowTitle="Gender" rowValue={props.personDetails.gender} format=""/>
                            <TitleValuePair rowTitle="Address" rowValue={props.personDetails.address} format=""/>
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}

export default BasicDetails;