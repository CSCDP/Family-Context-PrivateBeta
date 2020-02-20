import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FamilyContextHeader from './components/FamilyContextHeader';
import IndividualPage from './pages/IndividualPage';

const App: React.FC = () => {
  return (
    <Router>
      <FamilyContextHeader />
      <div className="govuk-width-container">
        <main className="govuk-main-wrapper">

          <Route exact path="/" component={IndividualPage} />

        </main>
      </div>
    </Router>
  );
}

export default App;
