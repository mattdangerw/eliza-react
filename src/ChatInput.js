import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleInput(input) {
    this.props.inputHandler(this.state.value);
    this.setState({
      value: '',
    })
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  }

  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      this.handleInput();
    }
  }

  handleClick = () => {
    this.handleInput();
  }

  render() {
    return (
      <Input
        className="chatInput"
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
        action={{ color: 'teal', icon: 'arrow right', onClick: this.handleClick}}
        placeholder='Write to ELIZA...'
        value={this.state.value}
      />
    );
  }
}

export default ChatInput;
