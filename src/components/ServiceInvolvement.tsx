import React from 'react';
import ServiceInvolvementAccordion from './Accordion/ServiceInvolvementAccordion';
import PersonDetails from '../models/PersonDetails'
import ServiceInvolvementDetailsSummary from '../models/ServiceInvolvementDetailsSummary';
import TitleValuePair from '../models/TitleValuePair';
import Table from './Table/Table';
import TableBody from './Table/TableBody';
import TitleValuePairTableRow from './Table/TitleValuePairTableRow';

class ServiceInvolvement extends React.Component<{ personDetails: PersonDetails }, { open: boolean }> {

    constructor(props: { personDetails: PersonDetails }) {
        super(props);
        this.state = { open: false };
    }

    click(newOpen: boolean): void {
        this.setState({ ...this.state, open: newOpen });
    }

    componentDidUpdate() {
        var serviceInvolvementElements = document.getElementById("service-involvements");
        window.GOVUKFrontend.initAll({ scope: serviceInvolvementElements });
    }

    render() {

        if (this.props.personDetails.id > 0) {
            let serviceInvolvementDetailsSummary: ServiceInvolvementDetailsSummary = { title: "Police", coverageStartDate: "31/10/2017", coverageEndDate: "04/11/2019", recordsAvailable: true, id: "1", lastSynchronized: "04/11/2019" }
            let content: TitleValuePair[] = [{ title: "Service Involvement", value: "Current" }, { title: "Police Contact", value: "Jason Davies" }, { title: "Lead practitioner contact", value: "" }, { title: "Last offence", value: "" }, { title: "Date of offence", value: "" }, { title: "Type of offence", value: "Domestic abuse" }, { title: "Nature of involvement", value: "Victim" }]
            return (
                <div id="service-involvements">
                    <div className="govuk-accordion js-enabled" data-module="govuk-accordion" id="accordion-with-summary-sections">
                        
                        <ServiceInvolvementAccordion serviceInvolvementDetailsSummary={serviceInvolvementDetailsSummary} click={() => this.click(!this.state.open)}>
                            <Table>
                                <TableBody>
                                    {content.map(element => (
                                        <TitleValuePairTableRow rowTitle={element.title} rowValue={element.value} format="govuk-!-font-size-14" />
                                    ))}
                                </TableBody>
                            </Table>
                        </ServiceInvolvementAccordion>
                    </div>
                </div>
            )
        } else {
            return null;
        }

    }
}

export default ServiceInvolvement;