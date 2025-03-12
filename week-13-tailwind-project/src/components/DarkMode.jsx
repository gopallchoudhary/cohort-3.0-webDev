import React, { useState } from 'react'

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(true)

  const toggle = () => {
    var html = document.querySelector("html")
    html.classList.remove("dark", "light")
    darkMode ? html.classList.add("dark") : html.classList.add("light")
    setDarkMode(prev => !prev)
  }

  return (
    <div className='bg-white dark:bg-black  h-screen'>
      <h1 className='dark:text-white'>Gopal Choudhary</h1>
      <button className='px-6 py-2 bg-blue-500 text-white rounded-md my-4 ' onClick={toggle}>Toggle theme</button>

    </div>
  )
}

export default DarkMode