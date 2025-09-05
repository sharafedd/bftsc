// src/app/partners/page.tsx
// Server-safe (no event handlers). Brand: Blue primary, touch of Orange, White.

export default function PartnersPage() {
  return (
    <>
      <main style={sx.page}>
        {/* 1) INTRO */}
        <Section kicker="Partners" title="Let’s Build Together">
          <p style={sx.lead}>
            We believe innovation is built on collaboration. By partnering with us, you’re not just joining a project —
            you’re helping shape the future of digital payments.
          </p>
        </Section>

        {/* 2) WHY PARTNER WITH US */}
        <Banded kicker="Value" title="Why Partner With Us">
          <Grid3>
            <ValueCard title="Access to a growing market">
              Work with a team focused on practical, real-world payments across Algeria.
            </ValueCard>
            <ValueCard title="Shared visibility & co-branding">
              Thoughtful placement across programs, launches, and materials.
            </ValueCard>
            <ValueCard title="Early product influence">
              Provide feedback that guides features and integrations.
            </ValueCard>
            <ValueCard title="Technical & operational support">
              From integration guidance to rollout playbooks.
            </ValueCard>
            <ValueCard title="Long-term relationship">
              A steady roadmap, clear communication, and reliable execution.
            </ValueCard>
          </Grid3>
        </Banded>

        {/* 3) WHAT WE OFFER TO PARTNERS */}
        <Section kicker="Offer" title="What We Offer">
          <Grid3>
            <OfferCard title="Brand exposure">
              Your logo featured (site, materials, and program moments) with clear context.
            </OfferCard>
            <OfferCard title="Joint projects">
              Co-develop services, pilots, or campaigns aligned to real demand.
            </OfferCard>
            <OfferCard title="Analytics & insights">
              Access to high-level dashboards and reporting that support decisions.
            </OfferCard>
            <OfferCard title="Growth opportunities">
              Be part of our expansion roadmap and regional collaborations.
            </OfferCard>
          </Grid3>
        </Section>

        {/* 4) WHO WE WORK WITH */}
        <Banded kicker="Fit" title="Who We Work With">
          <Grid3>
            <Tile title="Universities & research institutions">
              Campus programs, pilots, and community initiatives.
            </Tile>
            <Tile title="Merchants & retailers">
              Everyday acceptance — cafés, bookstores, gyms, services.
            </Tile>
            <Tile title="Payment service providers">
              Infrastructure alignment and local compatibility.
            </Tile>
            <Tile title="Hardware & technology suppliers">
              Contactless, QR, and lightweight terminals.
            </Tile>
          </Grid3>

          {/* Logos row (placeholders if you have none yet) */}
          <div style={{ marginTop: 16 }}>
            <div style={sx.logoNote}>We’re currently onboarding our first partners in retail & academia.</div>
            <div style={sx.logoRow}>
              <LogoBox />
              <LogoBox />
              <LogoBox />
              <LogoBox />
              <LogoBox />
            </div>
          </div>
        </Banded>

        {/* 5) TESTIMONIALS / ENDORSEMENTS */}
        <Section kicker="Voices" title="What Partners Say">
          <Grid2>
            <QuoteCard
              quote="We’re excited to explore how Karta can bring digital payments to our campus."
              source="University of Oran"
            />
            <QuoteCard
              quote="The team is thoughtful, responsive, and focused on real merchant needs."
              source="Local Merchant (Pilot)"
            />
          </Grid2>
        </Section>

        {/* 6) HOW PARTNERSHIP WORKS */}
        <Banded kicker="Process" title="How Partnership Works">
          <Timeline>
            <StepCard n="1" title="Get in touch">
              Share your focus and what success looks like.
            </StepCard>
            <StepCard n="2" title="Explore collaboration">
              Align on scope — integration, pilot, or co-branding.
            </StepCard>
            <StepCard n="3" title="Launch a pilot">
              Ship a clear, contained initiative with defined outcomes.
            </StepCard>
            <StepCard n="4" title="Scale together">
              Expand based on results and shared roadmap.
            </StepCard>
          </Timeline>
        </Banded>

        {/* 7) CALL TO ACTION */}
        <Section kicker="Next" title="Let’s Build the Future Together">
          <p style={sx.bodyCenter}>
            We’re open to partnerships with companies, institutions, and innovators who share our vision.
          </p>
          <div style={sx.ctaRowCenter}>
            <a href="#partner-form" style={sx.btnPrimary}>Become a Partner</a>
            <a href="mailto:hello@bftsc.dz" style={sx.btnGhost}>Email Us</a>
          </div>

          {/* Simple contact form (static, no JS) */}
          <div id="partner-form" style={{ marginTop: 18 }}>
            <div style={sx.formCard}>
              <form method="post" action="#" style={sx.formGrid}>
                <div>
                  <label style={sx.label}>Name</label>
                  <input style={sx.input} name="name" />
                </div>
                <div>
                  <label style={sx.label}>Company</label>
                  <input style={sx.input} name="company" />
                </div>
                <div>
                  <label style={sx.label}>Email</label>
                  <input style={sx.input} type="email" name="email" />
                </div>
                <div style={{ gridColumn: "1 / -1" }}>
                  <label style={sx.label}>Message</label>
                  <textarea style={sx.textarea} rows={4} name="message" />
                </div>
                <div style={{ gridColumn: "1 / -1" }}>
                  <button type="submit" style={sx.btnPrimary as React.CSSProperties}>Send</button>
                </div>
              </form>
            </div>
          </div>
        </Section>
      </main>

      {/* minimal motion for polish */}
      <style>{`
        @keyframes reveal-up{ from{opacity:0; transform:translateY(12px)} to{opacity:1; transform:none} }
        .reveal-up{ animation:reveal-up .6s ease both; }
      `}</style>
    </>
  );
}

