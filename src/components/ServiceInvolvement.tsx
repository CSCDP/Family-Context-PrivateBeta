import React from 'react';
import ServiceInvolvementAccordion from './Accordion/ServiceInvolvementAccordion';
import ServiceInvolvementDetailsSummary from '../models/ServiceInvolvementDetailsSummary';
import PersonDetails from '../models/PersonDetails';

declare global {
    interface Window { GOVUKFrontend: any }
}

class ServiceInvolvement extends React.Component<{ serviceInvolvementDetailsSummary: ServiceInvolvementDetailsSummary, person: PersonDetails }> {

    componentDidMount() {
        var govUkInitCommand = document.getElementById("service-involvements");
        window.GOVUKFrontend.initAll({ scope: govUkInitCommand });
    }

    render() {
        return (
            <div id="service-involvements">
                <div className="govuk-accordion js-enabled" data-module="govuk-accordion" id="accordion-with-summary-sections">
                    <ServiceInvolvementAccordion title={this.props.serviceInvolvementDetailsSummary.service} serviceInvolvement={this.props.serviceInvolvementDetailsSummary} personDetails={this.props.person} />
                    <ServiceInvolvementAccordion title={this.props.serviceInvolvementDetailsSummary.service}  serviceInvolvement={this.props.serviceInvolvementDetailsSummary} personDetails={this.props.person} />
                </div>
            </div>
        )
    }
}

export default ServiceInvolvement;