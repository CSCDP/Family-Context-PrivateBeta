import React from "react";
import { RouteComponentProps } from "react-router-dom";
import BackButton from "./BackButton";
import SearchButton from "./SearchButton";

const NavigationButtons: React.FC<RouteComponentProps> = (props) => {
    return (
        <div className="NavigationButtons">
            <BackButton {...props} />
            <SearchButton {...props} />
        </div>
    )
}

export default NavigationButtons;