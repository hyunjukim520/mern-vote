import React from "react";
import { connect } from "react-redux";
import { Switch, Route, withRouter } from "react-router-dom";
import AuthPage from "../pages/AuthPage";

const RouteViews = ({ auth }) => (
  <main>
    <Switch>
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
      <Route path="/" exact />
    </Switch>
  </main>
);

export default withRouter(connect(store => ({ auth: store.auth }))(RouteViews));
