import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Table from './components/Table';
import TableBody from './components/TableBody';

const App: React.FC = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  );
}

const Home: React.FC = () => {
  let rowValues: any = [["First name", "Charlie"], ["Last name", "Brooks"], ["Date of Birth", "10/07/2012"], ["Gender", "Male"], ["Address", "17 Lighthorne Road \n Stockport \n SK3 0QD"]];
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
              <Table>
                <TableBody rowList={rowValues}></TableBody>
              </Table>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}

export default App;
