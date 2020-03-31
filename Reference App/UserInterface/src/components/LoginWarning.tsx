import React from "react";

const LoginWarning: React.FC<{ show: boolean }> = (props) => {
    if (props.show) {
        return (
            <div className="LoginWarning"> 
                <div className="govuk-warning-text"> 
                    <strong className="govuk-warning-text__text"> 
                        <span className="govuk-warning-text__assistive">Warning</span> 
                        {props.children}
                    </strong>
                </div>
            </div>
        )
    }
    return (
        <></>
    )
}

export default LoginWarning;