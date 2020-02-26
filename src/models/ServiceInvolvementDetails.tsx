import ServiceInvolvementDetailsSummary from "./ServiceInvolvementDetailsSummary";
import PersonDetails from "./PersonDetails";

interface ServiceInvolvementDetails {
    serviceInvolvementDetailsSummary: ServiceInvolvementDetailsSummary, 
    person?: PersonDetails
}

export default ServiceInvolvementDetails