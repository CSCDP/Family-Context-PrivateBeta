import React from "react";
import { RouteComponentProps } from "react-router-dom";

const SearchButton: React.FC<RouteComponentProps> = (props) => {
    function search(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault();
        props.history.push(`/`)
    }

    return (
        <button className="govuk-button" data-module="govuk-button" onClick={(event) => search(event)}>
            New search
        </button>
    )
}

export default SearchButton;
