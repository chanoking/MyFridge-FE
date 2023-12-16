import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup/" component={Signup} />
        <Route path="/signin" component={Signin} />
      </Switch>
    </Router>
  );
}

export default App;
