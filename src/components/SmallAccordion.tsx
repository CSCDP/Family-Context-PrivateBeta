import React from 'react';
import './SmallAccordion.css';
import Table from './Table';
import TableBody from './TableBody';

const SmallAccordion: React.FC<any> = (props: any) => {

    let rowValues: any = [["First name", "Charlie"], ["Last name", "Brooks"], ["Date of Birth", "10/07/2012"], ["Gender", "Male"], ["Address", "17 Lighthorne Road \n Stockport \n SK3 0QD"]];
    return (
        <div className="govuk-accordion" data-module="govuk-accordion" id="accordion-with-summary-sections">
            <div className="govuk-accordion__controls">
                <button type="button" className="govuk-accordion__open-all" aria-expanded="false">Open all<span className="govuk-visually-hidden"> sections</span></button>
            </div>
            <div className="govuk-accordion__section">
                <div className="govuk-accordion__section-header">
                    <h2 className="govuk-accordion__section-heading">
                        <button type="button" id="accordion-with-summary-sections-heading-1" aria-controls="accordion-with-summary-sections-content-1" className="govuk-accordion__section-button" aria-describedby="accordion-with-summary-sections-summary-1" aria-expanded="false">
                            School info
            </button><span className="govuk-accordion__icon" aria-hidden="true"></span></h2>
                    <div className="govuk-accordion__section-summary govuk-body" id="accordion-with-summary-sections-summary-1">
                        Information is correct as of <b>04/11/2019 at 23:59</b>
                    </div>
                </div>
                <div id="accordion-with-summary-sections-content-1" className="govuk-accordion__section-content" aria-labelledby="accordion-with-summary-sections-heading-1">
                    <Table>
                        <TableBody children={rowValues}></TableBody>
                    </Table>
                </div>
            </div>
        </div>

    )
}

export default SmallAccordion;
