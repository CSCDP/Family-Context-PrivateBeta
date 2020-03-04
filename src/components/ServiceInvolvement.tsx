import React from 'react';
import ServiceInvolvementAccordion from './Accordion/ServiceInvolvementAccordion';
import ServiceInvolvementDetailsSummary from '../models/ServiceInvolvementDetailsSummary';
import ApiClient, { RequestResult } from '../clients/ApiClient';
import ServiceDetail from '../models/ServiceDetail';
import DataContent from './DataContent';
import ServiceInvolvementDisplay from './ServiceInvolvementContent/ServiceInvolvementDisplay';

interface ServiceInvolvementProps {
    summaries: ServiceInvolvementDetailsSummary[],
    client: ApiClient,
    personId: string
}

interface ServiceInvolvementState { 
    serviceInvolvementDetailsData: { [id: string]: RequestResult<ServiceDetail> | null; } 
}

class ServiceInvolvement extends React.Component<ServiceInvolvementProps, ServiceInvolvementState>  {

    constructor(props: ServiceInvolvementProps ) {
        super(props);

        let emptyData: { [id: string]: RequestResult<ServiceDetail> | null; } = {};
        props.summaries.forEach(summary => {
            emptyData[summary.id] = null
        });

        this.state = {
            serviceInvolvementDetailsData: emptyData
        };
    }

    click(serviceId: string): void {
      if (this.state.serviceInvolvementDetailsData[serviceId] === null) {
        this.props.client.getServiceDetail(this.props.personId, serviceId).then(result => {
          let newData = { ...this.state.serviceInvolvementDetailsData };
          newData[serviceId] = result as RequestResult<ServiceDetail>;
          this.setState({ ...this.state, serviceInvolvementDetailsData: newData });
        });
      }
    }

    componentDidMount() {
      if(this.props.summaries.some(summary => summary.recordsAvailable)) {
        var serviceInvolvementElements = document.getElementById("service-involvements");
        window.GOVUKFrontend.initAll({ scope: serviceInvolvementElements });
      }
    }

    render() {
        return (
            <div id="service-involvements">
                <div className="govuk-accordion js-enabled" data-module="govuk-accordion" id="accordion-with-summary-sections">
                    {this.props.summaries.map(summary =>
                        <ServiceInvolvementAccordion serviceInvolvementDetailsSummary={summary} key={summary.id} click={() => this.click(summary.id)}>
                          <DataContent result={this.state.serviceInvolvementDetailsData[summary.id]} loading={<ServiceDetailsLoading />} error={<ServiceDetailsNotFound />}>
                            <ServiceInvolvementDisplay details={this.state.serviceInvolvementDetailsData[summary.id]?.data as ServiceDetail} />
                          </DataContent>
                        </ServiceInvolvementAccordion>)}
                </div>
            </div>
        )
    }
}

const ServiceDetailsLoading: React.FC = () => {
  return (
    <div className="govuk-heading-m">
      Searching for Service Involvement Details...
    </div>
  );
}

const ServiceDetailsNotFound: React.FC = () => {
  return (
    <div className="govuk-heading-m">
      No details found
    </div>
  )
}

export default ServiceInvolvement;