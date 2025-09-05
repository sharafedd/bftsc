import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="decor" />
        <div className="container">
          <div className="kicker">Website update in progress</div>
          <h1 className="h1">Something big is coming.</h1>
          <p className="lead">
            We’re building the next chapter of <b>smart payments</b> in Algeria —
            real pilots, clear merchant value, and an experience-first talent program.
          </p>

          <div style={{display:"flex",gap:12,flexWrap:"wrap",marginTop:16}}>
            <Link href="/karta" className="btn btn-cta">Karta Innovation Program</Link>
            <Link href="/partners" className="btn btn-ghost">Partners</Link>
            <Link href="/contact" className="btn btn-ghost">Contact</Link>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD (dark, premium cards) */}
      <section className="section">
        <div className="container">
          <div className="cards">
            <div className="card-dark">
              <h3>Acceptance & UX</h3>
              <p>Fast tap/scan flows that handle peak moments. Clean receipts and simple reporting.</p>
            </div>
            <div className="card-dark">
              <h3>Account & Top-ups</h3>
              <p>Stored-value foundations with intuitive limits and straightforward top-up paths.</p>
            </div>
            <div className="card-dark">
              <h3>Ops & Analytics</h3>
              <p>Predictable settlement, reconciliation, and dashboards built for operators.</p>
            </div>
            <div className="card-dark">
              <h3>Capability</h3>
              <p>KARTA grows builders by shipping in teams — portfolio artifacts + verifiable certificates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CALLS TO ACTION (light band) */}
      <section className="band section">
        <div className="container">
          <h2 className="h2">Get involved</h2>
          <div className="cards-light">
            <div className="card-light">
              <h3>Join KARTA</h3>
              <p>Experience-first cohort. Build, demo, and post your certificate on LinkedIn.</p>
              <Link href="/karta" className="btn btn-cta">Go to KARTA</Link>
            </div>
            <div className="card-light">
              <h3>Partner with BFTSC</h3>
              <p>Universities, merchants, operators — let’s design focused pilots together.</p>
              <Link href="/partners" className="btn btn-ghost" style={{color:"#0F3B75", borderColor:"#0F3B75"}}>Partners</Link>
            </div>
            <div className="card-light">
              <h3>Contact</h3>
              <p>Questions, mentoring, or press. We’d love to talk.</p>
              <Link href="/contact" className="btn btn-ghost" style={{color:"#0F3B75", borderColor:"#0F3B75"}}>Contact us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
