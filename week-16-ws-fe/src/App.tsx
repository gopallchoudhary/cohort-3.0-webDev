import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [socket, setSocket] = useState();
  const inputRef = useRef();
  const [rec, setRec] = useState("");

  function sendMessage() {
    if (!socket) {
      return;
    }

    //@ts-ignore
    socket.send(inputRef.current.value);
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    //@ts-ignore
    setSocket(ws);

    ws.onmessage = (e) => {
      alert(e.data);
      setRec(e.data);
    };
  }, []);

  return (
    <>
      <input ref={inputRef} type="text" placeholder="message..." />
      <button onClick={sendMessage}>Send</button>
      <p>{rec}</p>
    </>
  );
}

export default App;
