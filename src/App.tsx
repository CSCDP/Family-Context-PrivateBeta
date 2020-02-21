import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FamilyContextHeader from './components/FamilyContextHeader';
import IndividualPage from './pages/IndividualPage';
import GovSpacing from './components/GovSpacing';

const App: React.FC = () => {
  return (
    <Router>
      <FamilyContextHeader />
        <GovSpacing>
          <Route exact path="/" component={IndividualPage} />
          </GovSpacing>
    </Router>
  );
}

export default App;
