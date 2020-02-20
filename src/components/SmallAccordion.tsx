import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SmallAccordion.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import AccordionCollapse from 'react-bootstrap/AccordionCollapse';
import Table from './Table';
import TableBody from './TableBody';

const SmallAccordion: React.FC<any> = (props: any) => {
    
  let rowValues: any = [["First name", "Charlie"], ["Last name", "Brooks"], ["Date of Birth", "10/07/2012"], ["Gender", "Male"], ["Address", "17 Lighthorne Road \n Stockport \n SK3 0QD"]];
    return (
        <Accordion>
            <Card>
                <div>
                <div className="govuk-grid-column-three-quarters">
                <h3 className="govuk-heading-m govuk-!-width-one-half govuk-!-margin-top-2">govuk-heading-m</h3>
                <p className="govuk-body-s">Information is correct as of <b>04/11/2019 at 23:59</b></p>
                </div>
                <div className="govuk-grid-column-one-quarter">
                <Accordion.Toggle className="toggle" as={Card.Header} eventKey='0'><span>&#43;</span></Accordion.Toggle>
                </div>
                </div>
                <AccordionCollapse eventKey='0'>
                    <Card.Body>
                        <Table>
                            <TableBody rowList={rowValues}></TableBody>
                        </Table> 
                    </Card.Body>
                </AccordionCollapse>
            </Card>
        </Accordion>
    )
}

export default SmallAccordion;