/* ======= Small presentational blocks ======= */
function Section({
  kicker, title, children,
}: { kicker?: string; title: string; children: React.ReactNode }) {
  return (
    <section style={sx.sectionLight}>
      <div style={sx.container}>
        <Header kicker={kicker} title={title} />
        <div style={{ marginTop: 12 }} className="reveal-up">{children}</div>
      </div>
    </section>
  );
}

function Banded({
  kicker, title, children,
}: { kicker?: string; title: string; children: React.ReactNode }) {
  return (
    <section style={sx.banded}>
      <div style={sx.container}>
        <Header kicker={kicker} title={title} />
        <div style={{ marginTop: 12 }} className="reveal-up">{children}</div>
      </div>
    </section>
  );
}

function Header({ kicker, title }: { kicker?: string; title: string }) {
  return (
    <div style={sx.headerBlock}>
      {kicker ? <div style={sx.kicker}>{kicker}</div> : null}
      <h2 style={sx.h2}>{title}</h2>
      <div style={sx.headerAccent} aria-hidden />
    </div>
  );
}

function Grid2({ children }: { children: React.ReactNode }) {
  return <div style={sx.grid2}>{children}</div>;
}
function Grid3({ children }: { children: React.ReactNode }) {
  return <div style={sx.grid3}>{children}</div>;
}

function Tile({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={sx.tile}>
      <div style={sx.phIcon} aria-hidden />
      <div style={sx.tileTitle}>{title}</div>
      <div style={sx.tileBody}>{children}</div>
    </div>
  );
}

function ValueCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={sx.valueCard}>
      <div style={sx.valueHead}>{title}</div>
      <div style={sx.valueBody}>{children}</div>
    </div>
  );
}

function OfferCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={sx.offerCard}>
      <div style={sx.offerRow}>
        <div style={sx.offerIcon} aria-hidden>🏷️</div>
        <div style={sx.offerTitle}>{title}</div>
      </div>
      <div style={sx.offerBody}>{children}</div>
    </div>
  );
}

function LogoBox() {
  return <div style={sx.logoBox} className="reveal-up" aria-label="Partner logo placeholder" />;
}

function QuoteCard({ quote, source }: { quote: string; source: string }) {
  return (
    <div style={sx.quote}>
      <div style={sx.quoteMark} aria-hidden>“</div>
      <div style={sx.quoteText}>{quote}</div>
      <div style={sx.quoteSrc}>— {source}</div>
    </div>
  );
}

function StepCard({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <div style={sx.stepCard}>
      <div style={sx.stepBadge}>{n}</div>
      <div>
        <div style={sx.stepTitle}>{title}</div>
        <div style={sx.stepBody}>{children}</div>
      </div>
    </div>
  );
}

function Timeline({ children }: { children: React.ReactNode }) {
  return <div style={sx.timeline}>{children}</div>;
}

