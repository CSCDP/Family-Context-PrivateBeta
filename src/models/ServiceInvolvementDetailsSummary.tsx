interface ServiceInvolvementDetailsSummary {
    title: string,
    lastSynchronised: string,
    recordsAvailable: boolean,
    coverageStartDate: string,
    coverageEndDate: string,
    coverageExplanation?: string,
    id: string
}

export default ServiceInvolvementDetailsSummary;