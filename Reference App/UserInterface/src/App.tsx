import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FamilyContextHeader from './components/FamilyContextHeader';
import LoginPage  from './pages/LoginPage';
import IndividualPage from './pages/IndividualPage';
import PageSpacing from './components/PageSpacing';
import ApiClient from './clients/ApiClient';
import SearchPage from './pages/SearchPage';
import ResultsPage from './pages/ResultsPage';
import PhaseBanner from './components/PhaseBanner';
import LoginStatus from './models/LoginStatus';
import { Urls } from './tools/ConfigurableContent';

class App extends Component<any, any> {
  private apiClient: ApiClient;

  constructor(props: any){
    super(props);
    this.state = {loginStatus: LoginStatus.Unknown};
    this.apiClient = new ApiClient(Urls.App.ApiUrl, this.updateAuthenticationStatus);
  }

private updateAuthenticationStatus = (status: LoginStatus) => {
    if (status !== this.state.loginStatus) {
      this.setState({...this.state, loginStatus: status})
    }
  }

  componentDidMount() {
    this.apiClient.isAuthenticated()
    .then(result => {
      if (result) 
        this.setState({...this.state, loginStatus: LoginStatus.Authorized})
    })
  }

  getRoutes(loginStatus: LoginStatus) {
    if (loginStatus === LoginStatus.Authorized) {
      return (
        <>
        <Route exact path="/" render={(props) => <SearchPage {...props} client={this.apiClient}/>} />
        <Route exact path="/search" render={(props) => <ResultsPage {...props} client={this.apiClient} key={props.location.search}/>} />
        <Route path="/person/:personId" render={(props) => <IndividualPage {...props} client={this.apiClient} key={props.match.params.personId} />} />
        </>
      )
    } else {
      return (
        <Route render={(props) => <LoginPage {...props} client={this.apiClient}/>} />
      );
    }
  }

  render() {
    return (
      <Router basename={Urls.App.Subdirectory}>
        <Route render={(props) => <FamilyContextHeader {...props} client={this.apiClient} authenticated={this.state.loginStatus === LoginStatus.Authorized} />} />
        <PhaseBanner />
          <PageSpacing>
            {this.getRoutes(this.state.loginStatus)}
          </PageSpacing>
      </Router>
    );
  }
}

export default App;
