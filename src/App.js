import React from "react";
import "./App.css";

import { Provider } from "./Context";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Main from "./components/layout/Main";
import Lyrics from "./components/tracks/Lyrics";

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={ Main } />
            <Route exact path="/lyrics/track/:id" component={ Lyrics } />
          </Switch>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
