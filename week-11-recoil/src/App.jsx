import './App.css'
import { useEffect, useState, memo } from 'react'

function App() {

  return (
    <>
      <Counter />
    </>
  )
}



function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setInterval(() => {
      setCount(prev => prev + 1)
    }, 2000);
  }, [])

  return (
    <div>
      <Value />
      <Decrease />
      <Increase />
    </div>
  )
}


function Value() {

  return (
    <div>
      1
    </div>
  )
}

function Increase() {

  const increase = () => {

  }

  return (
    <div>
      <button onClick={increase}>Incrase</button>
    </div>
  )
}

function Decrease() {
  const decrease = () => {

  }

  return (
    <button onClick={decrease}>Decrease</button>
  )
}

export default App
