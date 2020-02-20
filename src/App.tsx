import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FamilyContextHeader from './components/FamilyContextHeader';
import LoginPage  from './pages/LoginPage';
import IndividualPage from './pages/IndividualPage';

const App: React.FC = () => {
  return (
    <Router>
      <FamilyContextHeader />
      <div className="govuk-width-container">
        <main className="govuk-main-wrapper">

          <Route exact path="/" component={LoginPage} />
          <Route exact path="/person" component={IndividualPage} />

        </main>
      </div>
    </Router>
  );
}

export default App;
