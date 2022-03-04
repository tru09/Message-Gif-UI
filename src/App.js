import React from "react";
import { Fragment, useState } from "react";
import GifList from "./Components/GifList";
import Input from "./Components/Input";
import Messages from "./Components/MessageList";
import "./App.css";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [gif, setGif] = useState([]);
  const [isGif, setIsGif] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sendgif, setSendGif] = useState({});

  const SubmitHandler = (message) => {
    setMessages([...messages, message]);
  };

  const GifPost = (value, id, src) => {
    const obj = {
      value: value,
      id: id,
      src: src,
    };
    setSendGif({ ...sendgif, obj });
  };

  return (
    <div>
      <Input
        onsubmit={SubmitHandler}
        gifs={setGif}
        loading={setLoading}
        isGif={isGif}
        setIsGif={setIsGif}
        sendgif={sendgif}
      />
      {isGif && (
        <div className="gif-display">
          {loading && <h2 style={{ textAlign: "center" }}>Loading</h2>}
          {!loading && <GifList GifPost={GifPost} giflist={gif} />}
        </div>
      )}

      <Messages messages={messages} />
    </div>
  );
};

export default App;
