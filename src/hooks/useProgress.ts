import { useState } from "react"

function useProgress(initialProgress: number = 0) {
  const [progress, setProgress] = useState(initialProgress)

  const increaseProgress = (amount: number = 1) => {
    setProgress((current) =>
      Math.min(current + amount, 100)
    )
  }

  const resetProgress = () => {
    setProgress(0)
  }

  return {
    progress,
    setProgress,
    increaseProgress,
    resetProgress,
  }
}

export default useProgress
