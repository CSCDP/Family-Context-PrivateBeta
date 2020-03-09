import React from 'react';

const FamilyContextHeader: React.FC = () => {
  return (
    <header className="header">
      <div className="govuk-grid-row govuk-width-container">
        <div className="govuk-grid-column-full header-contents">
          <img
            src={process.env.PUBLIC_URL + "/" + process.env.REACT_APP_LOGO_URL} 
            alt={"Council Logo"}
          />
          <p className="family-context-header govuk-heading-m">Family Context</p>
        </div>
      </div>
    </header>
  )
}

export default FamilyContextHeader;
