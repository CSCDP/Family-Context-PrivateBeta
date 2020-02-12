import { SET_PERSON_SEARCH_SUPPORTED } from "../actions/features";

const features = (state = { personSearch: false }, action) => {
    switch (action.type) {
        case SET_PERSON_SEARCH_SUPPORTED:
            return { personSearch: action.supported };
        default:
            return state;
    }
};

export default features;
