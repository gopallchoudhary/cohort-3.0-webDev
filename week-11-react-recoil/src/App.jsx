import { useState } from "react";
import CountContextProvider, { CountContext } from "./context/CountContext";
import "./App.css";
import { useContext } from "react";

function App() {
  return (
    <CountContextProvider>
      <Decrease />
      <Value />
      <Increase />
    </CountContextProvider>
  );

  function Increase() {
    const { count, setCount } = useContext(CountContext);
    const increase = () => {
      setCount(prev => prev + 1)
    }

    return (
      <>
        <button onClick={increase}>Increase</button>
      </>
    );
  }

  function Decrease() {
    const { count, setCount } = useContext(CountContext);
    const decrease = () => {
      setCount(prev => prev - 1)
    }

    return (
      <>
        <button onClick={decrease}>Decrease</button>
      </>
    );
  }

  function Value() {
    const { count } = useContext(CountContext);

    return (
      <>
        <h3>{count}</h3>
      </>
    );
  }
}

export default App;
