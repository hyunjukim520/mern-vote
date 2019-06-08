import React from "react";
import { Provider } from "react-redux";
import decode from "jwt-decode";

import { store } from "../store";
import { setCurrentUser, addError, setToken } from "../store/actions";

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
    <div>Hello</div>
  </Provider>
);

export default App;
