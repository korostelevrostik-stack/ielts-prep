import { useEffect, useState } from "react"

function useTimer(initialSeconds: number) {
  const [seconds, setSeconds] = useState(initialSeconds)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    if (!isRunning || seconds <= 0) {
      return
    }

    const timer = setInterval(() => {
      setSeconds((current) => current - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [isRunning, seconds])

  const start = () => {
    setIsRunning(true)
  }

  const pause = () => {
    setIsRunning(false)
  }

  const reset = () => {
    setIsRunning(false)
    setSeconds(initialSeconds)
  }

  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60

  const formattedTime = `${minutes}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`

  return {
    seconds,
    formattedTime,
    isRunning,
    start,
    pause,
    reset,
  }
}

export default useTimer
