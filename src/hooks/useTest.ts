import { useState } from "react"

function useTest(totalQuestions: number) {
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [isFinished, setIsFinished] = useState(false)

  const answerQuestion = (answer: string) => {
    setAnswers((current) => ({
      ...current,
      [currentQuestion]: answer,
    }))
  }

  const nextQuestion = () => {
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion((current) => current + 1)
    }
  }

  const previousQuestion = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion((current) => current - 1)
    }
  }

  const finishTest = () => {
    setIsFinished(true)
  }

  const resetTest = () => {
    setCurrentQuestion(1)
    setAnswers({})
    setIsFinished(false)
  }

  return {
    currentQuestion,
    answers,
    isFinished,
    answerQuestion,
    nextQuestion,
    previousQuestion,
    finishTest,
    resetTest,
  }
}

export default useTest
