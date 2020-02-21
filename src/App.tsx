import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FamilyContextHeader from './components/FamilyContextHeader';
import IndividualPage from './pages/IndividualPage';
import ApiClient from './clients/ApiClient';

class App extends Component<any, any> {
  private apiClient: ApiClient = new ApiClient("https://localhost:44332")

  constructor(props: any){
    super(props);
    this.state = {isAuthenticated: false};
  }

  componentDidMount() {
    this.apiClient.isLoggedIn()
    .then(result => this.setState({...this.state, isAuthenticated: result}))
  }

  getRoutes(isAuthenticated: boolean) {
    if (isAuthenticated) {
      return (
        <Route exact path="/" component={IndividualPage} />
      )
    } else {
      return (
        <button onClick={() => {
          this.apiClient.login({userid: "id", password: "pass"})
          .then(result => this.setState({...this.state, isAuthenticated: result}))
          .catch(console.log)
        }}>Login</button>
      );
    }
  }

  render() {
    return (
      <Router>
        <FamilyContextHeader />
        <div className="govuk-width-container">
          <main className="govuk-main-wrapper">
            {this.getRoutes(this.state.isAuthenticated)}
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
