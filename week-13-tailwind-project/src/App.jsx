import { useState } from 'react'
import SideBarClass1 from './components/SideBarClass1'
import Button from './components/Button'
import { Sidebar4 } from './components/SideBar4'
import DarkMode from './components/DarkMode'
import SideBar from './components/SideBar'
import MainContent from './components/MainContent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex'>
      {/* <SideBarClass1 /> */}
      {/* <Button /> */}
      {/* <Sidebar4/> */}
      {/* <DarkMode/> */}
      <SideBar />
      <MainContent />
    </div>
  )
}

export default App
