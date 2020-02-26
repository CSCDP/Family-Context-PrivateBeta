import React from 'react';

export const TextInputGroup: React.FC<{onChange: (text: string) => void, name: string, id: string}> = (props) =>{
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