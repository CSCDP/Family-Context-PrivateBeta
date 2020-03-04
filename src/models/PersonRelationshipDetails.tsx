import PersonDetails from "./PersonDetails";

interface PersonRelationshipDetails extends PersonDetails {
    relationship: string,
    relationshipToId: string,
}

export default PersonRelationshipDetails;