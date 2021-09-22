import * as React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import { Link } from "react-router-dom";
import { useState } from 'react';


const chatsArr = [{
  id: 0,
  name: "Chat1",
  messages: [{ text: "FirstMessage", author: 'Author1' }],

},
{
  id: 1,
  name: "Chat2",
  messages: [{ text: "FirstMessageHereToo!", author: 'Author2' }],

},
];

export default function AlignItemsList() {


  const [allChats, setAllChats] = useState([chatsArr]);

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {
        chatsArr.map((chat) => (
          <ListItem key={chat.id}>
            <Link to={`/chatlist/${chat.name}`}>
              {chat.name}
            </Link>
          </ListItem>
        ))
      }
      {/* <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
      </ListItem> */}
    </List>
  );
}
