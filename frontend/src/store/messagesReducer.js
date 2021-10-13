import { ADD_LIST_ITEM, ADD_MESSAGE, SET_MESSAGES } from "../actions/messagesActions";

const initialState = null;

// const initialState = {
//   messageList: {
//     id0: [{ id: 'id00', text: "FirstMessage", author: 'Author1' }],
//     id1: [{ id: 'id10', text: "FirstMessageHereToo!", author: 'Author2' }]
//   },
// };

const messagesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // case ADD_MESSAGE: {
    //   const currentList = state.messageList[action.chatId] || [];
    //   const author = action.author || 'Me'
    //   return {
    //     ...state, messageList: {
    //       ...state.messageList, [action.chatId]: [...currentList, {
    //         id: `${action.chatId}${currentList.length}`, text: `${action.message}`, author: author
    //       },
    //       ],
    //     },
    //   };
    // }
    // case ADD_LIST_ITEM: {
    //   return {
    //     ...state, messageList: { ...state.messageList, [action.chatId]: [] }
    //   }
    // }
    case SET_MESSAGES:
      return payload;
    default:
      return state;
  }
};

export default messagesReducer;