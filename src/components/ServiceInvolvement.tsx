import React from 'react';
import ServiceInvolvementAccordion from './Accordion/ServiceInvolvementAccordion';
import ServiceInvolvementDetailsSummary from '../models/ServiceInvolvementDetailsSummary';
import ApiClient from '../clients/ApiClient';
import BasicDetails from './BasicDetails';
import PersonDetails from '../models/PersonDetails';

interface ServiceInvolvementProps {
    summaries: ServiceInvolvementDetailsSummary[],
    client: ApiClient
}

interface ServiceInvolvementState { 
    serviceInvolvementDetailsData: { [id: string]: PersonDetails | null; } 
}

class ServiceInvolvement extends React.Component<ServiceInvolvementProps, ServiceInvolvementState>  {

    constructor(props: ServiceInvolvementProps ) {
        super(props);

        let emptyData: { [id: string]: PersonDetails | null; } = {};
        props.summaries.forEach(summary => {
            emptyData[summary.id] = null
        });

        this.state = {
            serviceInvolvementDetailsData: emptyData
        };
    }

    click(id: string): void {
        this.props.client.getPerson(id).then(result => {
            let newData = { ...this.state.serviceInvolvementDetailsData };
            newData[id] = result.success ? result.data as PersonDetails : null;
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
                    {this.props.summaries.map(summary =>
                        <ServiceInvolvementAccordion serviceInvolvementDetailsSummary={summary} key={summary.id} click={() => this.click(summary.id)}>
                            <ServiceInvolvementDisplay person={this.state.serviceInvolvementDetailsData[summary.id]} />
                        </ServiceInvolvementAccordion>)}
                </div>
            </div>
        )

    }
}

const ServiceInvolvementDisplay: React.FC<{ person: PersonDetails | null }> = (props: { person: PersonDetails | null }) => {
    return props.person ? (<BasicDetails personDetails={props.person}></BasicDetails>) : (<div> loading... </div>);
}

export default ServiceInvolvement;