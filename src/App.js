import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Main from "./components/layout/Main";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
