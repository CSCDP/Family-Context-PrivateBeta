import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FamilyContextHeader from './components/FamilyContextHeader';
import LoginPage  from './pages/LoginPage';
import IndividualPage from './pages/IndividualPage';
import PageSpacing from './components/PageSpacing';

const App: React.FC = () => {
  return (
    <Router>
      <FamilyContextHeader />
      <PageSpacing>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/person" component={IndividualPage} />
      </PageSpacing>
    </Router>
  );
}

export default App;
