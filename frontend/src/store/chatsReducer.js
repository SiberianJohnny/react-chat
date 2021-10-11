import { ADD_CHAT, DELETE_CHAT } from "../actions/chatListActions";

const initialState = {
  chatList: [{
    id: 'id0',
    name: "Chat1"

  },
  {
    id: 'id1',
    name: "Chat2"

  },
  ]
};

const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT:
      return {
        ...state, chatList: [...state.chatList, {
          id: `id${state.chatList.length}`, name: action.name,
        },
        ],
      };
    case DELETE_CHAT:
      return { ...state, chatList: [...state.chatList.filter(el => el.id !== action.chatId)] }
    default:
      return state;
  }
};

// Шпаргалка
// const initialState = {}
// const chatReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'ADD_ITEM':
//       return { ...state, testName: [...state.testName, action.payload] }
//     case 'DELETE_ITEM':
//       return { ...state, testName: state.testName.filter(el => el !== action.payload) }
//     case 'EDIT_ITEM':
//       return { ...state, testName: action.payload }
//     default:
//       return state;
//   }
// };
export default chatsReducer;