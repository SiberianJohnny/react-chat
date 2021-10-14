import { SET_CHATS } from "../actions/chatListActions";

const initialState = null;

const chatsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CHATS:
      return payload;
    default:
      return state;
  }
};

export default chatsReducer;