import React, { Component } from "react";

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    this.setState({ value: event.target.value.trim() }, () => {
      this.props.inputChange(this.props.htmlId, this.state.value);
    });
  };

  render() {
    return (
      <input
        type="text"
        value={this.state.value}
        className={"form-control"}
        onChange={this.handleChange}
        id={this.props.htmlId}
      />
    );
  }
}

export default TextInput;
