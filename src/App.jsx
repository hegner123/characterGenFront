import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { history } from "./_helpers";
import { HomePage } from "./HomePage";
import "./_assets/css/normalize.css";
import "./_assets/css/main.css";
import "./_assets/css/style.css";

const App = (props) => {
  return (
    <div css={"background:var(--dark); min-height:100vh;"}>
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
