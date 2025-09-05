// src/app/karta/page.tsx
// Server-safe (no event handlers). Palette strictly: orange, cream, white.

export default function KartaPage() {
  return (
    <>
      <main style={sx.page}>
        {/* HERO */}
        <section
          style={{ ...sx.sectionPad, ...sx.hero, overflow: "hidden" }}
          className="anim-bg-pan k-hero"
        >
          <div style={sx.container}>
            <div style={sx.heroGrid} className="stagger">
              {/* Left copy */}
              <div className="hero-text reveal-up">
                <div style={sx.pill}>Karta Innovation Project</div>
                <h1 style={sx.h1}>Smart • Simple • Algerian</h1>
                <p style={sx.lead}>
                  <b>Karta</b> is a closed-loop payment layer for everyday life in Algeria — fast for people,
                  effortless for merchants, built to grow with the communities that use it.
                </p>
                <div style={sx.ctaRow}>
                  <a href="#contact" style={sx.btnPrimary} data-btn>Partner / Invest</a>
                  <a href="#join" style={sx.btnGhost} data-btn>Join the project</a>
                </div>

                {/* Hero highlights (no strategy, just value cues) */}
                <div style={sx.heroHiRow} className="stagger">
                  <div style={sx.heroHi} className="lift reveal-up">
                    <div style={sx.phIcon} className="stripe-slide" aria-hidden />
                    <div style={sx.heroHiText}>
                      <div style={sx.heroHiHead}>Tap • Scan • QR</div>
                      <div style={sx.heroHiSub}>Modern wallet experience</div>
                    </div>
                  </div>
                  <div style={sx.heroHi} className="lift reveal-up">
                    <div style={sx.phIcon} className="stripe-slide" aria-hidden />
                    <div style={sx.heroHiText}>
                      <div style={sx.heroHiHead}>Reliable</div>
                      <div style={sx.heroHiSub}>Offline-tolerant acceptance</div>
                    </div>
                  </div>
                  <div style={sx.heroHi}  className="lift reveal-up">
                    <div style={sx.phIcon} className="stripe-slide" aria-hidden />
                    <div style={sx.heroHiText}>
                      <div style={sx.heroHiHead}>Merchant-Friendly</div>
                      <div style={sx.heroHiSub}>Simple setup & clear ops</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right visual */}
              <div style={{ position: "relative" }} className="hero-visual reveal-up">
                <div style={sx.heroArtWrap}>
                  {/* Depth cards behind */}
                  <div style={sx.heroGhostA} className="tilt-float" aria-hidden />
                  <div style={sx.heroGhostB} className="tilt-float" aria-hidden />
                  <img src="/karta/karta-hero.png" alt="Karta brand splash" style={sx.heroCard} className="tilt-float" />
                  <img src="/karta/karta-logo.png" alt="Karta card mark" style={sx.heroLogo} className="float-slow" />
                  <div style={sx.diagBar} className="stripe-slide" aria-hidden />
                </div>
              </div>
            </div>
          </div>

          {/* Hero marquee ribbon (CSS-only) */}
          <div style={sx.heroRibbonWrap}>
            <div className="marquee">
              <div className="marquee__track">
                {["Smart", "Simple", "Algerian", "Campus-ready", "Merchant-friendly", "Privacy-minded", "Fast", "Reliable", "Local"]
                  .concat(["Smart", "Simple", "Algerian", "Campus-ready", "Merchant-friendly", "Privacy-minded", "Fast", "Reliable", "Local"])
                  .map((t, i) => (
                    <span key={i} style={sx.ribbonChip}>{t}</span>
                  ))}
              </div>
            </div>
          </div>

          {/* Logo placeholders for social proof vibe */}
          <div style={sx.container}>
            <div style={sx.logoStrip} className="stagger">
              <div style={sx.logoBox} className="reveal-up stripe-slide" aria-label="University placeholder" />
              <div style={sx.logoBox} className="reveal-up stripe-slide" aria-label="Merchant placeholder" />
              <div style={sx.logoBox} className="reveal-up stripe-slide" aria-label="Event placeholder" />
              <div style={sx.logoBox} className="reveal-up stripe-slide" aria-label="Transit placeholder" />
              <div style={sx.logoBox} className="reveal-up stripe-slide" aria-label="Community placeholder" />
            </div>
          </div>
        </section>

        {/* INTRO */}
        <Section id="intro" kicker="Start here" title="Introduction">
          <Grid3>
            <Tile title="What is Karta?">
              A modern wallet (card + app) and simple merchant rails designed for Algeria.
            </Tile>
            <Tile title="How we think">
              Focus on daily, high-frequency payments where convenience matters most.
            </Tile>
            <Tile title="Where it leads">
              From trusted communities to broader coverage as adoption grows.
            </Tile>
          </Grid3>
        </Section>

        {/* PROBLEM */}
        <Banded id="problem" kicker="Why now" title="The Problem">
          <Grid3>
            <BadgeCard label="Fragmented">Cash-heavy flows, slow lines, inconsistent acceptance.</BadgeCard>
            <BadgeCard label="Opaque">Limited visibility for operators; harder to improve service.</BadgeCard>
            <BadgeCard label="High Friction">Complex setups and a clunky day-to-day experience.</BadgeCard>
          </Grid3>
        </Banded>

        {/* MISSION */}
        <Section id="mission" kicker="Direction" title="Our Mission">
          <Strip>
            <StripItem k="1" h="Instant">Make everyday payments <b>instant</b> and delightful.</StripItem>
            <StripItem k="2" h="Trusted"><b>Predictable</b> rails, clear settlement, simple ops.</StripItem>
            <StripItem k="3" h="Local">Built for Algeria’s realities with a proudly local brand.</StripItem>
          </Strip>
        </Section>

        {/* WHAT WE’RE BUILDING */}
        <Section id="build" kicker="Product" title="What We’re Building">
          <Grid4>
            <Card title="Wallet">Tap / scan / QR with balances, receipts, and history in one place.</Card>
            <Card title="Merchant Tools">Lightweight acceptance, settlements, exports, and profiles.</Card>
            <Card title="Insights">Volumes, peaks, repeats, and simple reporting for decisions.</Card>
            <Card title="Closed-Loop Rails">Fast and offline-tolerant modes for real-world constraints.</Card>
          </Grid4>
          <div style={{ marginTop: 20 }}>
            <img src="/karta/karta-banner.png" alt="Karta banner" style={sx.banner} className="reveal-up" />
          </div>
        </Section>

        {/* WHY JOIN */}
        <Banded id="join" kicker="Build with us" title="Why Join">
          <Grid4>
            <MiniStat k="Impact" v="Daily life" d="Help make paying and getting paid feel easy." />
            <MiniStat k="Momentum" v="Ship fast" d="Small, focused releases with clear results." />
            <MiniStat k="Ownership" v="Early seat" d="Shape product, rails, and brand foundations." />
            <MiniStat k="Growth" v="Wide scope" d="Product, infra, ops, partnerships — hands-on." />
          </Grid4>
        </Banded>

        {/* USE CASES */}
        <Section id="use" kicker="Where it lands" title="Core Use Cases">
          <Grid4>
            <Card title="Campus & Venues">Cafeterias, printers, events — one wallet for daily needs.</Card>
            <Card title="Local Merchants">Cafés, kiosks, bookstores, gyms — simple acceptance + data.</Card>
            <Card title="Transit & Access">Shuttles, gates, passes — one credential, many doors.</Card>
            <Card title="Communities">Clubs, festivals, pop-ups — quick setup, clear reporting.</Card>
          </Grid4>
        </Section>

        {/* MARKET OPPORTUNITY */}
        <Banded id="market" kicker="Upside" title="Market Opportunity">
          <Grid3>
            <Stat label="Initial Focus" value="High-frequency venues" />
            <Stat label="Scaling" value="Phased rollout" />
            <Stat label="Insights" value="Actionable" />
          </Grid3>
          <p style={sx.bodyCenter}>
            Algeria is young and connected. There’s plenty of room to make everyday payments <b>simpler</b>.
          </p>
        </Banded>

        {/* BUSINESS MODEL */}
        <Section id="model" kicker="How it sustains" title="Business Model">
          <Grid2>
            <ListCard title="Core">
              <li>Usage-aligned revenue with a focus on value delivered.</li>
              <li>Clear, transparent terms for merchants and programs.</li>
            </ListCard>
            <ListCard title="Add-ons">
              <li>Optional analytics and operational tooling.</li>
              <li>Programs, credentials, and reporting services.</li>
            </ListCard>
          </Grid2>
        </Section>

        {/* GO TO MARKET */}
        <Section id="gtm" kicker="Rollout" title="Go-to-Market">
          <Timeline>
            <Milestone step="P1" title="Pilot Environments">Prove experience where usage is daily.</Milestone>
            <Milestone step="P2" title="Broader Coverage">Extend where community pull is strongest.</Milestone>
            <Milestone step="P3" title="Refined Playbooks">Document operations and quality bars.</Milestone>
            <Milestone step="P4" title="Alliances">Work with aligned institutions and distributors.</Milestone>
          </Timeline>
        </Section>

        {/* TECH & SECURITY */}
        <Banded id="tech" kicker="Under the hood" title="Tech & Security">
          <Grid4>
            <Card title="Closed-Loop Ledger">Predictable performance and settlements.</Card>
            <Card title="Privacy by Design">Encrypted data at rest and in transit.</Card>
            <Card title="Reliability">Offline-tolerant acceptance modes.</Card>
            <Card title="Compliance-Ready">Built to align with local requirements.</Card>
          </Grid4>
        </Banded>

        {/* SOCIAL PROOF */}
        <Section id="proof" kicker="Credibility" title="Social Proof & Credibility">
          <Grid3>
            <BadgeCard label="Backed by BFTSC">
              Local payment specialists working with respected collaborators.
            </BadgeCard>
            <BadgeCard label="Experienced Team">
              Full-stack engineering, AI, and product ops with a ship-fast mindset.
            </BadgeCard>
            <BadgeCard label="Merchant-Led">
              Grounded in <b>real merchant needs</b> with ongoing pilot feedback.
            </BadgeCard>
          </Grid3>
        </Section>

        {/* TEAM */}
        <Banded id="team" kicker="Who builds" title="The Team">
          <Grid3>
            <Tile title="Engineering">Wallet, rails, and acceptance tooling.</Tile>
            <Tile title="Product & Design">Flows that feel instant and clear.</Tile>
            <Tile title="Ops & Partnerships">Launches, support, and playbooks.</Tile>
          </Grid3>
        </Banded>

        {/* PARTNERS */}
        <Section id="partners" kicker="Allies" title="Partners & Allies">
          <Grid3>
            <Badge>Communities</Badge>
            <Badge>Venues & Services</Badge>
            <Badge>Local Merchants</Badge>
            <Badge>Events & Festivals</Badge>
            <Badge>Civic Stakeholders</Badge>
            <Badge>Distributors</Badge>
          </Grid3>
        </Section>

        {/* COMMUNITY */}
        <Section id="community" kicker="Tone" title="The Community Vibe">
          <p style={sx.bodyCenter}>
            Practical, optimistic, and proudly local — for <b>builders, students, and merchants</b>.
          </p>
          <RowChips chips={["Friendly", "Fast", "Reliable", "Local", "Inclusive"]} />
        </Section>

        {/* FAQ */}
        <Banded id="faq" kicker="Good to know" title="FAQ">
          <Grid2>
            <Faq q="Is Karta a bank?" a="No — it’s a closed-loop payment system built for speed and fit." />
            <Faq q="How do merchants accept Karta?" a="Scan, tap, or lightweight POS with simple onboarding." />
            <Faq q="What makes it reliable?" a="Focused flows, offline-tolerant modes, and clear settlement." />
            <Faq q="Where does it launch?" a="We begin where everyday usage is most frequent and grow from there." />
          </Grid2>
        </Banded>

        {/* CONTACT */}
        <section id="contact" style={mix(sx.sectionPad, sx.contact)}>
          <div style={sx.container}>
            <div style={sx.contactGrid} className="stagger">
              <div className="reveal-up">
                <h3 style={sx.h3}>Karta 2025 by BFTSC</h3>
                <p style={sx.contactText}>
                  Smart payments for Algeria — designed with communities and merchants in mind.
                </p>
                <div style={sx.linkRow}>
                  <a href="mailto:hello@bftsc.dz" style={sx.linkBox} data-btn>hello@bftsc.dz</a>
                  <a href="#join" style={sx.linkBox} data-btn>Join the project</a>
                  <a href="#contact" style={sx.linkBox} data-btn>Partnerships</a>
                </div>
              </div>
              <div style={sx.contactCard} className="reveal-up lift">
                <img src="/karta/karta-logo.png" alt="Karta logo card" style={{ width: "100%", borderRadius: 12 }} />
              </div>
            </div>
          </div>
        </section>
        {/* No footer per your request */}
      </main>

      {/* Motion + marquee CSS */}
      <style>{`
        :root{ --orange:#F5A300; --cream:#FBE9A6; --white:#FFFFFF; }

        /* keyframes */
        @keyframes bg-pan{ 0%{background-position:0% 0%} 100%{background-position:100% 0%} }
        @keyframes floatCard{ 0%,100%{ transform: rotate(-6deg) translateY(0) } 50%{ transform: rotate(-6deg) translateY(-6px) } }
        @keyframes bob{ 0%,100%{ transform: translateY(0)} 50%{ transform: translateY(-4px)} }
        @keyframes stripe-move{ 0%{background-position:0 0} 100%{background-position:56px 0} }
        @keyframes reveal-up{ from{ opacity:0; transform: translateY(12px) } to{ opacity:1; transform:none } }
        @keyframes marquee{ from{ transform: translateX(0) } to{ transform: translateX(-50%) } }

        .anim-bg-pan{ background-size:200% 100%; animation:bg-pan 18s linear infinite; }
        .tilt-float{ animation: floatCard 6s ease-in-out infinite; }
        .float-slow{ animation: bob 4s ease-in-out infinite; }
        .stripe-slide{ background-size:56px 56px; animation: stripe-move 12s linear infinite; }
        .reveal-up{ animation:reveal-up .7s ease both; }
        .stagger > *{ animation:reveal-up .7s ease both; }
        .stagger > *:nth-child(2){ animation-delay:.06s } .stagger > *:nth-child(3){ animation-delay:.12s }
        .stagger > *:nth-child(4){ animation-delay:.18s } .stagger > *:nth-child(5){ animation-delay:.24s }

        .lift{ transition: transform .2s ease, box-shadow .2s ease; }
        .lift:hover{ transform: translateY(-4px); box-shadow:0 10px 24px rgba(0,0,0,.08); }
        a[data-btn]{ transition: transform .15s ease, box-shadow .15s ease; }
        a[data-btn]:hover{ transform: translateY(-2px); box-shadow:0 8px 20px rgba(0,0,0,.12); }

        /* marquee ribbon */
        .marquee{ overflow:hidden; }
        .marquee__track{ width:200%; display:flex; gap:12px; animation:marquee 26s linear infinite; }

        /* reduced motion */
        @media (prefers-reduced-motion: reduce){
          *{ animation-duration:0.01ms !important; animation-iteration-count:1 !important; transition:none !important; }
        }
      `}</style>
    </>
  );
}

