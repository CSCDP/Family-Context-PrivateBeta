import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { TextInputGroup, PasswordInputGroup } from '../components/InputGroups'

type LoginDetails = {
    username: String,
    password: String
}

const LoginPage: React.FC<RouteComponentProps> = (props) => {
  let loginDetails: LoginDetails = {username: "", password: ""}
  let loginAction: () => void = () => {props.history.push('/person')}

  return (
    <form className="LoginPage" onSubmit={(event) => login(event, loginAction, loginDetails)}>
        <TextInputGroup onChange={(text: string) => loginDetails.username = text} id="username" name="Username"/>
        <PasswordInputGroup onChange={(text: string) => loginDetails.password = text} />
        <button className="govuk-button" data-module="govuk-button">
            Start session
        </button>
    </form>
  );
}

function login(formEvent: React.FormEvent<HTMLFormElement>, loginAction: () => void, loginDetails: LoginDetails) {
    loginAction()
    formEvent.preventDefault()
}

export default LoginPage;