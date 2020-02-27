import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import SearchDetails from '../models/SearchDetails';
import PersonDetails from '../models/PersonDetails';
import ResultsInfo from '../components/ResultsPage/ResultsInfo';
import ResultsList from '../components/ResultsPage/ResultsList';
import NavigationButtons from '../components/NavigationButtons';

interface ResultsPageProps extends RouteComponentProps {
    search: (searchDetails: SearchDetails) => Promise<PersonDetails[]>
}

type ResultsPageState = {
    results: PersonDetails[],
    search: SearchDetails
}

class ResultsPage extends React.Component<ResultsPageProps, ResultsPageState> {
    componentDidMount() {
        var searchParams = new URLSearchParams(this.props.location.search)
        var searchDetails = convertParamsToSearch(searchParams)

        this.props.search(searchDetails).then(results => {
            this.setState({results, search: searchDetails})
        })
    }

    getMainContent() {
        if (this.state?.results == null) {
            return <h1>Loading...</h1>
        }
        
        if (this.state.results.length === 0) {
            return <h1>No matches found</h1> 
        }

        const navigate = (id: number): void => {
            this.props.history.push(`person/${id}`)
        }

        return (
            <>
                <ResultsInfo search={this.state.search} matches={this.state.results.length} />
                <ResultsList results={this.state.results} navigate={navigate}/>
            </>
        )
    }

    render() {
        return (
          <div className="ResultsPage">
            <NavigationButtons {...this.props}/>
            {this.getMainContent()}
          </div>
        )
    }
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