import React from 'react';
import ServiceInvolvementAccordion from './Accordion/ServiceInvolvementAccordion';
import ServiceInvolvementDetailsSummary from '../models/ServiceInvolvementDetailsSummary';
import TitleValuePair from '../models/TitleValuePair';
import Table from './Table/Table';
import TableBody from './Table/TableBody';
import TitleValuePairTableRow from './Table/TitleValuePairTableRow';

class ServiceInvolvement extends React.Component<{ serviceInvolvementDetailsSummaries: ServiceInvolvementDetailsSummary[] }, { serviceInvolvementDetailsData: { [id: string]: TitleValuePair[]; } }> {

    constructor(props: { serviceInvolvementDetailsSummaries: ServiceInvolvementDetailsSummary[] }) {
        super(props);

        let emptyData: { [id: string]: TitleValuePair[]; }  = {};
        props.serviceInvolvementDetailsSummaries.forEach(summary => {
            emptyData[summary.id]=[]
        });

        this.state = {
            serviceInvolvementDetailsData: emptyData
        };
    }

    click(id: string): void {
        let content: TitleValuePair[] = [{ title: "Service Involvement", value: "Current" }, { title: "Police Contact", value: "Jason Davies" }, { title: "Lead practitioner contact", value: "" }, { title: "Last offence", value: "" }, { title: "Date of offence", value: "" }, { title: "Type of offence", value: "Domestic abuse" }, { title: "Nature of involvement", value: "Victim" }]
        let newData = { ...this.state.serviceInvolvementDetailsData };
        newData[id] = content;
        this.setState({ ...this.state, serviceInvolvementDetailsData: newData });
    }

    componentDidMount() {
        var serviceInvolvementElements = document.getElementById("service-involvements");
        window.GOVUKFrontend.initAll({ scope: serviceInvolvementElements });
    }

    render() {

        return (
            <div id="service-involvements">
                <div className="govuk-accordion js-enabled" data-module="govuk-accordion" id="accordion-with-summary-sections">
                    {this.props.serviceInvolvementDetailsSummaries.map(sids =>
                        <ServiceInvolvementAccordion serviceInvolvementDetailsSummary={sids} click={() => this.click(sids.id)}>
                            <Table>
                                <TableBody>
                                    {this.state.serviceInvolvementDetailsData[sids.id] ? this.state.serviceInvolvementDetailsData[sids.id].map(element => (
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