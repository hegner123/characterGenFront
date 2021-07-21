import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { history } from "./_helpers";
import { HomePage } from "./HomePage";
import "./assets/css/normalize.css";
import "./assets/css/main.css";
import "./assets/css/style.css";

const App = (props) => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
};



const connectedApp = connect()(App);
export { connectedApp as App };
