import { SET_CHATS } from "../actions/chatListActions";

const initialState = null;

// const chatsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_CHAT:
//       return {
//         ...state, chatList: [...state.chatList, {
//           id: `id${state.chatList.length}`, name: action.name,
//         },
//         ],
//       };
//     case DELETE_CHAT:
//       return { ...state, chatList: [...state.chatList.filter(el => el.id !== action.chatId)] }
//     default:
//       return state;
//   }
// };

const chatsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CHATS:
      return payload;
    default:
      return state;
  }
};

export default chatsReducer;