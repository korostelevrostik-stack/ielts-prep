type TestCardProps = {
  title: string
  description: string
  questions: number
}

function TestCard({
  title,
  description,
  questions,
}: TestCardProps) {
  return (
    <div
      style={{
        padding: "24px",
        borderRadius: "18px",
        background: "#ffffff",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
      }}
    >
      <h3>{title}</h3>

      <p>{description}</p>

      <p>{questions} questions</p>

      <button>Start Test</button>
    </div>
  )
}

export default TestCard
