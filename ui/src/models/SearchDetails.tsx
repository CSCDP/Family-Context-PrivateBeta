import PaginationDetails from "./PaginationDetails";

interface SearchDetails {
    firstName: string,
    lastName: string,
    dateOfBirth: string,
    paginationDetails?: PaginationDetails
}

export default SearchDetails