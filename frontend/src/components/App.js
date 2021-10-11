import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { Box } from '@material-ui/core'
import ChatList from './ChatList/ChatList.js';
import CurrentChat from './CurrentChat/CurrentChat.js';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import ProfilePage from "./ProfilePage/ProfilePage.js";
import NoChat from "./NoChat/NoChat.js";
import Api from "./API/covidAPI.js";
import Auth from "./Authentication/authentication.js";

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
            <li><Link to="/API">COVID-19</Link></li>
          </ul>
        </header>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Switch>
            <Route exact path="/">
              Home Page
              <Auth />
            </Route>
            <Route exact path="/profile">
              <ProfilePage />
            </Route>

            <Route exact path="/chatlist">
              <ChatList />
              <NoChat />
            </Route>
            <Route exact path="/chatlist/:chatId">
              <ChatList />
              <CurrentChat />
            </Route>
            <Route exact path="/API">
              <Api />
            </Route>
            <Route>
              <h3>Page not found</h3>
            </Route>
          </Switch>
        </Box>
      </BrowserRouter>
    </ThemeProvider >
  );
}

export default App;
