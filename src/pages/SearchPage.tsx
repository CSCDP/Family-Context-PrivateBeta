import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import CaseIdSearch from '../components/SearchPage/CaseIdSearch';
import InfoSearch from '../components/SearchPage/InfoSearch';

const SearchPage: React.FC<RouteComponentProps> = (props) => {
    return (
      <div className="SearchPage">
        <h1>Find Service Involvement</h1>
        <InfoSearch search={(info: {[id: string]: string}) => navigateToDob(info, props)} />
        <CaseIdSearch search={(caseId: string) => navigateToCaseId(caseId, props)} />
      </div>
    );
}

function navigateToCaseId(caseId: string, props: RouteComponentProps) : void {
    if (caseId !== "") {
        props.history.push(`person/${caseId}`)
    }
}

function navigateToDob(info: {[id: string]: string}, props: RouteComponentProps) : void {
  if (info["firstName"] != "" && info["familyName"] != "") {
    if (info["dob"] != "") {
      props.history.push(`search?firstName=${info["firstName"]}&lastName=${info["familyName"]}&dateOfBirth=${info["dob"]}`)
    } else {
      props.history.push(`search?firstName=${info["firstName"]}&lastName=${info["familyName"]}`)
    }
  }
}
  
export default SearchPage;