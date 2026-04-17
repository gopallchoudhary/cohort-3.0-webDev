import { useState } from "react"

function useCounter() {
    const [count, setCount] = useState(1)

    function increase() {
        setCount(prev => prev + 1)
    }

    return { count, increase }
}

export default useCounter