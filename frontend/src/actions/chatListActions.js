export const ADD_CHAT = "ADD_CHAT";
export const DELETE_CHAT = 'DELETE_ITEM';

export const addChat = (name) => ({
  type: ADD_CHAT,
  name,
});

export const deleteChat = (chatId) => ({
  type: DELETE_CHAT,
  chatId
})
