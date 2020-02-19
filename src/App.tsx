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
  return (<div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
    </p>
      <Link to="/alternate">
        Other page
    </Link>
    </header>
  </div>
  );
}


const Alternate: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Alternate page reached through react router.
    </p>
        <Link to="/">
          Back to home
    </Link>
      </header>
    </div>
  );
}

export default App;
