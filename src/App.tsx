import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  );
}

const Home: React.FC = () => {
  return (
    <div className="App">
      <header className="header">
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-full">
            <p className="family-context-header">Family context</p>
          </div>
        </div>
      </header>

      <div className="govuk-width-container">

        <main className="govuk-main-wrapper">

          <a href="#" className="govuk-back-link">Back</a>
          <h1 className="govuk-heading-m">Details of individual</h1>

          <div className="govuk-grid-row">

            <div className="govTableDiv">
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}

export default App;
