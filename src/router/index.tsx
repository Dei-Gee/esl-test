import { createBrowserHistory } from "history";
import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import Homepage from "../components/Homepage";

export const history = createBrowserHistory();

// Instead of BrowserRouter, we use the regular router,
// but we pass in a customer history to it.
const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/:tourneyId" component={Homepage} exact />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
