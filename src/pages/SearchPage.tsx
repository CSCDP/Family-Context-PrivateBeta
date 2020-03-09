import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import CaseIdSearch from '../components/SearchPage/CaseIdSearch';
import InfoSearch from '../components/SearchPage/InfoSearch';

const SearchPage: React.FC<RouteComponentProps> = (props) => {
    return (
      <div className="SearchPage">
        <h1>Find Service Involvement</h1>
        <InfoSearch search={(info: {[id: string]: string}) => navigateToSearch(info, props)} />
        <CaseIdSearch search={(caseId: string) => navigateToCaseId(caseId, props)} />
      </div>
    );
}

function navigateToCaseId(caseId: string, props: RouteComponentProps) : void {
    if (caseId !== "") {
        props.history.push(`person/${caseId}`)
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