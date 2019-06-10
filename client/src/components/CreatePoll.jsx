import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { createPoll } from "../store/actions";

class CreatePoll extends Component {
  state = {
    question: "",
    options: [""]
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createPoll(this.state);
  };

  addAnswer = () => {
    this.setState({ options: [...this.state.options, ""] });
  };

  handleAnswer = (e, index) => {
    const options = [...this.state.options];
    options[index] = e.target.value;
    this.setState({ options });
  };

  render() {
    const options = this.state.options.map((option, i) => (
      <Fragment key={i}>
        <label htmlFor="option" />
        <input
          type="text"
          value={option}
          key={i}
          onChange={e => this.handleAnswer(e, i)}
        />
      </Fragment>
    ));

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="question">Question</label>
          <input
            type="text"
            name="question"
            value={this.state.question}
            onChange={this.handleChange}
          />
        </div>
        <div>{options}</div>
        <div>
          <button type="button" onClick={this.addAnswer}>
            Add options
          </button>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default connect(
  () => ({}),
  { createPoll }
)(CreatePoll);
