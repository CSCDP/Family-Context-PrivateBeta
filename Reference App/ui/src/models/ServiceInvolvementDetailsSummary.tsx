interface ServiceInvolvementDetailsSummary {
    title: string,
    lastSynchronised: string,
    recordsAvailable: boolean,
    coverageStartDate: string,
    coverageEndDate: string,
    coverageExplanation?: string,
    dataSource: string,
    id: string
}

export default ServiceInvolvementDetailsSummary;