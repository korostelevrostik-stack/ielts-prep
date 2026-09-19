type QuickActionProps = {
  title: string
  description: string
  onClick?: () => void
}

function QuickAction({
  title,
  description,
  onClick,
}: QuickActionProps) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "100%",
        padding: "20px",
        border: "none",
        borderRadius: "16px",
        background: "#ffffff",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
        textAlign: "left",
        cursor: "pointer",
      }}
    >
      <h3 style={{ margin: "0 0 8px" }}>{title}</h3>

      <p
        style={{
          margin: 0,
          color: "#6b7280",
        }}
      >
        {description}
      </p>
    </button>
  )
}

export default QuickAction
