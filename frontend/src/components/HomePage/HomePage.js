import { Switch, Route, Router, useHistory, Link } from "react-router-dom";
import ChatList from '../ChatList/ChatList.js';
import CurrentChat from '../CurrentChat/CurrentChat.js';
import ProfilePage from "../ProfilePage/ProfilePage.js";
import NoChat from "../NoChat/NoChat.js";
import Api from "../API/covidAPI.js";
import { Box } from '@material-ui/core'


const HomePage = () => {
  const history = useHistory();
  return (
    <>
      <header>
        <ul className="navList">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/home/profile">Profile</Link></li>
          <li><Link to="/home/chatlist">Chat List</Link></li>
          <li><Link to="/home/API">COVID-19</Link></li>
        </ul>
      </header>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Router history={history}>
          <Switch>
            <Route exact path="/home/profile">
              <ProfilePage />
            </Route>
            <Route exact path="/home/chatlist">
              <ChatList />
              <NoChat />
            </Route>
            <Route exact path="/home/chatlist/:chatId">
              <ChatList />
              <CurrentChat />
            </Route>
            <Route exact path="/home/API">
              <Api />
            </Route>
            <Route>
              Home Page
            </Route>
          </Switch>
        </Router>
      </Box>
    </>
  );
};

export default HomePage;