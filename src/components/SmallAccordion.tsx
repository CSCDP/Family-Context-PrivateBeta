import React from 'react';
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
                <Accordion.Toggle as={Card.Header} eventKey='0'><span>&#43;</span></Accordion.Toggle>
                <AccordionCollapse eventKey='0'>
                    <Card.Body>
                        thingy
                        {/* <Table>
                            <TableBody rowList={rowValues}></TableBody>
                        </Table> */}
                    </Card.Body>
                </AccordionCollapse>
            </Card>
        </Accordion>
    )
}

export default SmallAccordion;
