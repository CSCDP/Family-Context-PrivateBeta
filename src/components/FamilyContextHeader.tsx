import React from 'react';
import LogoutButton from './LogoutButton';
import ApiClient from '../clients/ApiClient';
import { RouteComponentProps } from 'react-router-dom';

interface HeaderProps extends RouteComponentProps {
  client: ApiClient,
  authenticated: boolean
}

const FamilyContextHeader: React.FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <header className="header">
      <div className="govuk-grid-row govuk-width-container">
        <div className="header-contents">
        <div className="govuk-grid-column-full header-logo-title govuk-!-width-two-thirds">
          <img
            src={process.env.PUBLIC_URL + "/" + process.env.REACT_APP_LOGO_URL} 
            alt={"Council Logo"}
          />
          <p className="family-context-header govuk-heading-m">Family Context</p>
        </div>
        {props.authenticated ? 
        <LogoutButton logout={() => props.client.logout().then(isLoggedOut => {
          if (isLoggedOut) {props.history.push('/')}
          return isLoggedOut
        })}/> 
        : <></>}
        </div>
      </div>
    </header>
  )
}

export default FamilyContextHeader;
