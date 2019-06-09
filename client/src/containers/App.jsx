import React, { Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import decode from "jwt-decode";

import { store } from "../store";
import { setCurrentUser, addError, setToken } from "../store/actions";
import NavBar from "./NavBar";
import RouteViews from "./RouteViews";

if (localStorage.jwtToken) {
  setToken(localStorage.jwtToken);
  try {
    store.dispatch(setCurrentUser(decode(localStorage.jwtToken)));
  } catch (error) {
    store.dispatch(setCurrentUser({}));
    store.dispatch(addError(error));
  }
}

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <NavBar />
        <RouteViews />
      </Fragment>
    </Router>
  </Provider>
);

export default App;
