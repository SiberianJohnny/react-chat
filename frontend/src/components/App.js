import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import Auth from "./Authentication/authentication.js";
import SecureRoute from "./HomePage/SecureRoute/SecureRoute.js";
import HomePage from "./HomePage/HomePage.js";

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
  const history = useHistory();
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter history={history}>
        <Switch>
          <Route exact path="/" component={Auth} />
          <SecureRoute path="/home" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider >
  );
}

export default App;
