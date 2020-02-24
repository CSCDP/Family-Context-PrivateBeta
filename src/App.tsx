import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FamilyContextHeader from './components/FamilyContextHeader';
import LoginPage  from './pages/LoginPage';
import IndividualPage from './pages/IndividualPage';
import PageSpacing from './components/PageSpacing';
import ApiClient from './clients/ApiClient';

class App extends Component<any, any> {
  private apiClient: ApiClient;

  constructor(props: any){
    super(props);
    this.state = {isAuthenticated: false};
    this.apiClient = new ApiClient(process.env.REACT_APP_API_BASE_URL ?? "", this.updateAuthenticationStatus);
  }

private updateAuthenticationStatus = (status: boolean) => {
    if (status !== this.state.isAuthenticated) {
      this.setState({...this.state, isAuthenticated: status})
    }
  }

  componentDidMount() {
    this.apiClient.isLoggedIn()
    .then(result => this.setState({...this.state, isAuthenticated: result}))
  }

  getRoutes(isAuthenticated: boolean) {
    if (isAuthenticated) {
      return (
        <Route exact path="/person" component={IndividualPage} />
      )
    } else {
      return (
        <Route component={LoginPage} />
      );
    }
  }

  render() {
    return (
      <Router>
        <FamilyContextHeader />
          <PageSpacing>
            {this.getRoutes(this.state.isAuthenticated)}
          </PageSpacing>
      </Router>
    );
  }
}

export default App;