/* ======= Presentational helpers (no event handlers) ======= */

function Section({
  id, kicker, title, children,
}: { id?: string; kicker?: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} style={mix(sx.sectionPad, sx.sectionLight)}>
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
    <section id={id} style={mix(sx.sectionPad, sx.banded)}>
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
      <div style={sx.headerAccent} className="anim-bg-pan" aria-hidden />
    </div>
  );
}

function Grid2({ children }: { children: React.ReactNode }) { return <div style={sx.grid2} className="stagger">{children}</div>; }
function Grid3({ children }: { children: React.ReactNode }) { return <div style={sx.grid3} className="stagger">{children}</div>; }
function Grid4({ children }: { children: React.ReactNode }) { return <div style={sx.grid4} className="stagger">{children}</div>; }

/* Cards with built-in image placeholders */
function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={sx.card} className="lift reveal-up">
      <div style={sx.phWide} className="stripe-slide" aria-hidden />
      <div style={sx.cardTitle}>{title}</div>
      <div style={sx.cardBody}>{children}</div>
    </div>
  );
}

function Tile({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={sx.tile} className="lift reveal-up">
      <div style={sx.phWide} className="stripe-slide" aria-hidden />
      <div style={sx.tileTitle}>{title}</div>
      <div style={sx.tileBody}>{children}</div>
    </div>
  );
}

