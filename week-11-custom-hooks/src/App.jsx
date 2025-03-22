import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import usePrev from './hooks/usePrev'
import useDebounce from './hooks/useDebounce'

function useCounter() {
  const [count, setCount] = useState(1)

  function increase() {
    setCount(prev => prev + 1)
  }

  return { count, increase }
}

function App() {
  const { count, increase } = useCounter()
  const url = `https://dummyjson.com/todos/${count}`
  const { todo, loading } = useFetch(url)


  // if (loading) {
  //   return (
  //     <div>Loading...</div>
  //   )
  // }

  //. usePrev 
  const [value, setValue] = useState(0)
  const prev = usePrev(value)

  //. useDebounce 

  // function sendDataToBackend() {
  //   fetch('https://dummyjson.com/todos/2')
  //   console.log("expensive operation");

  // }

  // const deboundFn = useDebounce(sendDataToBackend)

  const [inputVal, setInputVal] = useState("")
  const debounce = useDebounce(inputVal, 300)

  useEffect(() => {
    console.log("expensive operation");
    
  }, [debounce])




  return (
    <>
      <input type="text" onChange={(e) => setInputVal(e.target.value)} />
    </>
  )
}

function Counter() {
  const { count, increase } = useCounter()

  return (

    <div>
      <button onClick={increase}>Increase {count}</button>
    </div>
  )
}

export default App
