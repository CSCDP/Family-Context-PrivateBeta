import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import SearchDetails from '../models/SearchDetails';
import PersonDetails from '../models/PersonDetails';
import ResultsInfo from '../components/ResultsPage/ResultsInfo';
import ResultsList from '../components/ResultsPage/ResultsList';
import NavigationButtons from '../components/NavigationButtons';
import ApiClient, { RequestResult } from '../clients/ApiClient';
import DataContent from '../components/DataContent';

interface ResultsPageProps extends RouteComponentProps {
    client: ApiClient
}

type ResultsPageState = {
    result?: RequestResult<PersonDetails[]>,
    search: SearchDetails
}

class ResultsPage extends React.Component<ResultsPageProps, ResultsPageState> {
    constructor(props: ResultsPageProps) {
        super(props)

        var searchParams = new URLSearchParams(this.props.location.search)
        var searchDetails = convertParamsToSearch(searchParams)

        this.state = {search: searchDetails}
    }

    componentDidMount() {
        this.props.client.searchPerson(this.state.search).then(result => {
            var updatedResult = {...result, success: result.success && result.data != null && result.data.length > 0}

            this.setState({...this.state, result: updatedResult})
        })
    }

    navigateToPerson(id: number) {
        this.props.history.push(`person/${id}`)
    }

    render() {
        return (
          <div className="ResultsPage">
            <NavigationButtons {...this.props}/>
            <DataContent result={this.state.result} loading={<ResultsLoading/>} error={<MatchesNotFound/>}>
                <ResultsInfo search={this.state.search} matches={this.state.result?.data?.length || 0} />
                <ResultsList results={this.state.result?.data || []} navigate={(id: number) => this.navigateToPerson(id)}/>
            </DataContent>
          </div>
        )
    }
}

const ResultsLoading: React.FC = () => {
    return (
        <div className="govuk-heading-m">
            Searching for matches...
        </div>
    );
}

const MatchesNotFound: React.FC = () => {
    return (
        <div className="govuk-heading-m">
            No matches found
        </div>
    );
}

function convertParamsToSearch(params: URLSearchParams): SearchDetails {
    var dateParam = params.get('dateOfBirth')
    var dateOfBirth = (dateParam == null) ? "" : JSON.stringify(new Date(dateParam))

    return {
        firstName: params.get('firstName') || "",
        lastName: params.get('lastName') || "",
        dateOfBirth: dateOfBirth
    }
}
  
export default ResultsPage;