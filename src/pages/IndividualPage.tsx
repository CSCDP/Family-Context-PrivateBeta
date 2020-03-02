import React from 'react';
import BasicDetails from '../components/BasicDetails';
import PersonDetails from '../models/PersonDetails';
import { RouteComponentProps } from 'react-router-dom';
import ApiClient from '../clients/ApiClient';
import ServiceInvolvement from '../components/ServiceInvolvement';
import ServiceInvolvementDetailsSummary from '../models/ServiceInvolvementDetailsSummary';
import NavigationButtons from '../components/NavigationButtons';

interface PersonParams {
  personId?: string
}

type IndividualPageState = {
  personDetails: PersonDetails,
  serviceSummaries?: ServiceInvolvementDetailsSummary[]
}

class IndividualPage extends React.Component<RouteComponentProps<PersonParams> & { client: ApiClient }, IndividualPageState> {

  constructor(props: RouteComponentProps<PersonParams> & { client: ApiClient }) {
    super(props);
    this.state = {
      personDetails: { address: "loading...", ethnicity: "loading...", firstName: "loading...", gender: "loading...", id: -1, lastName: "loading...", dateOfBirth: "loading..." }
    }
  }


  componentDidMount() {
    let personId = this.props.match.params.personId
    if (personId) {
      this.props.client.getPerson(personId).then(personDetails => {
        this.setState({...this.state, personDetails});
      });

      this.props.client.getServiceSummaries(personId).then(serviceSummaries => {
        this.setState({...this.state, serviceSummaries});
      })
    }
  }

  render() {
    return (
      <div className="IndividualPage">
        <NavigationButtons {...this.props} />
        <BasicDetails personDetails={this.state.personDetails}></BasicDetails>
        {this.state.serviceSummaries? (<ServiceInvolvement summaries={this.state.serviceSummaries} client={this.props.client}/>) : (<></>)}
      </div>
    );
  }
}

export default IndividualPage;