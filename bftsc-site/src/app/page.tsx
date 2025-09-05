// src/app/bftsc/page.tsx
// Server-safe (no event handlers).
// Brand palette: Blue primary, a little Orange, plus White.

export default function BFTSCPage() {
  return (
    <>
      <main style={sx.page}>
        {/* ========== HERO ========== */}
        <section style={sx.hero}>
          <div style={sx.container}>
            <div style={sx.heroGrid} className="stagger">
              {/* Copy */}
              <div className="hero-text reveal-up">
                <div style={sx.badge}>BFTSC</div>
                <h1 style={sx.h1}>Smart Payments Built in Algeria</h1>
                <p style={sx.lead}>
                  We’re building a future where payments are seamless, digital, and accessible to everyone.
                </p>
                <div style={sx.ctaRow}>
                  <a href="#services" style={sx.btnPrimary} data-btn>Our Services</a>
                  <a href="#contact" style={sx.btnGhost} data-btn>Contact Us</a>
                </div>

                <div style={sx.heroHiRow} className="stagger">
                  <HeroPill title="Secure by design" />
                  <HeroPill title="Merchant-friendly" />
                  <HeroPill title="Built for Algeria" />
                </div>
              </div>

              {/* Visual */}
              <div style={{ position: "relative" }} className="hero-visual reveal-up">
                <div style={sx.heroArtWrap}>
                  {/* subtle stacked frames */}
                  <div style={mix(sx.heroFrame, sx.frame1)} aria-hidden />
                  <div style={mix(sx.heroFrame, sx.frame2)} aria-hidden />
                  <div style={mix(sx.heroFrame, sx.frame3)} aria-hidden />

                  {/* NEW: white panel card */}
                  <div style={sx.heroPanel}>
                    <img
                      src="/bftsc/bftsc-ambient.png"   // or /bftsc/bftsc-logo.jpg
                      alt="BFTSC ambient visual"
                      style={sx.heroShotInPanel}
                      className="tilt"
                    />
                  </div>

                  {/* corner badge */}
                  <img
                    src="/bftsc/bftsc-logo.jpg"
                    alt="BFTSC logo"
                    style={sx.heroBadge}
                    className="float"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* marquee ribbon */}
          <div style={sx.heroRibbonWrap}>
            <div className="marquee">
              <div className="marquee__track">
                {[
                  "Payments",
                  "Security",
                  "Reliability",
                  "Insights",
                  "Partnerships",
                  "Innovation",
                ]
                  .concat([
                    "Payments",
                    "Security",
                    "Reliability",
                    "Insights",
                    "Partnerships",
                    "Innovation",
                  ])
                  .map((t, i) => (
                    <span key={i} style={sx.ribbonChip}>
                      {t}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========== KARTA PROGRAM ADD ========== */}
        <Section id="karta" kicker="Program" title="Karta Innovation Program">
          <div style={sx.kartaPromo}>
            <div className="reveal-up">
              <h3 style={sx.h3}>A practical step toward smarter payments</h3>
              <p style={sx.body}>
                Karta is our closed-loop payment initiative tailored for high-frequency environments.
                Simple for people, straightforward for merchants, and proudly local.
              </p>
              <div style={sx.ctaRow}>
                <a href="/karta" style={sx.btnPrimary} data-btn>Explore Karta</a>
                <a href="#contact" style={sx.btnGhost} data-btn>Partner with us</a>
              </div>
            </div>
            <div style={sx.kartaCard} className="lift reveal-up">
              <img src="/karta/karta-hero.png" alt="Karta preview" style={sx.kartaImg} />
            </div>
          </div>
        </Section>

        {/* ========== ABOUT US ========== */}
        <Banded id="about" kicker="About" title="Who We Are">
          <Grid3>
            <Tile title="Our Story">
              Founded to make everyday payments simpler and more trustworthy, BFTSC blends engineering with thoughtful product craft.
            </Tile>
            <Tile title="Vision & Mission">
              <b>Vision:</b> Paying and getting paid should feel effortless. <br />
              <b>Mission:</b> Build reliable, human-centered payment experiences from Algeria to the world.
            </Tile>
            <Tile title="Our Edge">
              Local roots, real-world focus, and a culture of shipping cohesive products — not complexity.
            </Tile>
          </Grid3>
        </Banded>

        {/* ========== WHAT WE DO (SERVICES) ========== */}
        <Section id="services" kicker="Services" title="What We Do">
          <Grid3>
            <ServiceCard title="Digital payment solutions">Wallets, acceptance flows, and integrations.</ServiceCard>
            <ServiceCard title="Contactless cards & POS">Tap, scan, and lightweight terminals.</ServiceCard>
            <ServiceCard title="Merchant analytics dashboards">Clear reporting to support better decisions.</ServiceCard>
            <ServiceCard title="Custom fintech services">Tailored builds for partners and programs.</ServiceCard>
            <ServiceCard title="Program design & ops">Playbooks for launches and ongoing success.</ServiceCard>
            <ServiceCard title="Advisory & enablement">From architecture to rollout readiness.</ServiceCard>
          </Grid3>
        </Section>

        {/* ========== PRODUCTS ========== */}
        <Banded id="products" kicker="Products" title="Products">
          <Grid3>
            <ProductCard title="Karta Wallet" note="Available" img="/karta/karta-banner.png">
              A simple wallet experience for frequent, everyday payments.
            </ProductCard>
            <ProductCard title="BFTSC Merchant" note="Pilot" img="/bftsc/bftsc-ambient.png">
              Acceptance, settlement preferences, and essential reporting.
            </ProductCard>
            <ProductCard title="Insights" note="Coming soon">
              Lightweight dashboards for volume, peaks, repeats, and trends.
            </ProductCard>
          </Grid3>
        </Banded>

        {/* ========== VALUE PROP ========== */}
        <Section id="value" kicker="Value" title="Why Choose BFTSC">
          <Grid3>
            <ValueCard title="Secure & Reliable">
              Privacy-minded design, predictable performance, and clear settlement.
            </ValueCard>
            <ValueCard title="Scalable Technology">
              Designed to grow with usage — without added complexity.
            </ValueCard>
            <ValueCard title="Built for Algeria & Beyond">
              Local context with global standards and an inclusive brand.
            </ValueCard>
          </Grid3>
        </Section>

        {/* ========== TEAM ========== */}
        <Banded id="team" kicker="People" title="Our Team">
          <Grid3>
            <PersonCard name="A. Name" role="Co-founder / Product" />
            <PersonCard name="B. Name" role="Co-founder / Engineering" />
            <PersonCard name="C. Name" role="Operations & Partnerships" />
          </Grid3>
          <p style={sx.bodyCenter} className="reveal-up">A team of innovators from Algeria & the UK.</p>
        </Banded>

        {/* ========== PARTNERS ========== */}
        <Section id="partners" kicker="Trust" title="Our Clients & Partners">
          <div style={sx.logoRow} className="stagger">
            <div style={sx.logoBox} className="stripe" aria-label="Partner logo placeholder" />
            <div style={sx.logoBox} className="stripe" aria-label="Partner logo placeholder" />
            <div style={sx.logoBox} className="stripe" aria-label="Partner logo placeholder" />
            <div style={sx.logoBox} className="stripe" aria-label="Partner logo placeholder" />
            <div style={sx.logoBox} className="stripe" aria-label="Partner logo placeholder" />
          </div>
          <p style={sx.bodyCenter}>Trusted by professionals in fintech & academia.</p>
        </Section>

        {/* ========== JOURNEY ========== */}
        <Banded id="journey" kicker="Journey" title="Our Journey">
          <Timeline>
            <Milestone step="1" title="Founded">Set out to simplify everyday payments.</Milestone>
            <Milestone step="2" title="Early pilots">Validated experiences in high-frequency settings.</Milestone>
            <Milestone step="3" title="Karta program">Focused initiative for practical local impact.</Milestone>
            <Milestone step="4" title="Partnerships">Working with aligned organizations and merchants.</Milestone>
          </Timeline>
        </Banded>

        {/* ========== TESTIMONIALS ========== */}
        <Section id="testimonials" kicker="Feedback" title="Testimonials">
          <QuoteCard
            quote="BFTSC made our payment flow feel effortless — and our queues shorter."
            source="Operations Lead, Campus Vendor"
          />
        </Section>

        {/* ========== NEWS ========== */}
        <Banded id="news" kicker="Updates" title="News">
          <Grid2>
            <NewsCard title="Pilot expansion">
              We’re broadening our pilot footprint with select partners.
            </NewsCard>
            <NewsCard title="Program call">
              Interested communities can reach out to explore collaboration.
            </NewsCard>
          </Grid2>
        </Banded>

        {/* ========== CAREERS & INVEST ========== */}
        <Section id="work" kicker="Join" title="Careers / Join Us">
          <div style={sx.split2}>
            {/* Careers panel */}
            <div style={sx.panel} className="lift reveal-up">
              <h3 style={sx.h3}>Careers</h3>
              <p style={sx.body}>
                We’re always looking for people who love building useful, well-crafted products.
              </p>

              <div style={sx.badgeRow}>
                <span style={sx.badgeSm}>Product</span>
                <span style={sx.badgeSm}>Engineering</span>
                <span style={sx.badgeSm}>Operations</span>
                <span style={sx.badgeSm}>Partnerships</span>
              </div>

              <a href="#contact" style={sx.btnPrimary} data-btn>See Open Roles</a>
            </div>

            {/* Invest panel */}
            <div style={sx.panel} className="lift reveal-up">
              <h3 style={sx.h3}>Invest in Us</h3>
              <p style={sx.body}>
                If you’re exploring fintech in North Africa, let’s talk.
              </p>
              <a href="#contact" style={sx.btnGhost} data-btn>Request Pitch Deck</a>
            </div>
          </div>
        </Section>

        {/* ========== CONTACT ========== */}
        <section id="contact" style={sx.contact}>
          <div style={sx.container}>
            <div style={sx.contactGrid} className="stagger">
              <div className="reveal-up">
                <h3 style={sx.h3}>Contact BFTSC</h3>
                <p style={sx.body}>Email or send us a note — we’ll get back quickly.</p>
                <div style={sx.linkRow}>
                  <a href="mailto:hello@bftsc.dz" style={sx.linkBox} data-btn>hello@bftsc.dz</a>
                  <a href="tel:+213000000000" style={sx.linkBox} data-btn>+213 ••• ••• •••</a>
                </div>
                <p style={{ opacity: 0.9, marginTop: 10 }}>Algiers · Oran · London</p>
              </div>
              <div style={sx.formCard} className="lift reveal-up">
                {/* Static form (no JS) */}
                <form method="post" action="#" style={sx.form}>
                  <label style={sx.label}>Name</label>
                  <input style={sx.input} name="name" />
                  <label style={sx.label}>Email</label>
                  <input style={sx.input} type="email" name="email" />
                  <label style={sx.label}>Message</label>
                  <textarea style={sx.textarea} rows={4} name="message" />
                  <button type="submit" style={sx.btnPrimary as React.CSSProperties}>Send</button>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* No footer for a clean end */}
      </main>

      {/* ====== CSS animations (palette-safe) ====== */}
      <style>{`
        :root{ --blue:#0B3D91; --blueDark:#082B69; --orange:#F5A300; --white:#FFFFFF; }
        @keyframes reveal-up{ from{opacity:0; transform:translateY(12px)} to{opacity:1; transform:none} }
        @keyframes float{ 0%,100%{ transform:translateY(0)} 50%{ transform:translateY(-6px)} }
        @keyframes tilt{ 0%,100%{ transform:rotate(-4deg) translateY(0)} 50%{ transform:rotate(-4deg) translateY(-8px)} }
        @keyframes marquee{ from{ transform:translateX(0)} to{ transform:translateX(-50%)} }
        @keyframes stripeMove{ 0%{ background-position:0 0 } 100%{ background-position:56px 0 } }

        .reveal-up{ animation:reveal-up .7s ease both; }
        .stagger > *{ animation:reveal-up .7s ease both; }
        .stagger > *:nth-child(2){ animation-delay:.06s } .stagger > *:nth-child(3){ animation-delay:.12s }
        .stagger > *:nth-child(4){ animation-delay:.18s } .stagger > *:nth-child(5){ animation-delay:.24s }

        .float{ animation:float 6s ease-in-out infinite; }
        .tilt{ animation:tilt 7s ease-in-out infinite; }

        .marquee{ overflow:hidden; }
        .marquee__track{ width:200%; display:flex; gap:12px; animation:marquee 28s linear infinite; }

        .lift{ transition:transform .2s ease, box-shadow .2s ease; }
        .lift:hover{ transform:translateY(-4px); box-shadow:0 12px 28px rgba(0,0,0,.12); }

        .stripe{ background-size:56px 56px; animation:stripeMove 14s linear infinite; }

        @media (prefers-reduced-motion: reduce){
          *{ animation-duration:.01ms !important; animation-iteration-count:1 !important; transition:none !important; }
        }
      `}</style>
    </>
  );
}

