import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route } from 'react-router-dom';

function App() {
  return (
    <div>
    <Route exact path="/" component={Home} />
    <Route path="/alternate" component={Alternate} />
    </div>
  );
}

function Home(){
  return (    <div className="App">
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


function Alternate(){
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
