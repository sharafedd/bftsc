// src/app/partners/page.tsx
export default function PartnersPage() {
  return (
    <div>
      {/* Intro */}
      <section className="light">
        <div className="container" style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>Our Partners</h1>
          <p style={{ fontSize: "18px", color: "#555" }}>
            We collaborate with institutions, operators, and merchants to build real payment solutions.
          </p>
        </div>
      </section>

      {/* Logos */}
      <section className="light">
        <div
          className="container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          {/* Replace with real logos in /public/partners/ */}
          {["/partners/a.png", "/partners/b.png", "/partners/c.png"].map((logo, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                border: "1px solid #e8eef6",
                borderRadius: "12px",
                padding: "14px 20px",
                boxShadow: "0 6px 18px rgba(15,59,117,.06)",
              }}
            >
              <img
                src={logo}
                alt={`Partner ${i + 1}`}
                style={{ height: "50px", width: "auto" }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Vision */}
      <section className="light">
        <div className="container" style={{ textAlign: "center", maxWidth: "720px" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "12px" }}>Our Vision</h2>
          <p style={{ fontSize: "16px", color: "#444" }}>
            Together, we aim to establish a reliable digital payment ecosystem that empowers merchants, students, and communities across Algeria.
          </p>
        </div>
      </section>

      {/* Join Us */}
      <section className="light">
        <div className="container" style={{ textAlign: "center" }}>
          <p style={{ fontSize: "18px", marginBottom: "14px" }}>
            Want to be part of our partner network?
          </p>
          <a href="/contact" className="btn btn-orange">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
