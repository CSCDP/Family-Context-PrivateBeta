import React from 'react';
import BasicDetails from '../components/BasicDetails';
import PersonDetails from '../models/PersonDetails';
import { render } from '@testing-library/react';
import { RouteComponentProps } from 'react-router-dom';
import ApiClient from '../clients/ApiClient';

interface PersonParams{
  personId?: string
}

class IndividualPage extends React.Component<RouteComponentProps<PersonParams> & {client: ApiClient}, PersonDetails> {

  constructor(props: RouteComponentProps<PersonParams> & {client: ApiClient}){
    super(props);
      this.state = {address: "loading...", ethnicity: "loading...", firstName: "loading...", gender: "loading...", id: -1, lastName:"loading..."}
  }

  componentDidMount() {
    let personId = this.props.match.params.personId
    if (personId) {
      this.props.client.getPerson(personId).then(personDetails => 
        {
          this.setState(personDetails);
        });
    }
}

  render() {
  return (
    <div className="IndividualPage">
      <a href="#" className="govuk-back-link">Back</a>
      <BasicDetails personDetails={this.state}></BasicDetails>
    </div>
  );
}
}

export default IndividualPage;