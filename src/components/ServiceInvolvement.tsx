import React from 'react';
import ServiceInvolvementAccordion from './Accordion/ServiceInvolvementAccordion';
import ServiceInvolvementDetailsSummary from '../models/ServiceInvolvementDetailsSummary';
import ApiClient from '../clients/ApiClient';
import BasicDetails from './BasicDetails';
import PersonDetails from '../models/PersonDetails';

interface serviceInvolvement {
    serviceInvolvementDetailsSummaries: ServiceInvolvementDetailsSummary[],
    client: ApiClient
}

class ServiceInvolvement extends React.Component<{ serviceInvolvement: serviceInvolvement }, { serviceInvolvementDetailsData: { [id: string]: PersonDetails | null; } }>  {

    constructor(props: { serviceInvolvement: serviceInvolvement }) {
        super(props);

        let emptyData: { [id: string]: PersonDetails | null; } = {};
        props.serviceInvolvement.serviceInvolvementDetailsSummaries.forEach(summary => {
            emptyData[summary.id] = null
        });

        this.state = {
            serviceInvolvementDetailsData: emptyData
        };
    }

    click(id: string): void {
        this.props.serviceInvolvement.client.getPerson(id).then(personDetails => {
            let newData = { ...this.state.serviceInvolvementDetailsData };
            newData[id] = personDetails;
            this.setState({ ...this.state, serviceInvolvementDetailsData: newData });
        });
    }

    componentDidMount() {
        var serviceInvolvementElements = document.getElementById("service-involvements");
        window.GOVUKFrontend.initAll({ scope: serviceInvolvementElements });
    }

    render() {
        return (
            <div id="service-involvements">
                <div className="govuk-accordion js-enabled" data-module="govuk-accordion" id="accordion-with-summary-sections">
                    {this.props.serviceInvolvement.serviceInvolvementDetailsSummaries.map(summary =>
                        <ServiceInvolvementAccordion serviceInvolvementDetailsSummary={summary} click={() => this.click(summary.id)}>
                            <ServiceInvolvementDisplay person={this.state.serviceInvolvementDetailsData[summary.id]} />
                        </ServiceInvolvementAccordion>)}
                </div>
            </div>
        )

    }
}

const ServiceInvolvementDisplay: React.SFC<{ person: PersonDetails | null }> = (props: { person: PersonDetails | null }) => {
    return props.person ? (<BasicDetails personDetails={props.person}></BasicDetails>) : (<div> loading... </div>);
}

export default ServiceInvolvement;