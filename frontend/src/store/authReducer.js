import { SET_ERROR, USER_LOGIN, USER_LOGOUT } from "../actions/userActions";

const initialState = { user: null, error: null };

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOGOUT:
      return { error: null, user: null };
    case USER_LOGIN:
      return { error: null, user: payload };
    case SET_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};

export default authReducer;
