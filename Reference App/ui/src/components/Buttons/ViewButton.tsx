import React from 'react';

type ViewButtonProps = {
    action: () => void
}

const ViewButton: React.FC<ViewButtonProps> = (props) => {
    return (
        <div className="ViewButton">
            <a href="/#" className="govuk-button govuk-tag" data-module="govuk-button" onClick={(event) => {event.preventDefault(); props.action()}}>
                view
            </a>
        </div>
    )
}

export default ViewButton;