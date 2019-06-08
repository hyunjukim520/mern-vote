import React, { Component } from "react";
import api from "../services/api";

// const App = () => <div>App works</div>
class App extends Component {
  async componentDidMount() {
    const result = api.call("post", "auth/login", {
      username: "username",
      password: "password"
    });

    console.log(result);
  }

  render() {
    return <div>Hello</div>;
  }
}

export default App;
