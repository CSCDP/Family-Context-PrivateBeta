import React from 'react';
import Table from '../components/Table';
import TableBody from '../components/TableBody';

const Home: React.FC = () => {
    let rowValues: any = [["First name", "Charlie"], ["Last name", "Brooks"], ["Date of Birth", "10/07/2012"], ["Gender", "Male"], ["Address", "17 Lighthorne Road \n Stockport \n SK3 0QD"]];
    return (
      <div className="IndividualPage">
        <a href="#" className="govuk-back-link">Back</a>
        <h1 className="govuk-heading-m">Details of individual</h1>
  
        <div className="govuk-grid-row">
  
          <div className="govTableDiv">
            <Table>
              <TableBody rowList={rowValues}></TableBody>
            </Table>
          </div>
        </div>
      </div>
    );
  }

  export default Home;