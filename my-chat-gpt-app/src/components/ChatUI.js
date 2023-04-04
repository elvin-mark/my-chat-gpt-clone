import React, { useState, useEffect } from "react";
import SidePanel from "./SidePanel";
import Chat from "./Chat";
import "./ChatUI.css";
import axios from "axios"

const dummyChats = [
    {
        id: 1,
        title: "Asking simple questions",
        chatId: 1
    },
    {
        id: 2,
        title: "Where is this city",
        chatId: 2
    },
    {
        id: 3,
        title: "what is AI",
        chatId: 3
    },
];

const dummyMessages = {
    1: [{
        id: 1,
        user: "OpenAI",
        text: "Hi there!",
        time: "10:30 AM",
    }],
    2: [{
        id: 1,
        user: "OpenAI",
        text: "Hey John, how are you doing?",
        time: "10:31 AM",
    }],
    3: [{
        id: 1,
        user: "OpenAI",
        text: "I'm doing good, thanks. How about you?",
        time: "10:32 AM",
    }],
};

const ChatUI = () => {
    const [chats, setChats] = useState([]);
    const [selectedChat, setSelectedChat] = useState(dummyChats[0]);
    const [messages, setMessages] = useState([]);

    // loading the chats
    useEffect(() => {
        axios.get("http://127.0.0.1:5000/chats?user=asdf").then((res) => { setChats(res.data) }).catch((e) => console.log(e))
    }, [])

    const handleChatClick = (chat) => {
        setSelectedChat(chat);

        // get the messages from the backend
        // setMessages(dummyMessages[chat.chatId])
        axios.get("http://127.0.0.1:5000/messages?user=asdf&chatId=1").then((res) => { setMessages(res.data) }).catch((e) => console.log(e))
    };

    const handleChatDelete = (chat) => {
        // delete the chat from the backend and update the list in frontend
        setChats(chats.filter((c) => c.id !== chat.id));
    };

    const handleSendMessage = (text) => {
        // send the message to the backend
        axios.post("http://127.0.0.1:5000/message?user=asdf&chatId=1",{msg:text}).then((res) => { console.log(res) }).catch((e) => console.log(e))

        const newMessage = {
            id: messages.length + 1,
            user: "Me",
            text,
            time: new Date().toLocaleTimeString(),
        };
        setMessages([...messages, newMessage]);
    };

    const handleOnNewChatClick = () => {
        console.log("asdfas");
    }

    return (
        <div className="chat-ui" onLoad={(e) => { console.log("asdf") }}>
            <SidePanel chats={chats} onClick={handleChatClick} onDelete={handleChatDelete} onNewChatClick={handleOnNewChatClick} />
            <Chat
                messages={messages}
                onSend={handleSendMessage}
            >
                <h2>{selectedChat.name}</h2>
                <p>Last message: {selectedChat.lastMessage}</p>
                <p>Last message time: {selectedChat.lastMessageTime}</p>
            </Chat>
        </div>
    );
};

export default ChatUI;
