type StatCardProps = {
  title: string
  value: string
  description?: string
}

function StatCard({
  title,
  value,
  description,
}: StatCardProps) {
  return (
    <div
      style={{
        padding: "24px",
        borderRadius: "18px",
        background: "#ffffff",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
      }}
    >
      <p
        style={{
          margin: 0,
          color: "#6b7280",
          fontSize: "14px",
        }}
      >
        {title}
      </p>

      <h2
        style={{
          margin: "8px 0",
          fontSize: "30px",
        }}
      >
        {value}
      </h2>

      {description && (
        <p
          style={{
            margin: 0,
            color: "#9ca3af",
            fontSize: "13px",
          }}
        >
          {description}
        </p>
      )}
    </div>
  )
}

export default StatCard
