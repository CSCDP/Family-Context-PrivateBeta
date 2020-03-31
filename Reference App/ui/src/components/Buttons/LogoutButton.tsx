import React from "react";

type LogoutProps = {
    logout: () => Promise<Boolean>
}

const LogoutButton: React.FC<LogoutProps> = (props: LogoutProps) => {
    var logout = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        var logoutButton = event.currentTarget;

        logoutButton.setAttribute('disabled', 'true');
        props.logout().then(hasLoggedOut => {
            if (!hasLoggedOut) {
                logoutButton.removeAttribute('disabled')
            }
        })
    }

    return (
        <div className="LogoutButton">
            <button className="govuk-button govuk-button--secondary" data-module="govuk-button" onClick={logout}>
                End session
            </button>
        </div>

    )
}

export default LogoutButton;