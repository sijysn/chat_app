import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import ChatPage from "../pages/ChatPage";
import LoginPage from "../pages/LoginPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ChatPage} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default App;
