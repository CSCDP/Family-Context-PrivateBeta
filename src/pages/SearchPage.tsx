import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import CaseIdSearch from '../components/CaseIdSearch';

const SearchPage: React.FC<RouteComponentProps> = (props) => {
    return (
      <div className="SearchPage">
        <h1>Find Service Involvement</h1>
        <CaseIdSearch search={(caseId: string) => navigateToCaseId(caseId, props)} />
      </div>
    );
}

function navigateToCaseId(caseId: string, props: RouteComponentProps) : void {
    if (caseId !== "") {
        props.history.push(`person/${caseId}`)
    }
}
  
export default SearchPage;