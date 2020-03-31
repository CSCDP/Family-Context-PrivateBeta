import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { TextInputGroup, PasswordInputGroup } from '../components/InputGroups'
import LoginDetails from '../models/LoginDetails';
import ApiClient from '../clients/ApiClient';
import LoginWarning from '../components/LoginWarning';
import LoginStatus from '../models/LoginStatus';
import ErrorMessage from '../components/ErrorMessage';
import { Urls } from '../tools/ConfigurableContent';

interface LoginProps extends RouteComponentProps {
  client: ApiClient
}

interface LoginState extends LoginDetails {
  loginStatus: LoginStatus,
  validationError: boolean
}

class LoginPage extends React.Component<LoginProps, LoginState>  {

  constructor(props: LoginProps) {
    super(props);
    this.state = { loginStatus: LoginStatus.Unknown, userid: "", password: "", validationError: false };
  }


  render() {
    return (
      <form 
        className={"LoginPage " + (this.state.validationError ? "govuk-form-group--error" : "")} 
        onSubmit={(event) => this.tryLogin(event)}
      >
        <ErrorMessage hidden={!this.state.validationError}>Enter your username and password</ErrorMessage>
        <TextInputGroup 
          onChange={(text: string) => this.setState({ ...this.state, userid: text })} 
          id="username" name="Username" 
          format={"govuk-!-width-one-quarter " + (this.state.validationError ? "govuk-input--error" : "")} 
        />
        <PasswordInputGroup 
          onChange={(text: string) => this.setState({ ...this.state, password: text })} 
          format={this.state.validationError ? "govuk-input--error" : ""}
        />
        <LoginWarning show={this.state.loginStatus === LoginStatus.Unauthenticated}>Username or password is incorrect</LoginWarning>
        <LoginWarning show={this.state.loginStatus === LoginStatus.Forbidden}>You’re not permitted to login. Please talk to an administrator</LoginWarning>
        <button className="govuk-button" data-module="govuk-button" >
          Start session
        </button>
        <p>
        {Urls.Links.LoginHelp ?
          <a href={Urls.Links.LoginHelp} rel="noopener noreferrer" target="_blank">I need help signing in</a>
          : <></>
        }
        </p>
        
      </form>
    );
  }

  tryLogin(formEvent: React.FormEvent<HTMLFormElement>): void {
    formEvent.preventDefault()
    if (this.state.userid === "" || this.state.password === "") {
      this.setState({...this.state, validationError: true})
    } else {
      this.setState({...this.state, validationError: false})
      this.props.client.login(this.state).then((status: LoginStatus) => this.setState({...this.state, loginStatus: status}));
    }
  }
}


export default LoginPage;