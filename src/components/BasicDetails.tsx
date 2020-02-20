import React from 'react';
import Table from './Table';
import TableBody from './TableBody';
import PersonDetails from '../models/PersonDetails';

const BasicDetails: React.FC<{ personDetails: PersonDetails }> = (props: { personDetails: PersonDetails }) => {
    let rowValues: string[][] = [["First name", props.personDetails.firstName], ["Last name", props.personDetails.lastName], ["Date of Birth", props.personDetails.dateOfBirth], ["Gender", props.personDetails.gender], ["Address", props.personDetails.address]];
    return (
        <div>
            <h1 className="govuk-heading-m">Details of individual</h1>

            <div className="govuk-grid-row">

                <div className="govTableDiv">
                    <Table>
                        <TableBody children={rowValues}></TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}

export default BasicDetails;