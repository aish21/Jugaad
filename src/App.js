import './App.css';
import { Switch, Route } from "react-router-dom";

// Import Pages
import Template from "./Pages/Template";
import Landing from "./Pages/Landing";
import Login from "./Pages/login";
import Signup from "./Pages/signup";
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <Template>
      <Switch>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/Homepage">
          <Homepage />
        </Route>
      </Switch>
    </Template>
  );
}

export default App;
