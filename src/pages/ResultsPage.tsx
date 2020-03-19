import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import SearchDetails from '../models/SearchDetails';
import ResultsInfo from '../components/ResultsPage/ResultsInfo';
import ResultsList from '../components/ResultsPage/ResultsList';
import NavigationButtons from '../components/Buttons/NavigationButtons';
import ApiClient, { RequestResult } from '../clients/ApiClient';
import DataContent from '../components/DataContent';
import SearchResponse from '../models/SearchResponse';
import PaginationDetails from '../models/PaginationDetails';
import PersonDetails from '../models/PersonDetails';
import { getHash } from '../tools/Obfuscation';

interface ResultsPageProps extends RouteComponentProps {
    client: ApiClient
}

type ResultsPageState = {
    result?: RequestResult<SearchResponse>,
}

class ResultsPage extends React.Component<ResultsPageProps, ResultsPageState> {

    componentDidMount() {
        this.props.client.searchPerson(getSearchDetails(this.props)).then(result => {
            var updatedResult = {...result, success: result.success && result.data != null && result.data.results.length > 0}

            this.setState({result: updatedResult})
        })
    }

    navigateToPerson(person: PersonDetails) {
        this.props.history.push({
            pathname: `/person/${person.id}`,
            hash: getHash({personId: person.id || ""}),
            state: { personDetailsResult: {data: person, success: true, status: 200} }
        })
    }

    navigatePage(pagination: PaginationDetails) {
        var searchDetails = getSearchDetails(this.props)

        this.props.history.push("search"
        +`?firstName=${searchDetails.firstName}`
        +`&lastName=${searchDetails.lastName}`
        +`${searchDetails.dateOfBirth ? `&dateOfBirth=${searchDetails.dateOfBirth}` : ""}`
        +`${pagination.pageNumber ? `&pageNumber=${pagination.pageNumber}` : ""}`
        +`${pagination.resultsPerPage ? `&resultsPerPage=${pagination.resultsPerPage}` : ""}`)
    }

    render() {
        return (
          <div className="ResultsPage">
            <NavigationButtons {...this.props}/>
            <DataContent result={this.state?.result} loading={<ResultsLoading/>} error={<MatchesNotFound/>}>
                <ResultsInfo search={getSearchDetails(this.props)} matches={this.state?.result?.data?.results.length || 0} />
                <ResultsList 
                  response={this.state?.result?.data || {results: []}} 
                  navigatePage={(paginationDetails: PaginationDetails) => this.navigatePage(paginationDetails)} 
                  navigateToPerson={(person: PersonDetails) => this.navigateToPerson(person)}
                />
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

function getSearchDetails(props: RouteComponentProps): SearchDetails {
    var params = new URLSearchParams(props.location.search)

    var dateParam = params.get('dateOfBirth')
    var dateOfBirth = (dateParam === null) ? "" : dateParam

    var pageNumber = Number(params.get('pageNumber'))
    var resultsPerPage = Number(params.get('resultsPerPage')) || undefined

    var paginationDetails = pageNumber ? {
        pageNumber,
        resultsPerPage
    } : undefined

    return {
        firstName: params.get('firstName') || "",
        lastName: params.get('lastName') || "",
        dateOfBirth: dateOfBirth,
        paginationDetails
    }
}
  
export default ResultsPage;