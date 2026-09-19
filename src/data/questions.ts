export type Question = {
  id: number
  question: string
  options: string[]
  correctAnswer: string
}

export const listeningQuestions: Question[] = [
  {
    id: 1,
    question: "What time does the train leave?",
    options: ["8:15", "8:30", "8:45", "9:00"],
    correctAnswer: "8:30",
  },
  {
    id: 2,
    question: "Where will the students meet?",
    options: ["Library", "Café", "Main Hall", "Classroom"],
    correctAnswer: "Library",
  },
  {
    id: 3,
    question: "How much does the course cost?",
    options: ["£50", "£75", "£100", "£125"],
    correctAnswer: "£100",
  },
]
