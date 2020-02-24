import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { TextInputGroup, PasswordInputGroup } from '../components/InputGroups'
import LoginDetails from '../models/LoginDetails';

type LoginFunction = (loginDetails: LoginDetails) => Promise<Boolean>

interface LoginProps extends RouteComponentProps {
    login: LoginFunction
}

const LoginPage: React.FC<LoginProps> = (props) => {
  let loginDetails: LoginDetails = {userid: "", password: ""}

  return (
    <form className="LoginPage" onSubmit={(event) => tryLogin(event, props.login, loginDetails)}>
        <TextInputGroup onChange={(text: string) => loginDetails.userid = text} id="username" name="Username"/>
        <PasswordInputGroup onChange={(text: string) => loginDetails.password = text} />
        <button className="govuk-button" data-module="govuk-button" >
            Start session
        </button>
    </form>
  );
}

function tryLogin(formEvent: React.FormEvent<HTMLFormElement>, login: LoginFunction, loginDetails: LoginDetails) {
    formEvent.preventDefault()
    login(loginDetails)
}

export default LoginPage;