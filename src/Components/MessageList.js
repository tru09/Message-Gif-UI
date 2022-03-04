import "./MessageList.css";
const Messages = (props) => {
  const allMessages = props.messages.map((message) => {
    return (
      <ul>
        <li key={message}>{message}</li>
      </ul>
    );
  });
  return (
    <div className="card">
      {props.messages && allMessages}
      {props.messages.length === 0 && "No Messages"}
    </div>
  );
};
export default Messages;
