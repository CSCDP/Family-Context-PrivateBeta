import PaginationInfo from "./PaginationInfo";
import PersonDetails from "./PersonDetails";

interface SearchResponse {
    paginationInfo?: PaginationInfo,
    results: PersonDetails[]
}

export default SearchResponse