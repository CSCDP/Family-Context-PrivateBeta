import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import CaseIdSearch from '../components/SearchPage/CaseIdSearch';
import InfoSearch from '../components/SearchPage/InfoSearch';
import ApiClient from '../clients/ApiClient';
import SearchDetails from '../models/SearchDetails';

class SearchPage extends React.Component<RouteComponentProps & { client: ApiClient }, {searchApiSupportedResult: boolean}> {

  constructor(props: RouteComponentProps & { client: ApiClient }) {
    super(props);
    this.state = {searchApiSupportedResult: false}
  }

  componentDidMount() {
    var searchDetails: SearchDetails = { firstName: " ", lastName: " ", dateOfBirth: new Date().toISOString()};
    this.props.client.isSearchApiSupported(searchDetails).then(result => {
      if (result.data !== undefined) {
        this.setState({ searchApiSupportedResult: result.data });
      }
    })
  }

  render() {
    if (this.state.searchApiSupportedResult) {
      return (
        <div className="SearchPage">
          <h1>Find Service Involvement</h1>
          <InfoSearch search={(info: { [id: string]: string }) => navigateToSearch(info, this.props)} />
          <CaseIdSearch search={(caseId: string) => navigateToCaseId(caseId, this.props)} />
        </div>
      );
    } else {
      return (
        <div className="SearchPage">
          <h1>Find Service Involvement</h1>
          <CaseIdSearch search={(caseId: string) => navigateToCaseId(caseId, this.props)} />
        </div>
      );
    }
  }
}

function navigateToCaseId(caseId: string, props: RouteComponentProps): void {
  if (caseId !== "") {
    props.history.push(`person/${caseId}`)
  }
}

function navigateToSearch(info: { [id: string]: string }, props: RouteComponentProps): void {
  var queryParams = ""
  for (var parameter in info) {
    queryParams += `${parameter}=${info[parameter]}&`
  }
  queryParams.substring(0, queryParams.length - 1);
  props.history.push("search?" + queryParams);
}

export default SearchPage;