import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { Box } from '@material-ui/core'
import ChatList from './ChatList/ChatList.js';
import CurrentChat from './CurrentChat/CurrentChat.js';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import ProfilePage from "./ProfilePage/ProfilePage.js";
import { useState } from 'react';

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

function App() {

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
        <Switch>
          <Route exact path="/">
            Home Page
          </Route>
          <Route exact path="/profile"><ProfilePage /></Route>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Route path="/chatlist">
              <ChatList />
            </Route>
            <Route path="/chatlist/:chatId">
              <CurrentChat />
            </Route>
          </Box>
          <Route>
            <h3>Page not found</h3>
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider >
  );
}

export default App;
