import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { TextInputGroup, PasswordInputGroup } from '../components/InputGroups'
import LoginDetails from '../models/LoginDetails';
import ApiClient from '../clients/ApiClient';
import LoginFailedWarning from '../components/LoginFailedWarning';

type LoginFunction = (loginDetails: LoginDetails) => Promise<Boolean>

interface LoginProps extends RouteComponentProps {
  client: ApiClient
}

interface LoginState extends LoginDetails{
  loginFailed: boolean
}

class LoginPage extends React.Component<LoginProps, LoginState>  {

  constructor(props: LoginProps) {
    super(props);
    this.state = { loginFailed: false, userid: "", password: "" };
  }


  render() {
    return (
      <form className="LoginPage" onSubmit={(event) => this.tryLogin(event)}>
        <TextInputGroup onChange={(text: string) => this.setState({ ...this.state, userid: text })} id="username" name="Username" format="govuk-!-width-one-quarter" />
        <PasswordInputGroup onChange={(text: string) => this.setState({ ...this.state, password: text })} />
        <LoginFailedWarning loginFailed={this.state.loginFailed} />
        <button className="govuk-button" data-module="govuk-button" >
          Start session
        </button>
        <p>
        {process.env.REACT_APP_LOGIN_HELP_LINK ?
          <a href={process.env.REACT_APP_LOGIN_HELP_LINK} rel="noopener noreferrer" target="_blank">I need help signing in</a>
          : <></>
        }
        </p>
        
      </form>
    );
  }

  tryLogin(formEvent: React.FormEvent<HTMLFormElement>): void {
    formEvent.preventDefault()
    this.props.client.login(this.state).then((success: boolean) => this.setState({...this.state, loginFailed: !success}));
  }
}


export default LoginPage;