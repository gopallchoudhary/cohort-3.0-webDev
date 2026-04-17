import useCounter from "../hooks/useCounter"
import React from "react"
function Counter() {
    const { count, increase } = useCounter()
    console.log("Counter rendered");


    return (

        <div>
            <button onClick={increase}>Increase {count}</button>
        </div>
    )
}

export default React.memo(Counter)