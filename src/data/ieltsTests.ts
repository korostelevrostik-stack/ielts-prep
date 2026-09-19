export type IELTSTest = {
  id: number
  title: string
  skill: "Listening" | "Reading" | "Writing" | "Speaking"
  questions: number
  duration: number
  difficulty: "Easy" | "Medium" | "Hard"
}

export const ieltsTests: IELTSTest[] = [
  {
    id: 1,
    title: "Listening Practice Test 1",
    skill: "Listening",
    questions: 40,
    duration: 30,
    difficulty: "Medium",
  },
  {
    id: 2,
    title: "Reading Practice Test 1",
    skill: "Reading",
    questions: 40,
    duration: 60,
    difficulty: "Medium",
  },
  {
    id: 3,
    title: "Writing Practice Test 1",
    skill: "Writing",
    questions: 2,
    duration: 60,
    difficulty: "Hard",
  },
  {
    id: 4,
    title: "Speaking Practice Test 1",
    skill: "Speaking",
    questions: 3,
    duration: 15,
    difficulty: "Medium",
  },
]
