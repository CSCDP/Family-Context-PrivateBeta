import React from 'react';

const FamilyContextHeader: React.FC<any> = (props: any) => {
    return (
        <header className="header">
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-full">
            <p className="family-context-header">Family context</p>
          </div>
        </div>
      </header>
    )
}

export default FamilyContextHeader;
