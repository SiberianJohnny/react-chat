export const ADD_CHAT = "ADD_CHAT";
export const DELETE_CHAT = 'DELETE_ITEM';
export const SET_CHATS = 'SET_CHATS';

export const setChats = (data) => ({
  type: SET_CHATS,
  payload: data,
});

export const fetchChats = () => (dispatch) => {
  fetch("http://localhost:3001/chats")
    .then((response) => response.json())
    .then((data) => dispatch(setChats(data)));
};

export const addChat = (name) => (dispatch) => {
  fetch("http://localhost:3001/chats", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  })
    .then((response) => response.json())
    .then((newData) => dispatch(setChats(newData)));
};

export const deleteChat = (id) => (dispatch) => {
  fetch(`http://localhost:3001/chats?id=${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((newData) => dispatch(setChats(newData)));
};