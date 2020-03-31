import React from "react";
import { RouteComponentProps } from "react-router-dom";

const BackButton: React.FC<RouteComponentProps> = (props) => {
    return (
        <a href="/#" className="govuk-back-link" onClick={(event) => goBack(event, props)}>
            Back
        </a>
    )
}

function goBack(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, props: RouteComponentProps) {
    event.preventDefault();
    props.history.goBack();
}

export default BackButton;