import { useEffect, useState } from "react";

function App() {
  const [socket, setSocket] = useState();
  const [messagesReceived, setMessagesReceived] = useState([""]);
  const [messagesSent, setMessagesSent] = useState([""]);
  const [inputVal, setInputVal] = useState("");

  function sendMessage() {
    //@ts-ignore
    socket.send(JSON.stringify({
      type: "chat",
      payload: {
        message: inputVal
      }
    }))

    setMessagesSent(prev => [...prev, inputVal])
    setInputVal("")
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:4001")
    //@ts-ignore
    setSocket(ws)

    ws.onopen = () => {
      ws.send(JSON.stringify({
        type: "join",
        payload: {
          roomId: "red"
        }
      }))
    }

    ws.onmessage = (e) => {
      setMessagesReceived(prev => [...prev, e.data])
    }
  }, []);

  return (
    <>
      <div className="h-screen bg-black flex  items-center justify-center">
        <div className="h-2/3 w-1/3 bg-gray-600 rounded-md ">
          <div className="h-full w-full flex flex-col gap-2 mt-2">
            <div className="h-[90%] w-[95%] mx-auto flex flex-col text-lg gap-2">
              {/* MESSAGES */}
              {messagesReceived.map((msg, idx) => (
                <p
                  key={idx}
                  className="bg-slate-200 w-1/2 text-black max-w-max px-2 py-1 rounded-md"
                >
                  {msg}
                </p>
              ))}

              {messagesSent.map((msg, idx) => (
                <p
                  key={idx}
                  className="bg-slate-200 text-black max-w-max px-2 py-1 rounded-md relative ml-auto w-1/2"
                >
                  {msg}
                </p>
              ))}
            </div>
            <div className="flex justify-evenly w-[95%] mx-auto gap-4 mb-4">
              <input
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                className="w-full rounded-md bg-gray-400"
                type="text"
              />
              <button
                onClick={sendMessage}
                className=" bg-blue-500 text-white px-8 py-1 rounded-md"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
