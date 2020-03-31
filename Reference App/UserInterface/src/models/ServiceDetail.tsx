import ServiceInvolvementDetailsSummary from "./ServiceInvolvementDetailsSummary";
import { ObjectSchema } from "./Schema";

interface ServiceDetail {
    data: { [id: string]: any},
    schema: ObjectSchema,
    summary: ServiceInvolvementDetailsSummary;
}

export default ServiceDetail
