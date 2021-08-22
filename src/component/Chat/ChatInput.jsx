import React from "react";
import firebase from "firebase";
import { database } from "../../firebase/index";
import { ChatInputContainer } from "./Chat.styles";
import { useState } from "react";

const ChatInput = ({ channelName, channelId }) => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() === "" || !channelId) {
      alert("Please send valid message");
      return;
    }
    database.collection("rooms").doc(channelId).collection("messages").add({
      message: inputValue,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: "HUSNAIN SYED",
      userImg: "dummy",
    });

    setInputValue("");
  };
  return (
    <ChatInputContainer>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          placeholder={`Message #${channelName}`}
        />

        <button type="submit" hidden></button>
      </form>
    </ChatInputContainer>
  );
};

export default ChatInput;
