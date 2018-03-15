import React, { Component } from 'react';
import ChatHistory from './ChatHistory'
import ChatInput from './ChatInput'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [{
        user: false,
        text: "How do you feel about poop?",
        date: new Date(),
      }],
    };
  }

  handleInput = (input) => {
    console.log(input);
    input = input.trim();
    if (!input)
      return;
    const messages = this.state.messages.slice(0);
    messages.push({
      user: true,
      text: input,
      date: new Date(),
    });
    messages.push({
      user: false,
      text: "How do you feel about poop?",
      date: new Date(),
    });
    this.setState({
      messages,
    });
  }

  render() {
    return (
      <div className="app">
        <ChatHistory messages={this.state.messages} />
        <ChatInput inputHandler={this.handleInput} />
      </div>
    );
  }
}

export default App;
