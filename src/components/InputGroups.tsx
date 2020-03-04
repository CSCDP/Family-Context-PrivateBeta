import React from 'react';

export const TextInputGroup: React.FC<{onChange: (text: string) => void, name: string, id: string}> = (props) =>{
    return(
    <div className="govuk-form-group">
    <label className="govuk-label" htmlFor="one-half">
        <b>{props.name}</b>
    </label>
    <input 
        className="govuk-input govuk-!-width-one-half" 
        id={props.id} name={props.name} 
        type="text" 
        onChange={event => props.onChange(event.target.value)}
    />
    </div>
    );
}

export const DobInputGroup: React.FC<{onChange: (dob: string) => void}> = (props) =>{
    var day = "";
    var month = "";
    var year = "";

    function updateDob() {
        props.onChange(day != "" && month != "" && year != "" ? month + "%2F" + day + "%2F" + year : "");
    }

    return(
        <>
            <label className="govuk-label" htmlFor="one-quarter">
                <b>Day of birth (optional)</b>
            </label>
            <div className="row">
                <div className="column" id="Day">
                    <input
                        className="govuk-input"
                        id="Day" name="Day"
                        type="text"
                        onChange={event => {
                            day = event.target.value;
                            updateDob();
                        }}
                    />
                </div>
                <div className="column" id="Month">
                    <input
                        className="govuk-input"
                        id="Month" name="Month"
                        type="text"
                        onChange={event => {
                            month = event.target.value;
                            updateDob();
                        }}
                    />
                </div>
                <div className="column" id="Year">
                    <input
                        className="govuk-input"
                        id="Year" name="Year"
                        type="text"
                        onChange={event => {
                            year = event.target.value;
                            updateDob();
                        }}
                    />
                </div>
            </div>
        </>
        );
}

export const UsernameInputGroup: React.FC<{onChange: (text: string) => void, name: string, id: string}> = (props) =>{
    return(
    <div className="govuk-form-group">
    <label className="govuk-label" htmlFor="one-quarter">
        <b>{props.name}</b>
    </label>
    <input 
        className="govuk-input govuk-!-width-one-quarter" 
        id={props.id} name={props.name} 
        type="text" 
        onChange={event => props.onChange(event.target.value)}
    />
    </div>
    );
}

export const PasswordInputGroup: React.FC<{onChange: (text: string) => void}> = (props) => {
    return(
        <div className="govuk-form-group">
    <label className="govuk-label" htmlFor="one-quarter">
        <b>Password</b>
    </label>
    <input 
        className="govuk-input govuk-!-width-one-quarter" 
        id="password" name="password" 
        type="password" 
        onChange={event => props.onChange(event.target.value)}
    />
    </div>
    );
}