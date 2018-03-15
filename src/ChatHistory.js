import React, { Component } from 'react';
import ChatMessage from './ChatMessage'

class ChatHistory extends Component {
  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView();
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    const messages = this.props.messages.map((message, index) =>
      <ChatMessage key={index} message={message} />
    );

    return (
      <div className="chatHistory">
        {messages}
        <div style={{ float: "left", clear: "both" }}
          ref={(el) => { this.messagesEnd = el; }}>
        </div>
      </div>
    );
  }
}

export default ChatHistory;
