import { useState } from 'react'
import './App.css'
import Register from './components/Register'
import Login from './components/Login'
import Users from './components/Users'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Register/> */}
      <Users />
    </>
  )
}

export default App
