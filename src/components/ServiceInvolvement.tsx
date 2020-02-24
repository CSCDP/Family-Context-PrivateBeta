import React from 'react';
import ServiceInvolvementAccordion from './Accordion/ServiceInvolvementAccordion';
import ServiceInvolvementDetailsSummary from '../models/ServiceInvolvementDetailsSummary';
import PersonDetails from '../models/PersonDetails';

declare global {
    interface Window { GOVUKFrontend: any }
}

interface ServiceInvolvementList {
    serviceInvolvementDetailsSummary: ServiceInvolvementDetailsSummary, 
    serviceDetailsContent?: PersonDetails //todo: change this
}

class ServiceInvolvement extends React.Component<{ serviceInvolvementList: ServiceInvolvementList[] }> {

    componentDidMount() {
        var govUkInitCommand = document.getElementById("service-involvements");
        window.GOVUKFrontend.initAll({ scope: govUkInitCommand });
    }

    render() {
        return (
            <div id="service-involvements">
                <div className="govuk-accordion js-enabled" data-module="govuk-accordion" id="accordion-with-summary-sections">
                    {this.props.serviceInvolvementList.map(serviceInvolvement => (
                        <ServiceInvolvementAccordion serviceInvolvement={serviceInvolvement.serviceInvolvementDetailsSummary} serviceDetailsContent={serviceInvolvement.serviceDetailsContent} />
                    ))}
                </div>
            </div>
        )
    }
}

export default ServiceInvolvement;