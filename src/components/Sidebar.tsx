function Sidebar() {
  return (
    <aside
      style={{
        width: "240px",
        minHeight: "100vh",
        padding: "24px 16px",
        background: "#111827",
        color: "#ffffff",
        boxSizing: "border-box",
      }}
    >
      <h2
        style={{
          margin: "0 0 32px",
          fontSize: "22px",
        }}
      >
        IELTS Prep
      </h2>

      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <a href="#" style={linkStyle}>
          Dashboard
        </a>

        <a href="#" style={linkStyle}>
          Listening
        </a>

        <a href="#" style={linkStyle}>
          Reading
        </a>

        <a href="#" style={linkStyle}>
          Writing
        </a>

        <a href="#" style={linkStyle}>
          Speaking
        </a>

        <a href="#" style={linkStyle}>
          Vocabulary
        </a>

        <a href="#" style={linkStyle}>
          Statistics
        </a>
      </nav>
    </aside>
  )
}

const linkStyle = {
  color: "#d1d5db",
  textDecoration: "none",
  padding: "12px",
  borderRadius: "10px",
}

export default Sidebar