/* ---------- Small presentational pieces ---------- */
function HeroPill({ title }: { title: string }) {
  return (
    <div style={sx.heroPill} className="lift reveal-up">
      <div style={sx.dot} aria-hidden />
      <span>{title}</span>
    </div>
  );
}

function Section({
  id, kicker, title, children,
}: { id?: string; kicker?: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} style={sx.sectionLight}>
      <div style={sx.container}>
        <Header kicker={kicker} title={title} />
        <div style={{ marginTop: 12 }}>{children}</div>
      </div>
    </section>
  );
}

function Banded({
  id, kicker, title, children,
}: { id?: string; kicker?: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} style={sx.banded}>
      <div style={sx.container}>
        <Header kicker={kicker} title={title} />
        <div style={{ marginTop: 12 }}>{children}</div>
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
  return <div style={sx.grid2} className="stagger">{children}</div>;
}
function Grid3({ children }: { children: React.ReactNode }) {
  return <div style={sx.grid3} className="stagger">{children}</div>;
}

function Tile({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={sx.tile} className="lift reveal-up">
      <div style={sx.phWide} className="stripe" aria-hidden />
      <div style={sx.tileTitle}>{title}</div>
      <div style={sx.tileBody}>{children}</div>
    </div>
  );
}

function ServiceCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={sx.card} className="lift reveal-up">
      <div style={sx.phIcon} className="stripe" aria-hidden />
      <div style={sx.cardTitle}>{title}</div>
      <div style={sx.cardBody}>{children}</div>
    </div>
  );
}

