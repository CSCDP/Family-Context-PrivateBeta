import { checkState } from "../services/authService";

export const SET_LOGGED_IN = "LOGGED_IN", SET_LOGGED_OUT = "LOGGED_OUT", SET_AUTH_UNKNOWN="AUTH_UNKNOWN";
export const checkAuthState = () => async dispatch => {
  const username = await checkState();
  if (username) {
    return dispatch({
      type: SET_LOGGED_IN,
      user: username,
    });  
  } else {
    return dispatch({
      type: SET_LOGGED_OUT,
    });  
  }
}

