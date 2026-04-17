import React, { useEffect, useState } from 'react'
import './App.css'
import usePrev from './hooks/usePrev'
import useDebounce from './hooks/useDebounce'
import Counter from './components/Counter'



function App() {
  

  //. usePrev 
  const [value, setValue] = useState(0)
  const prev = usePrev(value)

  //. useDebounce 
  const [inputVal, setInputVal] = useState("")
  const debounce = useDebounce(inputVal, 1000)

  useEffect(() => {
    console.log("expensive operation");
    console.log(debounce);


  }, [debounce])





  return (
    <>
      <input type="text" onChange={(e) => setInputVal(e.target.value)} /> <br />
      {value} <br />
      {prev} <br />
      <button onClick={() => {
        setValue((prev) => prev + 1)
      }}>click me</button>
      <Counter/>
    </>
  )
}




export default App
