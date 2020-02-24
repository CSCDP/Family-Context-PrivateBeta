import React from 'react';
import BasicDetails from '../components/BasicDetails';
import PersonDetails from '../models/PersonDetails';
import { RouteComponentProps } from 'react-router-dom';
import ApiClient from '../clients/ApiClient';
import BackButton from '../components/BackButton';
import ServiceInvolvementDetailsSummary from '../models/ServiceInvolvementDetailsSummary';
import ServiceInvolvement from '../components/ServiceInvolvement';
import ServiceInvolvementDetails from '../models/ServiceInvolvementDetails';

interface PersonParams {
  personId?: string
}

class IndividualPage extends React.Component<RouteComponentProps<PersonParams> & { client: ApiClient }, PersonDetails> {

  constructor(props: RouteComponentProps<PersonParams> & { client: ApiClient }) {
    super(props);
    this.state = { address: "loading...", ethnicity: "loading...", firstName: "loading...", gender: "loading...", id: -1, lastName: "loading..." }
  }


  componentDidMount() {
    let personId = this.props.match.params.personId
    if (personId) {
      this.props.client.getPerson(personId).then(personDetails => {
        this.setState(personDetails);
      });
    }
  }

  render() {
    let serviceInvolvementDetailsSummary: ServiceInvolvementDetailsSummary = { service: "Adult Social Care", syncedDuraction: "31/10/2017-04/11/2019", syncedWith: "CIS", correctAsOf: "04/11/2019 at 23.59" }
    let serviceInvolvementDetails: ServiceInvolvementDetails = { serviceInvolvementDetailsSummary: serviceInvolvementDetailsSummary, serviceInvolvementContent: this.state }

    return (
      <div className="IndividualPage">
        <BackButton {...this.props} />
        <BasicDetails personDetails={this.state}></BasicDetails>
        <ServiceInvolvement serivceInvolvementDetails={serviceInvolvementDetails} />
      </div>
    );
  }
}

export default IndividualPage;