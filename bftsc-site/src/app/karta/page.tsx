// src/app/karta/page.tsx

export default function KartaPage() {
  return (
    <div>
      {/* HERO — orange-first */}
      <section className="accent">
        <div className="container" style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "36px", marginBottom: "8px" }}>
            Karta Innovation Program
          </h1>
          <p style={{ fontSize: "18px" }}>
            Experience-first cohort. Build real features in small teams, mentored by practitioners.
          </p>
          <div style={{ marginTop: "14px" }}>
            <a
              href="https://forms.gle/"
              className="btn"
              style={{
                background: "#0F3B75",           // blue on orange for contrast
                border: "2px solid #0F3B75",
                color: "#fff",
                borderRadius: "8px",
                padding: "8px 14px",
                fontWeight: 600,
              }}
            >
              Apply
            </a>
          </div>
        </div>
      </section>

      {/* BRIEF */}
      <section className="light">
        <div className="container" style={{ maxWidth: 820 }}>
          <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>Brief</h2>
          <p>
            Karta is a non-commercial program to gain real experience: you ship
            useful pieces of a payments product with a team, then present your work.
          </p>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="light">
        <div className="container" style={{ maxWidth: 820 }}>
          <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>Description</h2>
          <p>
            Over a short cohort, you’ll follow a clear weekly rhythm: kickoff,
            build, mentor check-ins, and a lightweight demo at the end of each week.
            The goal is simple: learn by doing and leave with something you’re proud to show.
          </p>
        </div>
      </section>

      {/* WHAT YOU’LL DO (concise, no bullets) */}
      <section className="light">
        <div className="container" style={{ maxWidth: 820 }}>
          <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>What you’ll do</h2>
          <p style={{ marginBottom: 6 }}>
            • Acceptance & POS flows: simple NFC/QR journeys, merchant onboarding, basic reporting.
          </p>
          <p style={{ marginBottom: 6 }}>
            • Wallet foundations: stored value, top-ups, limits, clean receipts.
          </p>
          <p>
            • Analytics & UX: events, small dashboards, tidy interfaces and docs for your demo.
          </p>
        </div>
      </section>

      {/* REQUIREMENTS (short) */}
      <section className="light">
        <div className="container" style={{ maxWidth: 820 }}>
          <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>Requirements</h2>
          <p style={{ marginBottom: 6 }}>
            • Students or early-career builders with basic web skills (frontend or backend).
          </p>
          <p style={{ marginBottom: 6 }}>
            • 6–8 hours per week during the cohort.
          </p>
          <p>• Team mindset and willingness to ship small, frequent updates.</p>
        </div>
      </section>

      {/* APPLICATION PROCESS (simple steps) */}
      <section className="light">
        <div className="container" style={{ maxWidth: 820 }}>
          <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>How to apply</h2>
          <ol style={{ paddingLeft: "18px" }}>
            <li style={{ marginBottom: 6 }}>Fill the short form (motivation + any project link).</li>
            <li style={{ marginBottom: 6 }}>If shortlisted, a quick chat and track match.</li>
            <li>Onboarding, team setup, and you start shipping.</li>
          </ol>
          <div style={{ marginTop: "12px" }}>
            <a
              href="https://forms.gle/"
              className="btn"
              style={{
                background: "#0F3B75",
                border: "2px solid #0F3B75",
                color: "#fff",
                borderRadius: "8px",
                padding: "8px 14px",
                fontWeight: 600,
              }}
            >
              Apply
            </a>
          </div>
        </div>
      </section>

      {/* WHAT YOU’LL GET (certificate + skills, concise) */}
      <section className="light">
        <div className="container" style={{ maxWidth: 820 }}>
          <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>What you’ll get</h2>
          <p style={{ marginBottom: 6 }}>
            • Verifiable certificate (QR) — perfect for LinkedIn.
          </p>
          <p style={{ marginBottom: 6 }}>
            • Portfolio artifact: repo, small demo, and a clear write-up.
          </p>
          <p>
            • Skills: product thinking, clean web delivery, basic data/analytics, and team execution.
          </p>
        </div>
      </section>
    </div>
  );
}
