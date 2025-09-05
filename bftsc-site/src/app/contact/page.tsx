"use client";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message sent! (form not connected yet)");
  };

  return (
    <div>
      {/* Hero / Intro */}
      <section className="light">
        <div className="container" style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>Contact Us</h1>
          <p style={{ fontSize: "18px", color: "#555" }}>
            Reach us directly for partnerships, mentoring, or information.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="light">
        <div className="container" style={{ textAlign: "center" }}>
          <p style={{ fontSize: "16px", marginBottom: "6px" }}>
            <strong>Email:</strong>{" "}
            <a href="mailto:contact@bftsc.dz" style={{ color: "var(--blue)" }}>
              contact@bftsc.dz
            </a>
          </p>
          <p style={{ fontSize: "16px" }}>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://linkedin.com/company/bftsc"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--blue)" }}
            >
              linkedin.com/company/bftsc
            </a>
          </p>
        </div>
      </section>

      {/* Message Form */}
      <section className="light">
        <div className="container" style={{ maxWidth: "600px" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>Send us a message</h2>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "6px",
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "6px",
              }}
            />
            <textarea
              name="message"
              placeholder="Your message"
              rows={5}
              required
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "6px",
              }}
            />
            <button
              type="submit"
              className="btn btn-orange"
              style={{ alignSelf: "flex-start" }}
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
