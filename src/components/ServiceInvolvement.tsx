import React from 'react';
import ServiceInvolvementAccordion from './Accordion/ServiceInvolvementAccordion';
import ServiceInvolvementDetailsSummary from '../models/ServiceInvolvementDetailsSummary';
import ApiClient from '../clients/ApiClient';
import PersonDetails from '../models/PersonDetails';
import ServiceInvolvementDisplay from './Accordion/ServiceInvolvementDisplay';
import ServiceDetail from '../models/ServiceDetail';

interface ServiceInvolvementProps {
    summaries: ServiceInvolvementDetailsSummary[],
    client: ApiClient
}

interface ServiceInvolvementState { 
    serviceInvolvementDetailsData: { [id: string]: PersonDetails | null; } 
}

class ServiceInvolvement extends React.Component<ServiceInvolvementProps, ServiceInvolvementState>  {

    constructor(props: ServiceInvolvementProps ) {
        super(props);

        let emptyData: { [id: string]: PersonDetails | null; } = {};
        props.summaries.forEach(summary => {
            emptyData[summary.id] = null
        });

        this.state = {
            serviceInvolvementDetailsData: emptyData
        };
    }

    click(id: string): void {
        this.props.client.getPerson(id).then(personDetails => {
            let newData = { ...this.state.serviceInvolvementDetailsData };
            newData[id] = personDetails;
            this.setState({ ...this.state, serviceInvolvementDetailsData: newData });
        });
    }

    componentDidMount() {
        var serviceInvolvementElements = document.getElementById("service-involvements");
        window.GOVUKFrontend.initAll({ scope: serviceInvolvementElements });
    }

    render() {
        //let datathing: ServiceDetail = {data:{"admissionType":"historic","contact":{"email":"thisisanemail@example.com","name":"Mrs Robinson","phone":"07000000000","role":null},"schoolName":"SchoolName","serviceInvolvement":"unknown"},schema:{"properties":{"admissionType":{"title":"Admission type","type":"string","x-item-seq":4},"contact":{"description":"Generic object describing the contact information","properties":{"email":{"type":"string","x-item-seq":2},"name":{"type":"string","x-item-seq":1},"phone":{"type":"string","x-item-seq":3},"role":{"type":"string","x-item-seq":4}},"title":"Contact","type":"object","x-item-seq":2,"x-ref":"http://www.sfdl.org.uk/schemas/fc/0.0.1#Contact"},"schoolName":{"title":"School","type":"string","x-item-seq":3},"serviceInvolvement":{"pattern":"[current|historic|unknown]","title":"Service involvement","type":"string","x-item-seq":1}},"type":"object","x-ref":"http://www.sfdl.org.uk/schemas/fc/0.0.1#School"},summary:{"id":"School","title":"School","recordsAvailable":true,"coverageStartDate":"2000-09-02T00:00:00","coverageEndDate":"2009-07-22T00:00:00","lastSynchronised":"2020-02-26T00:00:00"}};
        let datathing: ServiceDetail = {
            "data": {
              "contact": {
                "email": "officer@police.uk",
                "name": "P C Jones",
                "phone": "999"
              },
              "offences": [
                {
                  "dateOfOffence": "2015-10-01",
                  "natureOfInvolvement": "Offender",
                  "typeOfOffence": "AntiSocial Behaviour"
                },
                {
                  "dateOfOffence": "2016-10-01",
                  "natureOfInvolvement": "Offender",
                  "typeOfOffence": "Possession of drugs"
                },
                {
                  "dateOfOffence": "2017-10-01",
                  "natureOfInvolvement": "Offender",
                  "typeOfOffence": "AntiSocial Behaviour"
                }
              ],
              "policeStation": "Area A",
              "serviceInvolvement": "yes"
            },
            "schema": {
              "properties": {
                "contact": {
                  "description": "Generic object describing the contact information",
                  "properties": {
                    "email": {
                      "type": "string",
                      "x-item-seq": 2
                    },
                    "name": {
                      "type": "string",
                      "x-item-seq": 1
                    },
                    "phone": {
                      "type": "string",
                      "x-item-seq": 3
                    },
                    "role": {
                      "type": "string",
                      "x-item-seq": 4
                    }
                  },
                  "title": "Contact",
                  "type": "object",
                  "x-item-seq": 2,
                  "x-ref": "http://www.sfdl.org.uk/schemas/fc/0.0.1#Contact"
                },
                "offences": {
                  "items": {
                    "properties": {
                      "dateOfOffence": {
                        "format": "date",
                        "type": "string",
                        "x-item-seq": 1,
                        "title": "Date of offence"
                      },
                      "natureOfInvolvement": {
                        "type": "string",
                        "x-item-seq": 3,
                        "title": "Nature of involvement"
                      },
                      "typeOfOffence": {
                        "type": "string",
                        "x-item-seq": 2,
                        "title": "Type of offence"
                      }
                    },
                    "type": "object",
                    "x-ref": "http://www.sfdl.org.uk/schemas/fc/0.0.1#OffenceSummary"
                  },
                  "title": "Recent offence",
                  "type": "array",
                  "x-item-seq": 4
                },
                "policeStation": {
                  "title": "Police station",
                  "type": "string",
                  "x-item-seq": 3
                },
                "serviceInvolvement": {
                  "pattern": "[yes|no]",
                  "title": "Service involvement",
                  "type": "string",
                  "x-item-seq": 1
                }
              },
              "type": "object",
              "x-ref": "http://www.sfdl.org.uk/schemas/fc/0.0.1#Police"
            },
            "summary": {
              "coverageEndDate": "2020-01-06",
              "coverageStartDate": "2000-01-01",
              "id": "Police",
              "lastSynchronised": "2020-01-06T10:00",
              "title": "Police",
              "recordsAvailable": true
            }
          }
        return (
            <div id="service-involvements">
                <div className="govuk-accordion js-enabled" data-module="govuk-accordion" id="accordion-with-summary-sections">
                    {this.props.summaries.map(summary =>
                        <ServiceInvolvementAccordion serviceInvolvementDetailsSummary={summary} click={() => this.click(summary.id)}>
                            <ServiceInvolvementDisplay details={datathing} />
                        </ServiceInvolvementAccordion>)}
                </div>
            </div>
        )

    }
}

export default ServiceInvolvement;