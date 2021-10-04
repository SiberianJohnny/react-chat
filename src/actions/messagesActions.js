export const ADD_LIST_ITEM = 'ADD_LIST_ITEM';
export const ADD_MESSAGE = 'ADD_MESSAGE';

export const addMessage = (chatId, message, author) => ({
  type: ADD_MESSAGE,
  chatId,
  message,
  author
});

export const addListItem = (chatId) => ({
  type: ADD_LIST_ITEM,
  chatId
});

export const addBotMessage = (lastMessage, chatId) => (dispatch) => {
  if (lastMessage && lastMessage[lastMessage.length - 1].author !== 'Bot') {
    const newMsg = {
      text: 'Привет, ' + lastMessage[lastMessage.length - 1].author + '. Я фиксированное сообщение.',
      author: 'Bot'
    };
    setTimeout(() => {
      dispatch(addMessage(chatId, newMsg.text, newMsg.author));
    }, 1500);
  }
}