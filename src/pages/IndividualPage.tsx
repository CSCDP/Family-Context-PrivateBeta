import React from 'react';
import BasicDetails from '../components/BasicDetails';
import PersonDetails from '../models/PersonDetails';
import { RouteComponentProps } from 'react-router-dom';
import ApiClient, { RequestResult } from '../clients/ApiClient';
import ServiceInvolvement from '../components/ServiceInvolvement';
import ServiceInvolvementDetailsSummary from '../models/ServiceInvolvementDetailsSummary';
import NavigationButtons from '../components/NavigationButtons';
import DataContent from '../components/DataContent';
import RelatedIndividuals from '../components/RelatedIndividuals/RelatedIndividuals';
import PersonRelationshipDetails from '../models/PersonRelationshipDetails';

interface PersonParams {
  personId?: string
}

type IndividualPageState = {
  personDetailsResult?: RequestResult<PersonDetails>,
  serviceSummariesResult?: RequestResult<ServiceInvolvementDetailsSummary[]>
  relatedIndividualsSupportedResult?: RequestResult<boolean>
  relatedIndividualsResult?: RequestResult<PersonRelationshipDetails[]>
}

class IndividualPage extends React.Component<RouteComponentProps<PersonParams> & { client: ApiClient }, IndividualPageState> {

  constructor(props: RouteComponentProps<PersonParams> & { client: ApiClient }) {
    super(props);
    this.state = {}
  }


  componentDidMount() {
    let personId = this.props.match.params.personId;
    if (personId) {
      this.props.client.getPerson(personId).then(result => {
        this.setState({...this.state, personDetailsResult: result});
      });
      this.props.client.getServiceSummaries(personId).then(result => {
        this.setState({ ...this.state, serviceSummariesResult: result });
      })
      this.props.client.isRelatedIndividualsSupported(personId).then(result => {
        this.setState({ ...this.state, relatedIndividualsSupportedResult: result });

        if (result.data && personId) {
          this.props.client.getRelatedIndividuals(personId).then(result => {
            this.setState({ ...this.state, relatedIndividualsResult: result})
          })
        }
      })
    }
  }

  render() {
    return (
      <div className="IndividualPage">
        <NavigationButtons {...this.props} />
        <DataContent result={this.state.personDetailsResult} loading={<PersonLoading />} error={<PersonNotFound />}>
          <BasicDetails personDetails={this.state.personDetailsResult?.data as PersonDetails}></BasicDetails>
          <DataContent result={this.state.serviceSummariesResult} error={<div>Error loading service involvements: status code {this.state.serviceSummariesResult?.statusCode}</div>}>
            <ServiceInvolvement summaries={this.state.serviceSummariesResult?.data as ServiceInvolvementDetailsSummary[]} client={this.props.client} />
          </DataContent>
          <hr className="govuk-section-break govuk-section-break--xl"/>
          <DataContent 
            result={this.state.relatedIndividualsSupportedResult} 
            error={<div className="govuk-heading-m">Error checking if related individuals are supported: status code {this.state.relatedIndividualsSupportedResult?.statusCode}</div>}
          >
            <DataContent result={this.state.relatedIndividualsResult} error={<RelatedIndividualsNotFound/>}>
              <RelatedIndividuals 
                person={this.state.personDetailsResult?.data as PersonDetails} 
                related={this.state.relatedIndividualsResult?.data as PersonRelationshipDetails[]}
                navigate={(personId: number) => this.props.history.push(`/person/${personId}`)}
              />
            </DataContent>
          </DataContent>
        </DataContent>
      </div>
    );
  }
}

const PersonLoading: React.FC = () => {
  return (
    <div className="govuk-heading-m">
      Searching for Service Involvements...
    </div>
  );
}


const PersonNotFound: React.FC = () => {
  return (
    <div className="govuk-heading-m">
      No matches found
    </div>
  )
}

const RelatedIndividualsNotFound: React.FC = () => {
  return (
    <div className="govuk-heading-m">
      No related individuals found
    </div>
  )
}

export default IndividualPage;