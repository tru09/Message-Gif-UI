import "./Input.css";
import Gif from "./Gif";
import { TextField, Button, Stack } from "@mui/material";
import { useState } from "react";

const Input = (props) => {
  const [message, setMessage] = useState("");

  const PostSubmitHandler = (event) => {
    event.preventDefault();
    props.onsubmit(message);
  };

  const messageHandler = (event) => {
    setMessage(event.target.value);
  };

  const clearHandler = () => {
    setMessage("");
  };

  const gifHandler = (value) => {
    props.setIsGif(value);
  };

  return (
    <form onSubmit={PostSubmitHandler} className="post-form">
      <TextField
        className="post-input"
        label="Message"
        variant="standard"
        value={message}
        onChange={messageHandler}
        fullWidth
      />
      {props.sendgif.value && (
        <img
          style={{ height: "30px", width: "30px" }}
          id={props.sendgif.id}
          src={props.sendgif.src}
          alt="gif"
        />
      )}

      {props.isGif && (
        <Gif onBlur={gifHandler} gif={props.gifs} loading={props.loading} />
      )}
      {!props.isGif && (
        <Button
          style={{ float: "left", margin: "1rem auto" }}
          href="#text-buttons"
          onClick={() => gifHandler(true)}
        >
          GIF
        </Button>
      )}
      <Stack className="post-button" spacing={2} direction="row">
        <Button onClick={clearHandler} variant="outlined">
          Cancel
        </Button>
        <Button type="submit" variant="contained">
          POST
        </Button>
      </Stack>
    </form>
  );
};

export default Input;
