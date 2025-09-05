// src/app/contact/page.tsx
// Server-safe (no event handlers). Brand: BFTSC blue with a touch of orange.
// Ultra-clean, centered form card with built-in success/error banners via :target (no JS).

export default function ContactPage() {
  return (
    <>
      <main style={sx.page}>
        <section style={sx.shell}>
          <div style={sx.container}>
            {/* Title */}
            <div style={sx.header}>
              <div style={sx.kicker}>Contact</div>
              <h1 style={sx.h1}>Get in Touch</h1>
              <p style={sx.lead}>We’d love to hear from you.</p>
              <div style={sx.headerAccent} aria-hidden />
            </div>

            {/* Status banners (CSS :target controlled) */}
            <a id="sent" />
            <div className="banner success" style={sx.bannerSuccess}>
              Your message has been sent successfully. We’ll reply soon!
            </div>
            <a id="error" />
            <div className="banner error" style={sx.bannerError}>
              Something went wrong — please try again.
            </div>

            {/* Form card */}
            <div style={sx.card} className="reveal-up">
              {/* For production, replace action with your endpoint (e.g., /api/contact) and method="post".
                 Using action="#sent" lets the page show the success banner without JS. */}
              <form method="get" action="#sent" style={sx.form}>
                <div style={sx.fieldCol}>
                  <label style={sx.label}>Name</label>
                  <input className="field" style={sx.input} name="name" />
                </div>

                <div style={sx.fieldCol}>
                  <label style={sx.label}>Email</label>
                  <input className="field" style={sx.input} type="email" name="email" />
                </div>

                <div style={sx.fieldCol}>
                  <label style={sx.label}>Subject <span style={sx.muted}>(optional)</span></label>
                  <input className="field" style={sx.input} name="subject" />
                </div>

                <div style={sx.fieldCol}>
                  <label style={sx.label}>Message</label>
                  <textarea className="field" style={sx.textarea} rows={5} name="message" />
                </div>

                <button type="submit" style={sx.btnPrimary as React.CSSProperties}>
                  Send Message
                </button>
              </form>
            </div>

            {/* Simple alt contact */}
            <p style={sx.altLine}>
              Prefer email? <a href="mailto:hello@bftsc.dz" style={sx.link}>hello@bftsc.dz</a>
            </p>
          </div>
        </section>
      </main>

      {/* Minimal CSS for focus/motion/banners */}
      <style>{`
        :root{ --blue:#0B3D91; --blueDark:#082B69; --orange:#F5A300; --white:#FFFFFF; }
        @keyframes reveal-up{ from{opacity:0; transform:translateY(10px)} to{opacity:1; transform:none} }
        .reveal-up{ animation:reveal-up .6s ease both; }

        /* Input focus */
        .field:focus{
          outline: none;
          box-shadow: 0 0 0 3px rgba(11,61,145,.12);
          border-color: #9fb8e9 !important;
        }

        /* Banner visibility using :target (no JS) */
        .banner{ display:none; }
        #sent:target + .banner.success{ display:block; }
        #error:target + .banner.error{ display:block; }
      `}</style>
    </>
  );
}

/* ---------- Styles (BFTSC palette) ---------- */

const PALETTE = {
  blue: "#0B3D91",
  blueDark: "#082B69",
  orange: "#F5A300",
  white: "#FFFFFF",
};

const sx: Record<string, React.CSSProperties> = {
  page: {
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
    color: "#0F2038",
    background: PALETTE.white,
  },

  shell: { padding: "72px 0" },
  container: {
    maxWidth: 720,
    margin: "0 auto",
    padding: "0 20px",
  },

  header: { textAlign: "center", marginBottom: 16 },
  kicker: {
    display: "inline-block",
    padding: "6px 10px",
    borderRadius: 999,
    border: `1px solid ${PALETTE.blue}`,
    background: "#EAF0FF",
    color: PALETTE.blueDark,
    fontWeight: 900,
    letterSpacing: 0.3,
    fontSize: 12,
  },
  h1: { fontSize: 36, margin: "10px 0 6px" },
  lead: { fontSize: 16, opacity: 0.9, margin: 0 },
  headerAccent: {
    height: 6,
    width: 140,
    margin: "12px auto 0",
    borderRadius: 999,
    background: `linear-gradient(90deg, ${PALETTE.blue}, ${PALETTE.orange})`,
  },

  /* Banners */
  bannerBase: {
    padding: "10px 12px",
    borderRadius: 12,
    margin: "10px 0",
    fontWeight: 700,
  },
  bannerSuccess: {
    padding: "10px 12px",
    borderRadius: 12,
    margin: "10px 0",
    fontWeight: 700,
    background: "rgba(245,163,0,0.10)",
    border: `1px solid ${PALETTE.orange}`,
    color: "#4a3a00",
  },
  bannerError: {
    padding: "10px 12px",
    borderRadius: 12,
    margin: "10px 0",
    fontWeight: 700,
    background: "rgba(11,61,145,0.08)",
    border: `1px solid ${PALETTE.blue}`,
    color: PALETTE.blueDark,
  },

  /* Card and form */
  card: {
    background: PALETTE.white,
    border: "1px solid #E6EEF9",
    borderRadius: 16,
    padding: 18,
    boxShadow: "0 10px 28px rgba(0,0,0,0.06)",
  },
  form: { display: "grid", gap: 12 },
  fieldCol: { display: "grid", gap: 6 },
  label: { fontSize: 12, fontWeight: 800, opacity: 0.9 },
  muted: { opacity: 0.65, fontWeight: 600, fontSize: 12 },

  input: {
    padding: "12px 14px",
    borderRadius: 10,
    border: "1px solid #CDDDF3",
    background: "#FFFFFF",
    width: "100%",
    fontSize: 14,
  },
  textarea: {
    padding: "12px 14px",
    borderRadius: 10,
    border: "1px solid #CDDDF3",
    background: "#FFFFFF",
    width: "100%",
    fontSize: 14,
    resize: "vertical",
  },

  btnPrimary: {
    background: PALETTE.orange,
    color: PALETTE.white,
    padding: "12px 16px",
    borderRadius: 12,
    fontWeight: 900,
    textDecoration: "none",
    border: "none",
    cursor: "pointer",
    width: "100%",
  },

  altLine: { textAlign: "center", marginTop: 14, opacity: 0.9 },
  link: { color: PALETTE.blue, textDecoration: "none", fontWeight: 800 },
};
