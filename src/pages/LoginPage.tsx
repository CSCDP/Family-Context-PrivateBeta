import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

type LoginDetails = {
    username: String,
    password: String
}

const LoginPage: React.FC<RouteComponentProps> = (props) => {
  let loginDetails: LoginDetails = {username: "", password: ""}

  return (
    <form className="LoginPage" onSubmit={(event) => login(event, props, loginDetails)}>
        <div className="govuk-form-group">
        <label className="govuk-label" htmlFor="one-quarter">
            Username
        </label>
        <input 
            className="govuk-input govuk-!-width-one-quarter" 
            id="username" name="username" 
            type="text" 
            onChange={text => loginDetails.username = text.target.value}
        />
        </div>
        <div className="govuk-form-group">
        <label className="govuk-label" htmlFor="one-quarter">
            Password
        </label>
        <input 
            className="govuk-input govuk-!-width-one-quarter" 
            id="password" name="password" 
            type="password" 
            onChange={text => loginDetails.password = text.target.value}
        />
        </div>
        <button className="govuk-button" data-module="govuk-button">
            Start session
        </button>
    </form>
  );
}

function login(formEvent: React.FormEvent<HTMLFormElement>, props: RouteComponentProps, login: LoginDetails) {
    props.history.push('/person')
    formEvent.preventDefault()
}

export default LoginPage;