function BadgeCard({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={sx.badgeCard} className="lift reveal-up">
      <div style={sx.phIconRow}>
        <div style={sx.phIcon} className="stripe-slide" aria-hidden />
        <div style={sx.badgePill}>{label}</div>
      </div>
      <div style={sx.badgeBody}>{children}</div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div style={sx.stat} className="lift reveal-up">
      <div style={sx.phIconLarge} className="stripe-slide" aria-hidden />
      <div style={sx.statValue}>{value}</div>
      <div style={sx.statLabel}>{label}</div>
    </div>
  );
}

function MiniStat({ k, v, d }: { k: string; v: string; d: string }) {
  return (
    <div style={sx.miniStat} className="lift reveal-up">
      <div style={sx.phIcon} className="stripe-slide" aria-hidden />
      <div style={sx.miniKey}>{k}</div>
      <div style={sx.miniVal}>{v}</div>
      <div style={sx.miniDesc}>{d}</div>
    </div>
  );
}

function Timeline({ children }: { children: React.ReactNode }) { return <div style={sx.timeline} className="stagger">{children}</div>; }

function Milestone({ step, title, children }: { step: string; title: string; children: React.ReactNode }) {
  return (
    <div style={sx.milestone} className="lift reveal-up">
      <div style={sx.milestoneKey}>{step}</div>
      <div>
        <div style={sx.milestoneTitle}>{title}</div>
        <div style={sx.milestoneText}>{children}</div>
      </div>
    </div>
  );
}

