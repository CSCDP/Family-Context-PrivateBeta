import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import CaseIdSearch from '../components/SearchPage/CaseIdSearch';
import InfoSearch from '../components/SearchPage/InfoSearch';
import ApiClient, { RequestResult } from '../clients/ApiClient';
import DataContent from '../components/DataContent';

class SearchPage extends React.Component<RouteComponentProps & { client: ApiClient }, {searchApiSupportedResult?: RequestResult<boolean>}> {

  constructor(props: RouteComponentProps & { client: ApiClient }) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.props.client.isSearchApiSupported().then(result => {
      if (result.data !== undefined) {
        this.setState({ searchApiSupportedResult: result });
      }
    })
  }

  render() {
      return (
        <div className="SearchPage">
          <h1>Find Service Involvement</h1>
          <DataContent result={this.state.searchApiSupportedResult} loading="Loading search" error="An error occurred showing search by names and date of birth.">
            <InfoSearch search={(info: { [id: string]: string }) => navigateToSearch(info, this.props)} />
          </DataContent>
          <CaseIdSearch search={(caseId: string) => navigateToCaseId(caseId, this.props)} />
        </div>
      );
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