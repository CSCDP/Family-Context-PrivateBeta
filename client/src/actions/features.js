import { searchPersonSupported } from "../services/featureService";

export const SET_PERSON_SEARCH_SUPPORTED = "SET_PERSON_SEARCH_SUPPORTED";
export const checkPersonSearch = () => async dispatch => {
    const supported = await searchPersonSupported();
    return dispatch({
        type: SET_PERSON_SEARCH_SUPPORTED,
        supported: supported,
    });
}
