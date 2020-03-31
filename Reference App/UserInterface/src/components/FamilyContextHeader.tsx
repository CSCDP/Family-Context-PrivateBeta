import React from 'react';
import LogoutButton from './Buttons/LogoutButton';
import ApiClient from '../clients/ApiClient';
import { RouteComponentProps } from 'react-router-dom';
import { Text, Urls } from '../tools/ConfigurableContent';

interface HeaderProps extends RouteComponentProps {
  client: ApiClient,
  authenticated: boolean
}

const FamilyContextHeader: React.FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <header className="header">
      <div className="govuk-grid-row govuk-width-container">
        <div className="header-contents">
        <div className="govuk-grid-column-full header-logo-title govuk-!-width-three-quarters">
          <img
            src={Urls.Images.Logo} 
            alt={"Council Logo"}
            onError={(e) => {
              e.currentTarget.setAttribute("hidden", "true");
              e.currentTarget.setAttribute("aria-hidden", "true");
            }}
          />
          <div className="title-subtitle">
            <h2 className="family-context-header govuk-heading-m">{Text.Header.Title}</h2>
            {Text.Header.SubHeading ?
            <p>{Text.Header.SubHeading}</p>
            : <></>
          }
          </div>
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
