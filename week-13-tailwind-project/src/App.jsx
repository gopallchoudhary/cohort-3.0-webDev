import { useState } from 'react'
import SideBarClass1 from './components/SideBarClass1'
import Button from './components/Button'
import { Sidebar4 } from './components/SideBar4'
import DarkMode from './components/DarkMode'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <SideBarClass1 /> */}
      {/* <Button /> */}
      {/* <Sidebar4/> */}
      <DarkMode/>
    </>
  )
}

export default App
