import React, { Component } from 'react';
import { Comment } from 'semantic-ui-react';
import robotAvatar from './robot.svg';
import humanAvatar from './human.svg';

class ChatMessage extends Component {
  render() {
    const message = this.props.message;
    let avatar = robotAvatar;
    let author = 'ELIZA';
    let className = 'eliza';
    if (message.user) {
      avatar = humanAvatar;
      author = 'Me';
      className = 'user';
    }

    return (
      <Comment className={className}>
        <Comment.Avatar src={avatar} />
        <Comment.Content>
          <Comment.Author as='a'>{author}</Comment.Author>
          <Comment.Metadata>
            <div>Today at {message.date.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' })}</div>
          </Comment.Metadata>
          <Comment.Text>{message.text}</Comment.Text>
        </Comment.Content>
      </Comment>
    );
  }
}

export default ChatMessage;
