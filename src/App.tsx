import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FamilyContextHeader from './components/FamilyContextHeader';
import IndividualPage from './pages/IndividualPage';
import SmallAccordion from './components/Accordion';

const App: React.FC = () => {
  let command: any = {scope: document.getElementById("accordions")}
  return (
    <Router>
      <FamilyContextHeader />
      <div className="govuk-width-container">
        <main className="govuk-main-wrapper">

        <IndividualPage />

        </main>
      </div>
    </Router>
  );
}

export default App;
