import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { TextInputGroup, PasswordInputGroup } from '../components/InputGroups'
import LoginDetails from '../models/LoginDetails';
import ApiClient from '../clients/ApiClient';
import LoginWarning from '../components/LoginWarning';
import LoginStatus from '../models/LoginStatus';

interface LoginProps extends RouteComponentProps {
  client: ApiClient
}

interface LoginState extends LoginDetails{
  loginStatus: LoginStatus
}

class LoginPage extends React.Component<LoginProps, LoginState>  {

  constructor(props: LoginProps) {
    super(props);
    this.state = { loginStatus: LoginStatus.Unknown, userid: "", password: "" };
  }


  render() {
    return (
      <form className="LoginPage" onSubmit={(event) => this.tryLogin(event)}>
        <TextInputGroup onChange={(text: string) => this.setState({ ...this.state, userid: text })} id="username" name="Username" format="govuk-!-width-one-quarter" />
        <PasswordInputGroup onChange={(text: string) => this.setState({ ...this.state, password: text })} />
        <LoginWarning show={this.state.loginStatus === LoginStatus.Unauthorized}>Username or password is incorrect</LoginWarning>
        <LoginWarning show={this.state.loginStatus === LoginStatus.Forbidden}>You’re not permitted to login. Please talk to an administrator</LoginWarning>
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
    this.props.client.login(this.state).then((status: LoginStatus) => this.setState({...this.state, loginStatus: status}));
  }
}


export default LoginPage;