from flask import Flask, request
from flask_cors import CORS
from utils import make_http_respose, get_response
from tinydb import TinyDB

app = Flask(__name__)
CORS(app)

dummyChats = [
    {
        "id": 1,
        "title": "Asking simple questions",
        "chatId": 1
    },
    {
        "id": 2,
        "title": "Where is this city",
        "chatId": 2
    },
    {
        "id": 3,
        "title": "what is AI",
        "chatId": 3
    },
]

dummyMessages = {
    "1": [{
        "id": 1,
        "user": "OpenAI",
        "text": "Hi there!",
        "time": "10:30 AM",
    }],
    "2": [{
        "id": 1,
        "user": "OpenAI",
        "text": "Hey John, how are you doing?",
        "time": "10:31 AM",
    }],
    "3": [{
        "id": 1,
        "user": "OpenAI",
        "text": "I'm doing good, thanks. How about you?",
        "time": "10:32 AM",
    }],
}

@app.route("/chats",methods=["GET"])
def chats():
    user = request.args.get("user")
    # Get the chats from DB depending on the user
    return dummyChats

@app.route("/chat",methods=["POST"])
def new_chat():
    user = request.args.get("user")
    details = request.json
    # Create new chat in the DB
    return make_http_respose(200)

@app.route("/chat",methods=["DELETE"])
def delete_chat():
    user = request.args.get("user")
    chatId = request.args.get("chatId")
    # Delete the chat from the chats for this specific user
    return make_http_respose(200)

@app.route("/messages",methods=["GET"])
def messages():
    user = request.args.get("user")
    chatId = request.args.get("chatId")
    return dummyMessages[chatId]

@app.route("/message",methods=["POST"])
def new_message():
    user = request.args.get("user")
    chatId = request.args.get("chatId")
    msg = request.json
    return make_http_respose(200)

@app.route("/response",methods=["GET"])
def get_response():
    user = request.args.get("user")
    chatId = request.args.get("chatId")
    msg = request.json
    return make_http_respose(200)

if __name__=="__main__":
    app.run()