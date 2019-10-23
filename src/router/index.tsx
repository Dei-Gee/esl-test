import { createBrowserHistory } from "history";
import React from "react";
import { Link, NavLink, Route, Router, Switch } from "react-router-dom";
import Homepage from "../components/Homepage";

export const history = createBrowserHistory();

// Instead of BrowserRouter, we use the regular router,
// but we pass in a customer history to it.
const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
