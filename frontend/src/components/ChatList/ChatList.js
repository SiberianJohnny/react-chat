import * as React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Button, Dialog, DialogTitle, TextField } from '@material-ui/core';

import { Link } from "react-router-dom";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addChat, deleteChat } from '../../actions/chatListActions';
import { addListItem } from '../../actions/messagesActions';



export default function AlignItemsList({ }) {

  const [visible, setVisible] = useState(false);
  const [newChatName, setNewChatName] = useState("");

  const allChats = useSelector((state) => state.chatsReducer.chatList)
  const dispatch = useDispatch();

  const handleClose = () => setVisible(false);
  const handleOpen = () => setVisible(true);
  const handleChange = (e) => setNewChatName(e.target.value);

  const onAddChat = () => {
    dispatch(addChat(newChatName));
    dispatch(addListItem('id' + allChats.length))
    setNewChatName("");
    handleClose();
  };

  const onDeleteChat = (e) => {
    dispatch(deleteChat(e.target.value))
  }

  const { user } = useSelector(state => state.authReducer)

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {
        allChats.map((chat, index) => (
          <ListItem key={index}>
            <Link to={`/home/chatlist/${chat.id}`}>
              {chat.name}
            </Link>
            <button onClick={onDeleteChat} value={chat.id}>X</button>
          </ListItem>
        ))
      }
      <Button className="add-chat" onClick={handleOpen}>
        New Chat
      </Button>

      <Dialog open={visible} onClose={handleClose}>
        <DialogTitle>Please enter a name for new chat</DialogTitle>
        <TextField value={newChatName} onChange={handleChange} />
        <Button onClick={onAddChat} disabled={!newChatName}>
          Submit
        </Button>
      </Dialog>

    </List >
  );
}
