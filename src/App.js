import React, { Component } from 'react';
import { Comment, Header } from 'semantic-ui-react';
import ElizaBot from 'elizabot';
import ChatHistory from './ChatHistory'
import ChatInput from './ChatInput'

class App extends Component {
  constructor(props) {
    super(props);
    this.eliza = new ElizaBot();
    this.state = {
      messages: [{
        user: false,
        text: this.eliza.getInitial(),
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
      text: this.eliza.transform(input),
      date: new Date(),
    });
    this.setState({
      messages,
    });
  }

  render() {
    return (
      <div className="app">
        <Header className="chatHeader" as='h3' block>
          Chat with ELIZA
        </Header>
        <Comment.Group className="chatBody">
          <ChatHistory messages={this.state.messages} />
          <ChatInput inputHandler={this.handleInput} />
        </Comment.Group>
      </div>
    );
  }
}

export default App;
