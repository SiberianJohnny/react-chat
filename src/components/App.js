import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { Box } from '@material-ui/core'
import ChatList from './ChatList/ChatList.js';
import CurrentChat from './CurrentChat/CurrentChat.js';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import ProfilePage from "./ProfilePage/ProfilePage.js";
import { useState } from 'react';
import NoChat from "./NoChat/NoChat.js";

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

const chatsArr = [{
  id: 0,
  name: "Chat1",
  user: 'Author1',
  messages: [{ text: "FirstMessage", author: 'Author1' }],

},
{
  id: 1,
  name: "Chat2",
  user: 'Author2',
  messages: [{ text: "FirstMessageHereToo!", author: 'Author2' }],

},
];

function App() {

  const [allChats, setAllChats] = useState(chatsArr);

  const someFunc = (newData) => {
    setAllChats(prev => [...prev, newData])
    console.log(newData)
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <header>
          <ul className="navList">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/chatlist">Chat List</Link></li>
          </ul>
        </header>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Switch>
            <Route exact path="/">
              Home Page
            </Route>
            <Route exact path="/profile">
              <ProfilePage />
            </Route>

            <Route exact path="/chatlist">
              <ChatList
                chats={allChats}
              />
              <NoChat />
            </Route>
            <Route exact path="/chatlist/:chatId">
              <ChatList
                chats={allChats}
              />
              <CurrentChat chats={allChats} someProp={someFunc} />
            </Route>
          </Switch>
        </Box>
      </BrowserRouter>
    </ThemeProvider >
  );
}

export default App;
