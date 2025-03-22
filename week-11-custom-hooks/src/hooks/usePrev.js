import { useEffect, useRef } from "react";

function usePrev(value) {
  const ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default usePrev

// in react: it returns first and then useEffect or any other effect is called or re-renders
// refs dont re-render the component when they change
