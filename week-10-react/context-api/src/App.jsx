import { useContext, useState } from "react";
import "./App.css";
import { BulbContext } from "./context/BulbContext";

function App() {

  
  return (
    <>
      <LightBulb />
    </>
  );

  function LightBulb() {
    
    return (
      <>
      <BulbState />
      <ToggleBulb />

      </>
    )
  }

  function BulbState() {
    const {bulbOn} = useContext(BulbContext)
    return (
      <>
      {bulbOn ? "ON" : "OFF"}
      </>
    )
  }

  function ToggleBulb() {
    const {setBulbOn} = useContext(BulbContext)

    const toggle = () => {
      setBulbOn(prev => !prev)
    }
    
    return (
      <>
      <button onClick={toggle}>Toggle bulb</button>
      </>
    )
  }
}

export default App;
