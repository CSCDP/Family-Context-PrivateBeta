import React from "react";

const LoginFailedWarning: React.FC<{ loginFailed: boolean }> = (props: { loginFailed: boolean }) => {
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