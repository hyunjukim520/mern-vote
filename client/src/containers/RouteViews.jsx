import React from "react";
import { connect } from "react-redux";
import { Switch, Route, withRouter } from "react-router-dom";

import { getCurrentPoll } from "../store/actions";
import AuthPage from "../pages/AuthPage";
import HomePage from "../pages/HomePage";
import PollPage from "../pages/PollPage";
import CreatePollPage from "../pages/CreatePollPage";

const RouteViews = ({ auth, getCurrentPoll }) => (
  <main>
    <Switch>
      <Route exact path="/" render={props => <HomePage {...props} />} />
      <Route
        path="/login"
        render={() => (
          <AuthPage authType="login" isAuthenticated={auth.isAuthenticated} />
        )}
      />
      <Route
        path="/register"
        render={() => (
          <AuthPage
            authType="register"
            isAuthenticated={auth.isAuthenticated}
          />
        )}
      />
      <Route
        path="/poll/new"
        render={() => <CreatePollPage isAuthenticated={auth.isAuthenticated} />}
      />
      <Route
        path="/poll/:id"
        render={props => (
          <PollPage getPoll={id => getCurrentPoll(id)} {...props} />
        )}
      />
    </Switch>
  </main>
);

export default withRouter(
  connect(
    store => ({ auth: store.auth }),
    { getCurrentPoll }
  )(RouteViews)
);
