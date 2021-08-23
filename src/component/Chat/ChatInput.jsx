import React from "react";
import firebase from "firebase";
import { auth, database } from "../../firebase/index";
import { ChatInputContainer } from "./Chat.styles";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const ChatInput = ({ channelName, channelId }) => {
  const [user] = useAuthState(auth);

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
      user: user.displayName,
      userImg: user.photoURL,
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
