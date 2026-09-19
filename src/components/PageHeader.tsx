type PageHeaderProps = {
  title: string
  description: string
}

function PageHeader({
  title,
  description,
}: PageHeaderProps) {
  return (
    <div
      style={{
        marginBottom: "32px",
      }}
    >
      <h1
        style={{
          margin: "0 0 8px",
          fontSize: "32px",
        }}
      >
        {title}
      </h1>

      <p
        style={{
          margin: 0,
          color: "#6b7280",
          fontSize: "16px",
        }}
      >
        {description}
      </p>
    </div>
  )
}

export default PageHeader
