import React, { Component } from 'react';
import { Comment } from 'semantic-ui-react';
import ChatMessage from './ChatMessage'

class ChatHistory extends Component {
  render() {
    const messages = this.props.messages.map((message, index) =>
      <ChatMessage key={index} message={message} />
    );

    return (
      <Comment.Group className="chatHistory">
        {messages}
      </Comment.Group>
    );
  }
}

export default ChatHistory;
