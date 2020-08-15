import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Signin from "./components/signin";
import Signup from "./components/signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router exact path="/myreactlogin">
        <Navbar />
        <Switch>
          <Route path="/myreactlogin" exact component={Signin} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
