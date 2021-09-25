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
})