type ProgressCardProps = {
  title: string
  progress: number
  color?: string
}

function ProgressCard({
  title,
  progress,
  color = "#6366f1",
}: ProgressCardProps) {
  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "16px",
        background: "#ffffff",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "12px",
        }}
      >
        <strong>{title}</strong>
        <span>{progress}%</span>
      </div>

      <div
        style={{
          width: "100%",
          height: "8px",
          background: "#e5e7eb",
          borderRadius: "999px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: color,
            borderRadius: "999px",
          }}
        />
      </div>
    </div>
  )
}

export default ProgressCard
