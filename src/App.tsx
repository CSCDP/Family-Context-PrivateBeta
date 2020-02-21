import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FamilyContextHeader from './components/FamilyContextHeader';
import IndividualPage from './pages/IndividualPage';
import PageSpacing from './components/PageSpacing';

const App: React.FC = () => {
  let command: any = {scope: document.getElementById("accordions")}
  return (
    <Router>
      <FamilyContextHeader />
        <PageSpacing>
          <Route exact path="/" component={IndividualPage} />
        </PageSpacing>
    </Router>
  );
}

export default App;
