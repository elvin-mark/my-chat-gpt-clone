import React from "react";
import "./ChatItem.css"
import '@fortawesome/fontawesome-free/css/all.css';

const ChatItem = ({ chat, onClick, onDelete }) => {
  return (
    <div className="chat-item" onClick={onClick}>
      <h3>{chat.title}</h3>
      <button onClick={(e) => onDelete(e)}>
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
};

export default ChatItem;
