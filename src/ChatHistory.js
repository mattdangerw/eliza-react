import React, { Component } from 'react';
import ChatMessage from './ChatMessage'
import { animateScroll } from "react-scroll";

class ChatHistory extends Component {
  scrollToBottom = () => {
    animateScroll.scrollToBottom({
      containerId: "chatHistory"
    });
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
      <div className="chatHistory" id="chatHistory">
        {messages}
      </div>
    );
  }
}

export default ChatHistory;
