import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import CaseIdSearch from '../components/SearchPage/CaseIdSearch';
import InfoSearch from '../components/SearchPage/InfoSearch';
import ApiClient, { RequestResult } from '../clients/ApiClient';
import DataContent from '../components/DataContent';
import { Text } from '../tools/ConfigurableContent';
import { getHash } from '../tools/Obfuscation';

interface SearchPageProps extends RouteComponentProps {
  client: ApiClient
}

type SearchPageState = {
  searchApiSupportedResult?: RequestResult<boolean>
}

class SearchPage extends React.Component<SearchPageProps, SearchPageState> {
  constructor(props: SearchPageProps) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.props.client.isSearchApiSupported().then(result => {
      this.setState({ searchApiSupportedResult: result });
    })
  }

  render() {
      return (
        <div id="SearchPage" className="SearchPage">
          <h1>Find Service Involvement</h1>
          <div className="govuk-hint">
                    {Text.Search.Introduction}
            </div>
          <DataContent result={this.state.searchApiSupportedResult}>
            <InfoSearch search={(info: { [id: string]: string }) => navigateToSearch(info, this.props)} />
          </DataContent>
        <CaseIdSearch search={(caseId: string) => searchForCaseId(caseId, this.props)} />
      </div>
    );
  }
}

function searchForCaseId(caseId: string, props: SearchPageProps) : Promise<boolean> {
    setButtonsDisabledStatus(true);

    return props.client.getPerson(caseId, "cms").then(response => {
      setButtonsDisabledStatus(false);

      if (response.success) {
        props.history.push({
          pathname: `/person/${response.data?.id}`,
          hash: getHash({personId: response.data?.id || ""}),
          state: { personDetailsResult: response }
        })
        return true;
      }

      return false;
    })
}

function setButtonsDisabledStatus(status: boolean) {
  var buttons = document.getElementById("SearchPage")?.getElementsByClassName("govuk-button") || [];
    for (var index = 0; index < buttons.length; index++) {
      if (status) {
        buttons[index].setAttribute('disabled', 'true')
      } else {
        buttons[index].removeAttribute('disabled')
      }
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