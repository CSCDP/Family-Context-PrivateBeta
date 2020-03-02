import ServiceInvolvementDetailsSummary from "./ServiceInvolvementDetailsSummary";

interface ServiceDetail {
    data: { [id: string]: any},
    schema: { [id: string]: any};
    summary: ServiceInvolvementDetailsSummary;
}

export default ServiceDetail