import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getPolls, getUserPolls } from "../store/actions";

class Polls extends Component {
  state = {
    polls: []
  };

  componentDidMount() {
    this.props.getPolls();
  }

  handleSelect(id) {
    const { history } = this.props;
    history.push(`/poll/${id}`);
  }

  render() {
    const { auth, getPolls, getUserPolls } = this.props;

    const polls = this.props.polls.map(poll => (
      <li key={poll._id} onClick={() => this.handleSelect(poll._id)}>
        {poll.question}
      </li>
    ));
    return (
      <Fragment>
        {auth.isAuthenticated && (
          <div className="button_center">
            <button className="button" onClick={getPolls}>
              All polls
            </button>
            <button className="button" onClick={getUserPolls}>
              My polls
            </button>
          </div>
        )}
        <ul className="polls">{polls}</ul>
      </Fragment>
    );
  }
}

export default connect(
  store => ({
    auth: store.auth,
    polls: store.polls
  }),
  { getPolls, getUserPolls }
)(Polls);
