import ServiceInvolvementDetailsSummary from "./ServiceInvolvementDetailsSummary";
import PersonDetails from "./PersonDetails";

interface ServiceInvolvementDetails {
    serviceInvolvementDetailsSummary: ServiceInvolvementDetailsSummary, 
    serviceInvolvementContent?: PersonDetails
}

export default ServiceInvolvementDetails