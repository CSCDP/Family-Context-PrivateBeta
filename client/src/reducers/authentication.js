import { SET_LOGGED_IN, SET_LOGGED_OUT, SET_AUTH_UNKNOWN} from "../actions/auth";

const authentication = (state = { auth: "UNKNOWN" }, action) => {
  switch (action.type) {
    case SET_LOGGED_OUT:
      return { authenticated: "unauthenticated", user: null };
    case SET_LOGGED_IN:
      return { authenticated: "authenticated", user: action.user };
    case SET_AUTH_UNKNOWN:
      return { authenticated: "unknown", user: null };
    default:
      return state;
  }
};

export default authentication;
