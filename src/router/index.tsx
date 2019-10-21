import createHistory from "history/createBrowserHistory";
import React from "react";
import { Link, NavLink, Route, Router, Switch } from "react-router-dom";
import HomePage from "../components/HomePage";

export const history = createHistory();

// Instead of BrowserRouter, we use the regular router,
// but we pass in a customer history to it.
const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
