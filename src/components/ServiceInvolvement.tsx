import React from 'react';
import ServiceInvolvementAccordion from './Accordion/ServiceInvolvementAccordion';
import ServiceInvolvementDetails from '../models/ServiceInvolvementDetails';

class ServiceInvolvement extends React.Component<{ serivceInvolvementDetails: ServiceInvolvementDetails[]}> {

    componentDidMount() {
        var serviceInvolvementElements = document.getElementById("service-involvements");
        window.GOVUKFrontend.initAll({ scope: serviceInvolvementElements });
    }

    render() {
        return (
            <div id="service-involvements">
                <div className="govuk-accordion js-enabled" data-module="govuk-accordion" id="accordion-with-summary-sections">
                    {this.props.serivceInvolvementDetails.map(serviceInvolvement => (
                        <ServiceInvolvementAccordion serivceInvolvementDetails={serviceInvolvement} />
                    ))}
                </div>
            </div>
        )
    }
}

export default ServiceInvolvement;