type ScoreBadgeProps = {
  score: number
  label?: string
}

function ScoreBadge({
  score,
  label = "Band",
}: ScoreBadgeProps) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        padding: "10px 16px",
        borderRadius: "999px",
        background: "#eef2ff",
      }}
    >
      <span
        style={{
          color: "#6366f1",
          fontSize: "14px",
          fontWeight: "600",
        }}
      >
        {label}
      </span>

      <strong
        style={{
          fontSize: "20px",
        }}
      >
        {score}
      </strong>
    </div>
  )
}

export default ScoreBadge
