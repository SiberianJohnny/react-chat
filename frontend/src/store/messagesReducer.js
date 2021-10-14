import { ADD_LIST_ITEM, ADD_MESSAGE, SET_MESSAGES } from "../actions/messagesActions";

const initialState = null;

const messagesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_MESSAGES:
      return payload;
    default:
      return state;
  }
};

export default messagesReducer;