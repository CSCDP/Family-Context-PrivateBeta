import React from 'react';
import BasicDetails from '../components/BasicDetails';
import PersonDetails from '../models/PersonDetails';
import { RouteComponentProps } from 'react-router-dom';
import ApiClient from '../clients/ApiClient';
import BackButton from '../components/BackButton';
import ServiceInvolvement from '../components/ServiceInvolvement';

interface PersonParams {
  personId?: string
}

class IndividualPage extends React.Component<RouteComponentProps<PersonParams> & { client: ApiClient }, PersonDetails> {

  constructor(props: RouteComponentProps<PersonParams> & { client: ApiClient }) {
    super(props);
    this.state = { address: "loading...", ethnicity: "loading...", firstName: "loading...", gender: "loading...", id: -1, lastName: "loading...", dateOfBirth: "loading..." }
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
    return (
      <div className="IndividualPage">
        <BackButton {...this.props} />
        <BasicDetails personDetails={this.state}></BasicDetails>
        <ServiceInvolvement personDetails={this.state} />
      </div>
    );
  }
}

export default IndividualPage;