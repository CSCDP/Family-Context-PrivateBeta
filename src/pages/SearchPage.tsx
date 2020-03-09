import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import CaseIdSearch from '../components/SearchPage/CaseIdSearch';
import InfoSearch from '../components/SearchPage/InfoSearch';
import ApiClient from '../clients/ApiClient';

interface SearchPageProps extends RouteComponentProps {
  client: ApiClient
}

const SearchPage: React.FC<SearchPageProps> = (props) => {
    return (
      <div className="SearchPage" id="SearchPage">
        <h1>Find Service Involvement</h1>
        <InfoSearch search={(info: {[id: string]: string}) => navigateToSearch(info, props)} />
        <CaseIdSearch search={(caseId: string) => searchForCaseId(caseId, props)} />
      </div>
    );
}

function searchForCaseId(caseId: string, props: SearchPageProps) : Promise<boolean> {
    setButtonsDisabledStatus(true);

    return props.client.searchCmsId(caseId).then(response => {
      setButtonsDisabledStatus(false);

      if (response.success) {
        props.history.push({
          pathname: `person/${response.data?.id}`,
          state: { personDetailsResult: response }
        })
        return true;
      }

      return false;
    })
}

function setButtonsDisabledStatus(status: boolean) {
  var buttons = document.getElementById("SearchPage")?.getElementsByClassName("govuk-button") || new HTMLCollection();
    for (var index = 0; index < buttons.length; index++) {
      if (status) {
        buttons[index].setAttribute('disabled', 'true')
      } else {
        buttons[index].removeAttribute('disabled')
      }
    }
}

function navigateToSearch(info: {[id: string]: string}, props: RouteComponentProps) : void {
  var queryParams = ""
  for(var parameter in info) {
      queryParams += `${parameter}=${info[parameter]}&`
  }
  queryParams.substring(0, queryParams.length - 1);
  props.history.push("search?"+queryParams);
}
  
export default SearchPage;