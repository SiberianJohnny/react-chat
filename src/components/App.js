import { useState, useEffect } from 'react';
import MessageList from './MessageList/MessageList.js';
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { Box } from '@material-ui/core'
import ChatList from './ChatList/ChatList.js';

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFF",
    },
    secondary: {
      main: "#0098FF",
    },
  },
});

// const chats = [
//   {
//     name: 'Chat1',
//     id: 1
//   },
//   {
//     name: 'Chat2',
//     id: 2
//   }
// ]


function App() {
  const [allChats, setAllChats] = useState([])

  const [allMessages, setAllMessages] = useState([])


  const addMsg = (e) => {
    const newMsg = {
      id: allMessages.length + 1,
      text: document.getElementById('message-input').value,
      author: 'Guest'
    };
    e.preventDefault();
    setAllMessages(prev => [...prev, newMsg])
  };


  useEffect(() => {
    if (allMessages.length > 0 && allMessages[allMessages.length - 1].author !== 'Bot') {
      const newMsg = {
        id: allMessages.length + 1,
        text: 'Привет, ' + allMessages[allMessages.length - 1].author + '. Я фиксированное сообщение.',
        author: 'Bot'
      };
      setTimeout(() => {

        setAllMessages(prev => [...prev, newMsg]);
      }, 1500);
    }
  }, [allMessages]);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <ChatList />
        <MessageList arr={allMessages} addMessage={addMsg} />
      </Box>
    </ThemeProvider >
  );
}

export default App;
