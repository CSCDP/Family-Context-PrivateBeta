import React from 'react';
import BasicDetails from '../components/BasicDetails';
import PersonDetails from '../models/PersonDetails';
import { RouteComponentProps } from 'react-router-dom';
import ApiClient, { RequestResult } from '../clients/ApiClient';
import ServiceInvolvement from '../components/ServiceInvolvement';
import ServiceInvolvementDetailsSummary from '../models/ServiceInvolvementDetailsSummary';
import NavigationButtons from '../components/Buttons/NavigationButtons';
import DataContent from '../components/DataContent';
import RelatedIndividuals from '../components/RelatedIndividuals/RelatedIndividuals';
import PersonRelationshipDetails from '../models/PersonRelationshipDetails';
import { getHash } from '../tools/Obfuscation';

interface PersonParams {
  personId?: string
}

interface IndividualPageState {
  personDetailsResult?: RequestResult<PersonDetails>,
  serviceSummariesResult?: RequestResult<ServiceInvolvementDetailsSummary[]>
  relatedIndividualsSupportedResult?: RequestResult<boolean>
  relatedIndividualsResult?: RequestResult<PersonRelationshipDetails[]>
  validHash: boolean
}

class IndividualPage extends React.Component<RouteComponentProps<PersonParams> & { client: ApiClient }, IndividualPageState> {

  constructor(props: RouteComponentProps<PersonParams> & { client: ApiClient }) {
    super(props);

    let personId = this.props.match.params.personId;

    if (personId) {
      var validHash = this.props.location.hash === getHash({personId})
      this.state = {...this.props.location.state, validHash}
    } else {
      this.state = {...this.props.location.state, validHash: false}
    }
  }


  componentDidMount() {
    let personId = this.props.match.params.personId;
    if (personId && this.state.validHash) {
      if (!this.state.personDetailsResult) {
        this.props.client.getPerson(personId).then(result => {
          this.setState({...this.state, personDetailsResult: result});
        });
      }

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
        {
        this.state.validHash ?
        <DataContent result={this.state.personDetailsResult} loading={<PersonLoading />} error={<PersonNotFound />}>
          <BasicDetails personDetails={this.state.personDetailsResult?.data as PersonDetails}></BasicDetails>
          <DataContent 
            result={this.state.serviceSummariesResult} 
            error={<ErrorMessage errorMessage={"Error loading service involvements"} statusCode={this.state.serviceSummariesResult?.statusCode}/>}
          >
            <ServiceInvolvement summaries={this.state.serviceSummariesResult?.data as ServiceInvolvementDetailsSummary[]} client={this.props.client} personId={this.state.personDetailsResult?.data?.id as string} />
          </DataContent>
          <hr className="govuk-section-break govuk-section-break--xl"/>
          <DataContent 
            result={this.state.relatedIndividualsSupportedResult} 
            error={<ErrorMessage errorMessage={"Error checking if related individuals are supported"} statusCode={this.state.relatedIndividualsSupportedResult?.statusCode}/>}
          >
            <DataContent 
              result={this.state.relatedIndividualsResult} 
              error={<ErrorMessage errorMessage={"An error occured finding related individuals"} statusCode={this.state.relatedIndividualsResult?.statusCode}/>}
            >
              <RelatedIndividuals 
                person={this.state.personDetailsResult?.data as PersonDetails} 
                related={this.state.relatedIndividualsResult?.data as PersonRelationshipDetails[]}
                onView={(personId: string) => this.props.history.push({
                  pathname: `/person/${personId}`,
                  hash: getHash({personId: personId || ""})
                })}
              />
            </DataContent>
          </DataContent>
        </DataContent>
        : <ErrorFound />
        }
      </div>
    )
  }
}

const ErrorFound: React.FC = () => {
  return (
    <div className="govuk-grid-column-two-thirds">
      <div className="govuk-heading-l">
        Sorry, there is a problem with the service
      </div>
      <p className="govuk-heading-s">
        Try a new search again.
      </p>
    </div>
  );
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

type ErrorMessageProps = {statusCode: number | undefined, errorMessage: string}

const ErrorMessage: React.FC<ErrorMessageProps> = (props: ErrorMessageProps) => {
  return (
    <div className="govuk-heading-m">
      {props.errorMessage}: status code {props.statusCode}
    </div>
  )
}

export default IndividualPage;