import React from 'react';
import ServiceInvolvementAccordion from './Accordion/ServiceInvolvementAccordion';
import PersonDetails from '../models/PersonDetails'
import ServiceInvolvementDetailsSummary from '../models/ServiceInvolvementDetailsSummary';
import TitleValuePair from '../models/TitleValuePair';
import Table from './Table/Table';
import TableBody from './Table/TableBody';
import TitleValuePairTableRow from './Table/TitleValuePairTableRow';

interface dictionary {
    [id: string] : TitleValuePair[]
}

class ServiceInvolvement extends React.Component<{ serviceInvolvementDetailsSummaries: ServiceInvolvementDetailsSummary[] }, { serviceInvolvementDetailsData: dictionary }> {

    constructor(props: { serviceInvolvementDetailsSummaries: ServiceInvolvementDetailsSummary[] }) {
        super(props);
        this.state = { serviceInvolvementDetailsData: {} };
        this.props.serviceInvolvementDetailsSummaries.map(sid => {
            this.setState({ ...this.state.serviceInvolvementDetailsData, sid.id = [] });
        });
        
    }

    click(newOpen: boolean): void {
        this.setState({ ...this.state, open: newOpen });
    }

    componentDidUpdate() {
        var serviceInvolvementElements = document.getElementById("service-involvements");
        window.GOVUKFrontend.initAll({ scope: serviceInvolvementElements });
    }

    render() {
            let serviceInvolvementDetailsSummary: ServiceInvolvementDetailsSummary = { title: "Police", coverageStartDate: "31/10/2017", coverageEndDate: "04/11/2019", recordsAvailable: true, id: "1", lastSynchronized: "04/11/2019" }
            let content: TitleValuePair[] = [{ title: "Service Involvement", value: "Current" }, { title: "Police Contact", value: "Jason Davies" }, { title: "Lead practitioner contact", value: "" }, { title: "Last offence", value: "" }, { title: "Date of offence", value: "" }, { title: "Type of offence", value: "Domestic abuse" }, { title: "Nature of involvement", value: "Victim" }]
            return (
                <div id="service-involvements">
                    <div className="govuk-accordion js-enabled" data-module="govuk-accordion" id="accordion-with-summary-sections">
                    {this.props.serviceInvolvementDetailsSummaries.map(sids=>
                        <ServiceInvolvementAccordion serviceInvolvementDetailsSummary={sids} click={() => this.click(!this.state.open)}>
                            <Table>
                                <TableBody>
                                    {this.state.thing[sids.id] ? content.map(element => (
                                        <TitleValuePairTableRow rowTitle={element.title} rowValue={element.value} format="govuk-!-font-size-14" />
                                    )) : null}
                                </TableBody>
                            </Table>
                        </ServiceInvolvementAccordion>)}
                    </div>
                </div>
            )

    }
}

export default ServiceInvolvement;