function ProductCard({
  title, note, img, children,
}: { title: string; note?: string; img?: string; children: React.ReactNode }) {
  return (
    <div style={sx.card} className="lift reveal-up">
      <div style={sx.phWideImg}>
        {img ? <img src={img} alt={title} style={sx.imgFill} /> : <div style={sx.phWide} className="stripe" />}
      </div>
      <div style={sx.rowSpace}>
        <div style={sx.cardTitle}>{title}</div>
        {note ? <div style={sx.tag}>{note}</div> : null}
      </div>
      <div style={sx.cardBody}>{children}</div>
    </div>
  );
}

function ValueCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={sx.valueCard} className="lift reveal-up">
      <div style={sx.valueHead}>{title}</div>
      <div style={sx.valueBody}>{children}</div>
    </div>
  );
}

function PersonCard({ name, role }: { name: string; role: string }) {
  return (
    <div style={sx.person} className="lift reveal-up">
      <div style={sx.avatar} className="stripe" aria-hidden />
      <div style={sx.personName}>{name}</div>
      <div style={sx.personRole}>{role}</div>
    </div>
  );
}

function Milestone({
  step, title, children,
}: { step: string; title: string; children: React.ReactNode }) {
  return (
    <div style={sx.milestone} className="lift reveal-up">
      <div style={sx.step}>{step}</div>
      <div>
        <div style={sx.milestoneTitle}>{title}</div>
        <div style={sx.milestoneText}>{children}</div>
      </div>
    </div>
  );
}

