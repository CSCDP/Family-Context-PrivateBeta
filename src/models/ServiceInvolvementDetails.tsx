import ServiceInvolvementDetailsSummary from "./ServiceInvolvementDetailsSummary";
import TitleValuePair from "./TitleValuePair";
import PersonDetails from "./PersonDetails";

interface ServiceInvolvementDetails {
    serviceInvolvementDetailsSummary: ServiceInvolvementDetailsSummary, 
    person: PersonDetails,
    serviceInvolvementContent?: TitleValuePair[]
}

export default ServiceInvolvementDetails