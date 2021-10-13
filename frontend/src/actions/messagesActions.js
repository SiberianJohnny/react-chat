export const ADD_LIST_ITEM = 'ADD_LIST_ITEM';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const SET_MESSAGES = 'SET_MESSAGES';

// export const addMessage = (chatId, message, author) => ({
//   type: ADD_MESSAGE,
//   chatId,
//   message,
//   author
// });

// export const addListItem = (chatId) => ({
//   type: ADD_LIST_ITEM,
//   chatId
// });

// export const addBotMessage = (lastMessage, chatId) => (dispatch) => {
//   if (lastMessage && lastMessage[lastMessage.length - 1].author !== 'Bot') {
//     const newMsg = {
//       text: 'Привет, ' + lastMessage[lastMessage.length - 1].author + '. Я фиксированное сообщение.',
//       author: 'Bot'
//     };
//     setTimeout(() => {
//       dispatch(addMessage(chatId, newMsg.text, newMsg.author));
//     }, 1500);
//   }
// }

export const setMessages = (data) => ({
  type: SET_MESSAGES,
  payload: data,
});

export const fetchMessages = () => (dispatch) => {
  fetch("http://localhost:3001/messages")
    .then((response) => response.json())
    .then((data) => dispatch(setMessages(data)));
};

export const addMessage = (chatId, message, author) => (dispatch) => {
  fetch("http://localhost:3001/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ chatId, message, author }),
  })
    .then((response) => response.json())
    .then((newData) => dispatch(setMessages(newData)));
};