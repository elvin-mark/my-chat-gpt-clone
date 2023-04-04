import React from "react";
import "./ChatMessageItem.css"

const ChatMessageItem = ({ message }) => {
  return (
    <div className="chat-message-item">
      <div className="chat-message-item-header">
        <h4>{message.user}</h4>
        <span>{message.time}</span>
      </div>
      <div className="chat-message-item-content">{message.text}</div>
    </div>
  );
};

export default ChatMessageItem;