function Strip({ children }: { children: React.ReactNode }) { return <div style={sx.strip} className="stagger">{children}</div>; }
function StripItem({ k, h, children }: { k: string; h: string; children: React.ReactNode }) {
  return (
    <div style={sx.stripItem} className="lift reveal-up">
      <div style={sx.stripKey}>{k}</div>
      <div style={sx.stripHead}>{h}</div>
      <div style={sx.stripText}>{children}</div>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return <div style={sx.badge} className="lift reveal-up">{children}</div>;
}

function RowChips({ chips }: { chips: string[] }) {
  return (
    <div style={sx.chipsRow} className="stagger">
      {chips.map((c, i) => (
        <div key={i} style={sx.chip} className="lift reveal-up">{c}</div>
      ))}
    </div>
  );
}

function ListCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={sx.listCard} className="lift reveal-up">
      <div style={sx.phWide} className="stripe-slide" aria-hidden />
      <div style={sx.listTitle}>{title}</div>
      <ul style={sx.ul}>{children}</ul>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <div style={sx.faq} className="lift reveal-up">
      <div style={sx.phIcon} className="stripe-slide" aria-hidden />
      <div style={sx.faqQ}>{q}</div>
      <div style={sx.faqA}>{a}</div>
    </div>
  );
}

/* ======= Styles: only orange, cream, white ======= */

