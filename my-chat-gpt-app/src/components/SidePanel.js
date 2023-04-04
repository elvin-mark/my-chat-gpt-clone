import React from "react";
import ChatItem from "./ChatItem";
import "./SidePanel.css"
import '@fortawesome/fontawesome-free/css/all.css';

const SidePanel = ({ chats, onClick, onDelete, onNewChatClick }) => {
  return (
    <div className="side-panel">
        <button className="new-chat-button" onClick={onNewChatClick}>
        <i className="fas fa-plus"></i> New Chat
      </button>
      {chats.map((chat) => (
        <ChatItem
          key={chat.id}
          chat={chat}
          onClick={() => onClick(chat)}
          onDelete={() => onDelete(chat)}
        />
      ))}
    </div>
  );
};

export default SidePanel;