/* ======= Styles (Blue + a touch of Orange) ======= */

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

  container: { maxWidth: 1180, margin: "0 auto", padding: "0 20px" },
  sectionLight: { padding: "64px 0", background: PALETTE.white },
  banded: {
    padding: "64px 0",
    background: `linear-gradient(180deg, #F4F7FF 0%, #F9FBFF 100%)`,
    borderTop: `3px solid ${PALETTE.blue}`,
    borderBottom: `3px solid ${PALETTE.blue}`,
  },

  /* Headers */
  headerBlock: { position: "relative", paddingBottom: 10 },
  kicker: {
    display: "inline-block",
    fontSize: 12,
    fontWeight: 900,
    letterSpacing: 0.4,
    textTransform: "uppercase",
    color: PALETTE.blueDark,
    background: "#EAF0FF",
    border: `1px solid ${PALETTE.blue}`,
    borderRadius: 999,
    padding: "2px 8px",
    marginBottom: 6,
  },
  h2: { fontSize: 28, margin: "4px 0 0" },
  lead: { fontSize: 18, lineHeight: 1.7, maxWidth: 800 },
  body: { lineHeight: 1.7 },
  headerAccent: {
    height: 6,
    width: 120,
    marginTop: 8,
    borderRadius: 999,
    background: `linear-gradient(90deg, ${PALETTE.blue}, ${PALETTE.orange})`,
  },

  /* Grids */
  grid2: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 16 },
  grid3: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16 },

  /* Cards & tiles */
  tile: {
    background: PALETTE.white,
    border: `1px solid #E6EEF9`,
    borderLeft: `5px solid ${PALETTE.blue}`,
    borderRadius: 12,
    padding: 16,
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  },
  phIcon: {
    width: 44,
    height: 44,
    borderRadius: 10,
    background: `linear-gradient(135deg, ${PALETTE.blue} 0%, ${PALETTE.blueDark} 100%)`,
    opacity: 0.14,
    marginBottom: 8,
  },
  tileTitle: { fontWeight: 900, marginBottom: 6 },
  tileBody: { lineHeight: 1.7 },

  valueCard: {
    background: PALETTE.white,
    border: `1px solid #E6EEF9`,
    borderRadius: 12,
    padding: 16,
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  },
  valueHead: { fontWeight: 900, color: PALETTE.blueDark, marginBottom: 6 },
  valueBody: { lineHeight: 1.7 },

  offerCard: {
    background: "#F9FBFF",
    border: `1px solid #E6EEF9`,
    borderRadius: 12,
    padding: 16,
  },
  offerRow: { display: "flex", alignItems: "center", gap: 10, marginBottom: 6 },
  offerIcon: { fontSize: 18 },
  offerTitle: { fontWeight: 900 },
  offerBody: { lineHeight: 1.7 },

  logoNote: { fontSize: 13, opacity: 0.9, marginBottom: 8 },
  logoRow: { display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 12 },
  logoBox: {
    height: 48,
    borderRadius: 10,
    background: "repeating-linear-gradient(135deg,#EFF5FF,#EFF5FF 12px,#FFFFFF 12px,#FFFFFF 24px)",
    border: "1px solid #E6EEF9",
  },

  /* Quotes */
  quote: {
    background: PALETTE.white,
    border: `1px solid #E6EEF9`,
    borderRadius: 12,
    padding: 16,
    boxShadow: "0 4px 10px rgba(0,0,0,0.04)",
  },
  quoteMark: { fontSize: 40, lineHeight: 1, color: PALETTE.blue, opacity: 0.22 },
  quoteText: { marginTop: 6, fontSize: 18, lineHeight: 1.6 },
  quoteSrc: { marginTop: 6, fontWeight: 700, color: PALETTE.blueDark },

  /* Process */
  timeline: { display: "grid", gap: 12 },
  stepCard: {
    display: "grid",
    gridTemplateColumns: "auto 1fr",
    gap: 12,
    padding: 12,
    background: "#F9FBFF",
    borderRadius: 10,
    borderLeft: `4px solid ${PALETTE.blue}`,
  },
  stepBadge: {
    fontWeight: 900,
    minWidth: 36,
    textAlign: "center",
    padding: "6px 8px",
    color: PALETTE.white,
    background: PALETTE.blue,
    borderRadius: 8,
  },
  stepTitle: { fontWeight: 800, marginBottom: 2 },
  stepBody: { opacity: 0.95 },

  /* CTA + Form */
  ctaRowCenter: { display: "flex", justifyContent: "center", gap: 12, marginTop: 10, flexWrap: "wrap" },
  btnPrimary: {
    background: PALETTE.orange,
    color: PALETTE.white,
    padding: "12px 16px",
    borderRadius: 12,
    fontWeight: 900,
    textDecoration: "none",
    display: "inline-block",
  },
  btnGhost: {
    background: "rgba(11,61,145,0.06)",
    color: PALETTE.blue,
    padding: "12px 16px",
    borderRadius: 12,
    fontWeight: 800,
    textDecoration: "none",
    border: `1px solid ${PALETTE.blue}`,
    display: "inline-block",
  },
  formCard: {
    background: PALETTE.white,
    border: `1px solid #E6EEF9`,
    borderRadius: 14,
    padding: 16,
    boxShadow: "0 8px 22px rgba(0,0,0,0.05)",
  },
  formGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 12 },
  label: { fontSize: 12, fontWeight: 800, opacity: 0.9 },
  input: {
    padding: "10px 12px",
    borderRadius: 8,
    border: "1px solid #CDDDF3",
    background: "#FFFFFF",
    width: "100%",
  },
  textarea: {
    padding: "10px 12px",
    borderRadius: 8,
    border: "1px solid #CDDDF3",
    background: "#FFFFFF",
    width: "100%",
  },

  /* Helpers */
  bodyCenter: { textAlign: "center" },
};
