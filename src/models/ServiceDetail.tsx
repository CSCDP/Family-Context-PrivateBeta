import ServiceInvolvementDetailsSummary from "./ServiceInvolvementDetailsSummary";
import Schema from "./Schema";

interface ServiceDetail {
    data?: { [id: string]: any},
    schema: Schema;
    summary: ServiceInvolvementDetailsSummary;
}

export default ServiceDetail