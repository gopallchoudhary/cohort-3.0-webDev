import { useEffect, useState } from "react";


function useFetch(url) {
  const [todo, setTodo] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(false)
    fetch(url)
    .then((res) => res.json())
    .then((res) => {
      setTodo(res)
      setLoading(false)
    })
  }, [url])

  return {todo, loading}
}

export default useFetch