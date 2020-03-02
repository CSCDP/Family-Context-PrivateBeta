import React from "react";
import { RouteComponentProps } from "react-router-dom";
import BackButton from "./BackButton";
import SearchButton from "./SearchButton";

const LoginFailedWarning: React.SFC<{ loginFailed: boolean }> = (props: { loginFailed: boolean }) => {
    if (props.loginFailed) {
        return (
            <div className="LoginFailureWarning">
                <div className="govuk-warning-text">
                    <strong className="govuk-warning-text__text">
                        <span className="govuk-warning-text__assistive">Warning</span>
                        Username or password is incorrect
                    </strong>
                </div>
            </div>
        )
    }
    return (
        <></>
    )
}

export default LoginFailedWarning;