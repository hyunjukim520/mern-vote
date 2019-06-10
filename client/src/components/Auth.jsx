import React, { Component } from "react";
import { connect } from "react-redux";
import { authUser, logout } from "../store/actions";

class Auth extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    const { authType } = this.props;

    this.props.authUser(authType || "login", { username, password });
  };

  render() {
    const { username, password } = this.state;
    const { authType } = this.props;
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <label htmlFor="username" className="form-label">
            username
          </label>
          <input
            type="text"
            value={username}
            name="username"
            id="username"
            onChange={this.handleChange}
            className="form-input"
          />

          <label htmlFor="password" className="form-label">
            password
          </label>
          <input
            type="password"
            value={password}
            name="password"
            id="password"
            autoComplete="off"
            onChange={this.handleChange}
            className="form-input"
          />
          <div className="button_center">
            <button className="button" type="submit">
              {authType}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  {
    authUser,
    logout
  }
)(Auth);
