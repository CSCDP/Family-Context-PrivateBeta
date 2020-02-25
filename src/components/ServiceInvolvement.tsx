import React from 'react';
import ServiceInvolvementAccordion from './Accordion/ServiceInvolvementAccordion';
import PersonDetails from '../models/PersonDetails'

interface PersonParams {
    personId?: string
  }

class ServiceInvolvement extends React.Component<{ personDetails: PersonDetails}> {

    componentDidUpdate() {
        var serviceInvolvementElements = document.getElementById("service-involvements");
        window.GOVUKFrontend.initAll({ scope: serviceInvolvementElements });
    }

    render() {
        return (
            <div id="service-involvements">
                <ServiceInvolvementAccordion personDetails={this.props.personDetails} />
            </div>
        )
    }
}

export default ServiceInvolvement;