const PALETTE = {
  orange: "#F5A300",
  cream:  "#FBE9A6",
  white:  "#FFFFFF",
};

const sx: Record<string, React.CSSProperties> = {
  page: {
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
    color: "#3B2C00",
    background: PALETTE.white,
  },

  container: { maxWidth: 1180, margin: "0 auto", padding: "0 20px" },
  sectionPad: { padding: "64px 0" },

  hero: {
    background: `linear-gradient(135deg, ${PALETTE.orange} 0%, ${PALETTE.orange} 60%, ${PALETTE.cream} 140%)`,
    color: PALETTE.white,
  },
  heroGrid: {
    display: "grid",
    gridTemplateColumns: "1.15fr 0.85fr",
    gap: 28,
    alignItems: "center",
  },
  pill: {
    display: "inline-block",
    padding: "6px 12px",
    borderRadius: 999,
    border: `1px solid rgba(255,255,255,0.8)`,
    background: "rgba(255,255,255,0.15)",
    fontSize: 13,
    marginBottom: 10,
  },
  h1: { fontSize: 48, lineHeight: 1.1, margin: "6px 0 8px" },
  lead: { fontSize: 18, lineHeight: 1.7, maxWidth: 700 },
  ctaRow: { display: "flex", gap: 12, marginTop: 18, flexWrap: "wrap" },

  /* hero highlights */
  heroHiRow: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: 10,
    marginTop: 20,
  },
  heroHi: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    background: "rgba(255,255,255,0.14)",
    border: "1px solid rgba(255,255,255,0.6)",
    borderRadius: 12,
    padding: 10,
    color: PALETTE.white,
  },
  heroHiText: { lineHeight: 1.2 },
  heroHiHead: { fontWeight: 900, fontSize: 14 },
  heroHiSub: { fontSize: 12, opacity: 0.9 },

  btnPrimary: {
    background: PALETTE.white,
    color: PALETTE.orange,
    padding: "12px 16px",
    borderRadius: 12,
    fontWeight: 800,
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

  heroArtWrap: {
    position: "relative",
    width: "min(100%, 560px)",
    aspectRatio: "4 / 3",
    margin: "0 auto",
  },

  heroCard: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 20,
    transform: "rotate(-6deg)",
    border: `2px solid ${PALETTE.white}`,
    boxShadow: "0 20px 48px rgba(0,0,0,0.25)",
  },
  heroLogo: {
    position: "absolute",
    right: -16,
    bottom: -18,
    width: 160,
    height: 160,
    objectFit: "cover",
    borderRadius: 16,
    border: `2px solid ${PALETTE.white}`,
    background: PALETTE.white,
    padding: 6,
    boxShadow: "0 12px 32px rgba(0,0,0,0.22)",
  },
  heroGhostA: {
    position: "absolute", inset: 0, transform: "rotate(-10deg) translate(10px, 10px)",
    borderRadius: 20, border: `2px solid rgba(255,255,255,0.7)`, background: "rgba(255,255,255,0.06)",
  },
  heroGhostB: {
    position: "absolute", inset: 0, transform: "rotate(-14deg) translate(24px, 22px)",
    borderRadius: 20, border: `2px solid rgba(255,255,255,0.5)`, background: "rgba(255,255,255,0.04)",
  },
  diagBar: {
    position: "absolute",
    left: -30,
    bottom: -28,
    width: 260,
    height: 20,
    transform: "skewX(-20deg)",
    background: `repeating-linear-gradient(90deg, ${PALETTE.cream}, ${PALETTE.cream} 14px, ${PALETTE.orange} 14px, ${PALETTE.orange} 28px)`,
    borderRadius: 6,
    border: `1px solid ${PALETTE.white}`,
    boxShadow: "0 8px 18px rgba(0,0,0,0.18)",
  },

  /* hero ribbon + logos */
  heroRibbonWrap: {
    marginTop: 18,
    borderTop: `2px solid rgba(255,255,255,0.7)`,
    borderBottom: `2px solid rgba(255,255,255,0.7)`,
    background: "rgba(255,255,255,0.12)",
    padding: "8px 0",
  },
  ribbonChip: {
    display: "inline-block",
    padding: "6px 12px",
    borderRadius: 999,
    border: `1px solid rgba(255,255,255,0.7)`,
    color: PALETTE.white,
    background: "rgba(255,255,255,0.1)",
    fontWeight: 800,
    whiteSpace: "nowrap",
  } as React.CSSProperties,
  logoStrip: {
    display: "grid",
    gridTemplateColumns: "repeat(5,1fr)",
    gap: 10,
    padding: "14px 0 0",
  },
  logoBox: {
    height: 44,
    borderRadius: 12,
    border: `1px solid rgba(255,255,255,0.7)`,
    background: `repeating-linear-gradient(135deg, ${PALETTE.cream}, ${PALETTE.cream} 10px, ${PALETTE.white} 10px, ${PALETTE.white} 20px)`,
    opacity: 0.9,
  },

  /* Section header */
  headerBlock: { position: "relative", paddingBottom: 10 },
  kicker: {
    display: "inline-block",
    fontSize: 12,
    fontWeight: 900,
    letterSpacing: 0.4,
    textTransform: "uppercase",
    color: "#6f5411",
    background: PALETTE.cream,
    border: `1px solid ${PALETTE.orange}`,
    borderRadius: 999,
    padding: "2px 8px",
    marginBottom: 6,
  },
  h2: { fontSize: 28, margin: "4px 0 0" },
  headerAccent: {
    height: 6,
    width: 120,
    marginTop: 8,
    borderRadius: 999,
    background: `linear-gradient(90deg, ${PALETTE.orange}, ${PALETTE.cream})`,
  },

  sectionLight: { background: PALETTE.white },
  banded: {
    background: `linear-gradient(180deg, ${PALETTE.cream} 0%, ${PALETTE.cream} 70%, ${PALETTE.white} 100%)`,
    borderTop: `3px solid ${PALETTE.orange}`,
    borderBottom: `3px solid ${PALETTE.orange}`,
  },

  grid2: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 16 },
  grid3: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16 },
  grid4: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16 },

  /* Placeholder visuals */
  phWide: {
    width: "100%",
    aspectRatio: "16 / 9",
    borderRadius: 12,
    border: `1px solid ${PALETTE.cream}`,
    background: `repeating-linear-gradient(135deg, ${PALETTE.cream}, ${PALETTE.cream} 14px, ${PALETTE.white} 14px, ${PALETTE.white} 28px)`,
    boxShadow: "inset 0 0 0 2px rgba(245,163,0,0.15)",
    marginBottom: 10,
  },
  phIconRow: { display: "flex", alignItems: "center", gap: 10, marginBottom: 8 },
  phIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    border: `1px solid ${PALETTE.cream}`,
    background: `repeating-linear-gradient(45deg, ${PALETTE.orange}, ${PALETTE.orange} 6px, ${PALETTE.cream} 6px, ${PALETTE.cream} 12px)`,
    boxShadow: "inset 0 0 0 2px rgba(255,255,255,0.4)",
  },
  phIconLarge: {
    width: 64,
    height: 64,
    borderRadius: 16,
    margin: "0 auto 8px",
    border: `1px solid ${PALETTE.cream}`,
    background: `repeating-linear-gradient(45deg, ${PALETTE.orange}, ${PALETTE.orange} 8px, ${PALETTE.cream} 8px, ${PALETTE.cream} 16px)`,
    boxShadow: "inset 0 0 0 2px rgba(255,255,255,0.4)",
  },

  card: {
    background: PALETTE.white,
    border: `1px solid ${PALETTE.cream}`,
    borderRadius: 14,
    padding: 16,
    boxShadow: "0 4px 10px rgba(0,0,0,0.04)",
  },
  cardTitle: { fontWeight: 800, marginBottom: 6 },
  cardBody: { lineHeight: 1.7 },

  tile: {
    background: PALETTE.white,
    borderLeft: `5px solid ${PALETTE.orange}`,
    borderRadius: 12,
    padding: 16,
    boxShadow: "0 4px 10px rgba(0,0,0,0.04)",
  },
  tileTitle: { fontWeight: 900, marginBottom: 6 },
  tileBody: { lineHeight: 1.7 },

  badgeCard: {
    background: PALETTE.white,
    borderRadius: 14,
    padding: 16,
    border: `1px solid ${PALETTE.cream}`,
    boxShadow: "0 4px 10px rgba(0,0,0,0.04)",
  },
  badgePill: {
    display: "inline-block",
    padding: "5px 10px",
    borderRadius: 999,
    border: `1px solid ${PALETTE.orange}`,
    background: PALETTE.white,
    fontWeight: 800,
    color: "#3B2C00",
  },
  badgeBody: { lineHeight: 1.7 },

  bodyCenter: { textAlign: "center", marginTop: 12 },

  banner: {
    width: "100%",
    height: "auto",
    borderRadius: 14,
    border: `2px solid ${PALETTE.cream}`,
    boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
  },

  miniStat: {
    background: PALETTE.white,
    borderRadius: 14,
    padding: 16,
    border: `1px solid ${PALETTE.cream}`,
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.04)",
  },
  miniKey: { fontSize: 12, opacity: 0.8, marginTop: 6 },
  miniVal: { fontSize: 22, fontWeight: 900, marginTop: 2 },
  miniDesc: { fontSize: 13, marginTop: 6 },

  stat: {
    background: PALETTE.white,
    border: `1px solid ${PALETTE.cream}`,
    borderRadius: 14,
    padding: 16,
    textAlign: "center",
  },
  statValue: { fontSize: 22, fontWeight: 900, color: "#3B2C00" },
  statLabel: { fontSize: 13, opacity: 0.8, marginTop: 6 },

  strip: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: 12,
  },
  stripItem: {
    background: PALETTE.cream,
    borderRadius: 12,
    padding: 16,
    border: `1px solid ${PALETTE.orange}`,
  },
  stripKey: {
    display: "inline-block",
    padding: "4px 8px",
    borderRadius: 999,
    background: PALETTE.orange,
    color: PALETTE.white,
    fontWeight: 900,
    fontSize: 12,
  },
  stripHead: { fontWeight: 900, marginTop: 8, marginBottom: 4 },
  stripText: { lineHeight: 1.7 },

  timeline: { display: "grid", gap: 12 },
  milestone: {
    display: "grid",
    gridTemplateColumns: "auto 1fr",
    gap: 12,
    padding: 12,
    borderLeft: `4px solid ${PALETTE.orange}`,
    background: PALETTE.cream,
    borderRadius: 10,
  },
  milestoneKey: {
    fontWeight: 900,
    background: PALETTE.orange,
    color: PALETTE.white,
    borderRadius: 8,
    padding: "6px 10px",
    minWidth: 44,
    textAlign: "center",
  },
  milestoneTitle: { fontWeight: 800, marginBottom: 4 },
  milestoneText: { opacity: 0.95 },

  listCard: {
    background: PALETTE.white,
    border: `1px solid ${PALETTE.cream}`,
    borderRadius: 14,
    padding: 16,
  },
  listTitle: { fontWeight: 900, marginBottom: 8 },
  ul: { margin: 0, paddingLeft: 18, lineHeight: 1.8 },

  badge: {
    display: "inline-block",
    padding: "8px 12px",
    borderRadius: 999,
    border: `1px solid ${PALETTE.orange}`,
    background: PALETTE.white,
    fontWeight: 800,
    textAlign: "center",
  },

  chipsRow: { display: "flex", gap: 10, flexWrap: "wrap", marginTop: 10 },
  chip: {
    padding: "8px 12px",
    borderRadius: 999,
    border: `1px solid ${PALETTE.cream}`,
    background: PALETTE.white,
    fontWeight: 700,
  },

  faq: {
    background: PALETTE.white,
    border: `1px solid ${PALETTE.cream}`,
    borderRadius: 12,
    padding: 14,
  },
  faqQ: { fontWeight: 900, marginTop: 8, marginBottom: 6 },
  faqA: { lineHeight: 1.7 },

  ctaRowCenter: { display: "flex", justifyContent: "center", gap: 12, marginTop: 8, flexWrap: "wrap" },

  contact: {
    background: `linear-gradient(135deg, ${PALETTE.orange} 0%, ${PALETTE.orange} 65%, ${PALETTE.cream} 150%)`,
    color: PALETTE.white,
  },
  contactGrid: {
    display: "grid",
    gridTemplateColumns: "1.2fr 0.8fr",
    gap: 20,
    alignItems: "center",
  },
  h3: { fontSize: 22, margin: "0 0 6px" },
  contactText: { lineHeight: 1.7, maxWidth: 640 },
  linkRow: { display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 },
  linkBox: {
    display: "inline-block",
    background: PALETTE.white,
    color: PALETTE.orange,
    padding: "10px 14px",
    borderRadius: 10,
    fontWeight: 800,
    textDecoration: "none",
  },
  contactCard: {
    background: "rgba(255,255,255,0.15)",
    border: `2px solid rgba(255,255,255,0.85)`,
    borderRadius: 14,
    padding: 10,
  },
};

function mix<T extends object>(...o: T[]): T {
  return Object.assign({}, ...o);
}
