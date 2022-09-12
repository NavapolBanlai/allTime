import { useEffect, useLayoutEffect, useRef, useState } from 'react'

function useCountdown(callback: any) {
  const savedCallback = useRef(callback)

  // Remember the latest callback if it changes.
  useLayoutEffect(() => {
    savedCallback.current = callback
  }, [callback])

  const [start, setStart] = useState(false)
  const [seconds, setSeconds] = useState(-1);
  useEffect(() => {
    if (start) {
      let myInterval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(prevState => prevState - 1);
        }
        else {
          setSeconds(-1)
          setStart(false)
          savedCallback.current();
        }
      }, 1000)
      return () => {
        clearInterval(myInterval);
      };
    }
  }, [start, seconds]);

  return {
    start: (delay: any) => {
      setSeconds(delay)
      setStart(true);
    },
    countdown: seconds,
  }
}

export default useCountdown