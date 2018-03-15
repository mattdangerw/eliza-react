import React, { Component } from 'react';
import { Comment, Header } from 'semantic-ui-react';
import ElizaBot from 'elizabot';
import debounce from 'lodash.debounce';

import ChatHistory from './ChatHistory'
import ChatInput from './ChatInput'

class App extends Component {
  constructor(props) {
    super(props);
    this.eliza = new ElizaBot();
    this.state = {
      messages: [{
        user: false,
        text: this.fixup(this.eliza.getInitial()),
        date: new Date(),
      }],
    };
    this.debounced_reply = debounce(this.reply, 1000, { 'maxWait': 5000 });
  }

  handleInput = (input) => {
    input = input.trim();
    if (!input)
      return;
    const messages = this.state.messages.slice(0);
    messages.push({
      user: true,
      text: input,
      date: new Date(),
    });
    this.setState({
      messages,
    });
    this.debounced_reply();
  }

  reply = () => {
    const unreplied = [];
    const messages = this.state.messages.slice(0);
    let iter = messages.length - 1;
    while (messages[iter].user && iter >= 0) {
      unreplied.unshift(messages[iter].text);
      iter--;
    }
    if (unreplied.length === 0)
      return;
    let response = this.eliza.transform(unreplied.join(' '));
    messages.push({
      user: false,
      text: this.fixup(response),
      date: new Date(),
    });
    this.setState({
      messages,
    });
  }

  fixup(text) {
    // Hack fix for weird "?" spacing in elizabot
    return text.replace(/ \?/g, '?');
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