function Timeline({ children }: { children: React.ReactNode }) {
  return <div style={sx.timeline} className="stagger">{children}</div>;
}

function QuoteCard({ quote, source }: { quote: string; source: string }) {
  return (
    <div style={sx.quote} className="lift reveal-up">
      <div style={sx.quoteMark} aria-hidden>“</div>
      <div style={sx.quoteText}>{quote}</div>
      <div style={sx.quoteSrc}>— {source}</div>
    </div>
  );
}

function NewsCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={sx.card} className="lift reveal-up">
      <div style={sx.cardTitle}>{title}</div>
      <div style={sx.cardBody}>{children}</div>
    </div>
  );
}

/* ---------- Styles ---------- */

const PALETTE = {
  blue: "#0B3D91",
  blueDark: "#082B69",
  orange: "#F5A300",
  white: "#FFFFFF",
};

const sx: Record<string, React.CSSProperties> = {
  page: {
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
    color: "#10233F",
    background: PALETTE.white,
  },

  container: { maxWidth: 1180, margin: "0 auto", padding: "0 20px" },

  /* HERO */
  hero: {
    color: PALETTE.white,
    background: `linear-gradient(135deg, ${PALETTE.blue} 0%, ${PALETTE.blue} 60%, ${PALETTE.blueDark} 140%)`,
    paddingTop: 72,
    paddingBottom: 84,
  },
  heroGrid: { display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: 28, alignItems: "center" },
  badge: {
    display: "inline-block",
    fontWeight: 900,
    letterSpacing: 0.3,
    padding: "6px 10px",
    borderRadius: 999,
    border: `1px solid rgba(255,255,255,0.7)`,
    background: "rgba(255,255,255,0.12)",
  },
  h1: { fontSize: 44, lineHeight: 1.1, margin: "10px 0 8px" },
  h2: { fontSize: 28, margin: "4px 0 0" },
  h3: { fontSize: 22, margin: "0 0 6px" },
  lead: { fontSize: 18, lineHeight: 1.7, maxWidth: 680 },
  body: { lineHeight: 1.7 },

  ctaRow: { display: "flex", gap: 12, marginTop: 16, flexWrap: "wrap" },
  btnPrimary: {
    background: PALETTE.orange,
    color: PALETTE.white,
    padding: "12px 16px",
    borderRadius: 12,
    fontWeight: 900,
    textDecoration: "none",
  },
  btnGhost: {
    background: "rgba(255,255,255,0.12)",
    color: PALETTE.white,
    padding: "12px 16px",
    borderRadius: 12,
    fontWeight: 700,
    textDecoration: "none",
    border: "1px solid rgba(255,255,255,0.5)",
  },

  heroHiRow: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 10, marginTop: 18 },
  heroPill: {
    display: "flex", alignItems: "center", gap: 8,
    background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.5)",
    borderRadius: 999, padding: "8px 12px", color: PALETTE.white, fontWeight: 700,
  },
  dot: { width: 8, height: 8, borderRadius: 999, background: PALETTE.orange },

  /* container for the hero visual stays the same */
  heroArtWrap: {
    position: "relative",
    width: "clamp(280px, 38vw, 560px)",
    aspectRatio: "4 / 3",
    margin: "0 auto",
  },

  /* stacked frames (unchanged) */
  heroFrame: {
    position: "absolute",
    inset: "-6% -5%",
    borderRadius: 26,
    border: "2px solid rgba(255,255,255,0.55)",
    pointerEvents: "none",
  },
  frame1: { transform: "rotate(-3deg)",  opacity: 0.85 },
  frame2: { transform: "rotate(2.8deg)", opacity: 0.55 },
  frame3: { transform: "rotate(-6deg)",  opacity: 0.35 },

  /* NEW: the white card panel behind the image */
  heroPanel: {
    position: "absolute",
    inset: 0,
    background: "#FFFFFF",
    borderRadius: 20,
    padding: 10,                               // creates the white border around the image
    boxShadow: "0 20px 56px rgba(0,0,0,0.18)",
    border: "1px solid rgba(255,255,255,0.8)", // thin outline to blend with hero
  },

  /* image inside the white panel */
  heroShotInPanel: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 14,
    border: "1px solid rgba(11,61,145,0.08)", // very soft inner border
    filter: "saturate(1.03) contrast(1.03)",
  },

  /* badge stays the same, but here for convenience */
  heroBadge: {
    position: "absolute",
    right: -12,
    bottom: -12,
    width: 110,
    height: 110,
    objectFit: "cover",
    borderRadius: 18,
    background: "#FFFFFF",
    border: "2px solid rgba(255,255,255,0.95)",
    padding: 6,
    boxShadow: "0 14px 34px rgba(0,0,0,0.22)",
  },

  heroRibbonWrap: {
    marginTop: 18, borderTop: `2px solid rgba(255,255,255,0.7)`,
    borderBottom: `2px solid rgba(255,255,255,0.7)`, background: "rgba(255,255,255,0.10)",
    padding: "8px 0",
  },
  ribbonChip: {
    display: "inline-block", padding: "6px 12px", borderRadius: 999,
    border: `1px solid rgba(255,255,255,0.7)`, color: PALETTE.white,
    background: "rgba(255,255,255,0.08)", fontWeight: 800, whiteSpace: "nowrap",
  } as React.CSSProperties,

  /* Section shells */
  sectionLight: { background: PALETTE.white, padding: "64px 0" },
  banded: {
    padding: "64px 0",
    background: `linear-gradient(180deg, #F4F7FF 0%, #F9FBFF 100%)`,
    borderTop: `3px solid ${PALETTE.blue}`, borderBottom: `3px solid ${PALETTE.blue}`,
  },

  /* Section headers */
  headerBlock: { position: "relative", paddingBottom: 10 },
  kicker: {
    display: "inline-block", fontSize: 12, fontWeight: 900, letterSpacing: 0.4, textTransform: "uppercase",
    color: PALETTE.blueDark, background: "#EAF0FF", border: `1px solid ${PALETTE.blue}`,
    borderRadius: 999, padding: "2px 8px", marginBottom: 6,
  },
  headerAccent: {
    height: 6, width: 120, marginTop: 8, borderRadius: 999,
    background: `linear-gradient(90deg, ${PALETTE.blue}, ${PALETTE.orange})`,
  },

  /* Grids */
  grid2: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 16 },
  grid3: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16 },

  /* Cards & tiles */
  tile: { background: PALETTE.white, borderLeft: `5px solid ${PALETTE.blue}`, borderRadius: 12, padding: 16, boxShadow: "0 4px 12px rgba(0,0,0,0.05)" },
  tileTitle: { fontWeight: 900, marginBottom: 6 },
  tileBody: { lineHeight: 1.7 },

  card: { background: PALETTE.white, borderRadius: 12, padding: 16, border: `1px solid #E6EEF9`, boxShadow: "0 4px 12px rgba(0,0,0,0.05)" },
  cardTitle: { fontWeight: 800, marginBottom: 6 },
  cardBody: { lineHeight: 1.7 },
  phIcon: { width: 44, height: 44, borderRadius: 10, background: `linear-gradient(135deg, ${PALETTE.blue} 0%, ${PALETTE.blueDark} 100%)`, opacity: 0.12, marginBottom: 8 },
  phWide: { width: "100%", aspectRatio: "16/9", borderRadius: 10, background: "#EFF5FF" },
  phWideImg: { width: "100%", aspectRatio: "16/9", borderRadius: 10, overflow: "hidden", border: "1px solid #E6EEF9", marginBottom: 8 },
  imgFill: { width: "100%", height: "100%", objectFit: "cover" },
  rowSpace: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 },
  tag: { fontSize: 12, fontWeight: 900, color: PALETTE.white, background: PALETTE.blue, padding: "4px 8px", borderRadius: 999 } as React.CSSProperties,

  valueCard: { background: "#F9FBFF", border: `1px solid #E6EEF9`, borderRadius: 12, padding: 16 },
  valueHead: { fontWeight: 900, marginBottom: 6, color: PALETTE.blueDark },
  valueBody: { lineHeight: 1.7 },

  person: { background: PALETTE.white, border: `1px solid #E6EEF9`, borderRadius: 12, padding: 16, textAlign: "center" },
  avatar: { width: 80, height: 80, borderRadius: 999, background: "#EFF5FF", margin: "0 auto 8px" },
  personName: { fontWeight: 900 },
  personRole: { opacity: 0.85, fontSize: 14, marginTop: 4 },

  logoRow: { display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 12 },
  logoBox: { height: 48, borderRadius: 10, background: "repeating-linear-gradient(135deg,#EFF5FF,#EFF5FF 12px,#FFFFFF 12px,#FFFFFF 24px)", border: "1px solid #E6EEF9" },

  /* Timeline */
  timeline: { display: "grid", gap: 12 },
  milestone: { display: "grid", gridTemplateColumns: "auto 1fr", gap: 12, padding: 12, background: "#F9FBFF", borderRadius: 10, borderLeft: `4px solid ${PALETTE.blue}` },
  step: { fontWeight: 900, minWidth: 36, textAlign: "center", padding: "6px 8px", color: PALETTE.white, background: PALETTE.blue, borderRadius: 8 },
  milestoneTitle: { fontWeight: 800, marginBottom: 2 },
  milestoneText: { opacity: 0.95 },

  /* Quote */
  quote: { background: PALETTE.white, border: `1px solid #E6EEF9`, borderRadius: 12, padding: 16 },
  quoteMark: { fontSize: 40, lineHeight: 1, color: PALETTE.blue, opacity: 0.2 },
  quoteText: { marginTop: 6, fontSize: 18, lineHeight: 1.6 },
  quoteSrc: { marginTop: 6, fontWeight: 700, color: PALETTE.blueDark },

  /* Karta promo */
  kartaPromo: { display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 18, alignItems: "center" },
  kartaCard: { background: "#F9FBFF", border: `1px solid #E6EEF9`, borderRadius: 12, padding: 10 },
  kartaImg: { width: "100%", borderRadius: 8 },

  /* Helpers */
  bodyCenter: { textAlign: "center", marginTop: 10 },
  split2: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 16, alignItems: "start" },

  /* Contact */
  contact: { background: `linear-gradient(135deg, ${PALETTE.blue} 0%, ${PALETTE.blue} 65%, ${PALETTE.blueDark} 150%)`, color: PALETTE.white, padding: "64px 0" },
  contactGrid: { display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 18, alignItems: "start" },
  linkRow: { display: "flex", gap: 10, flexWrap: "wrap", marginTop: 10 },
  linkBox: { display: "inline-block", background: PALETTE.white, color: PALETTE.blue, padding: "10px 14px", borderRadius: 10, fontWeight: 900, textDecoration: "none" },

  formCard: { background: "rgba(255,255,255,0.12)", border: `2px solid rgba(255,255,255,0.8)`, borderRadius: 12, padding: 12 },
  form: { display: "grid", gap: 8 },
  label: { fontSize: 12, fontWeight: 800, opacity: 0.9 },
  input: { padding: "10px 12px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.7)", background: "rgba(255,255,255,0.95)" },
  textarea: { padding: "10px 12px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.7)", background: "rgba(255,255,255,0.95)" },

  panel: {
    background: "#FFFFFF",
    border: "1px solid #E6EEF9",
    borderRadius: 14,
    padding: 18,
    boxShadow: "0 8px 22px rgba(0,0,0,0.05)",
  },

  badgeRow: { display: "flex", gap: 8, flexWrap: "wrap", margin: "8px 0 14px" },
  badgeSm: {
    display: "inline-block",
    padding: "6px 10px",
    borderRadius: 999,
    background: "#F4F7FF",
    border: "1px solid #E6EEF9",
    fontWeight: 800,
    fontSize: 12,
    color: "#082B69",
  }
};

/* tiny util */
function mix<T extends object>(...o: T[]): T { return Object.assign({}, ...o); }
