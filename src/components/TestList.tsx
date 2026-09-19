type Test = {
  title: string
  description: string
  questions: number
  duration: string
}

type TestListProps = {
  tests: Test[]
}

function TestList({ tests }: TestListProps) {
  return (
    <div
      style={{
        display: "grid",
        gap: "16px",
      }}
    >
      {tests.map((test) => (
        <div
          key={test.title}
          style={{
            padding: "20px",
            borderRadius: "16px",
            background: "#ffffff",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
          }}
        >
          <h3 style={{ marginTop: 0 }}>{test.title}</h3>

          <p style={{ color: "#6b7280" }}>
            {test.description}
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
              color: "#6b7280",
              fontSize: "14px",
            }}
          >
            <span>{test.questions} questions</span>
            <span>{test.duration}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TestList
