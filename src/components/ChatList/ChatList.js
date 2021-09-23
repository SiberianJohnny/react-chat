import * as React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import { Link } from "react-router-dom";
import { useState } from 'react';


// const chatsArr = [{
//   id: 0,
//   name: "Chat1",
//   messages: [{ text: "FirstMessage", author: 'Author1' }],

// },
// {
//   id: 1,
//   name: "Chat2",
//   messages: [{ text: "FirstMessageHereToo!", author: 'Author2' }],

// },
// ];

export default function AlignItemsList({ chats }) {

  // const [allChats, setAllChats] = useState([chatsArr]);
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {
        chats.map((chat) => (
          <ListItem key={chat.id}>
            <Link to={`/chatlist/${chat.id}`}>
              {chat.name}
            </Link>
          </ListItem>
        ))
      }
    </List>
  );
}
