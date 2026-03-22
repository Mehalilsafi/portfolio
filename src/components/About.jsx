import { useEffect, useRef, useState } from "react";
import safi from "../assets/safi.jpg";

/* ── tiny hook for scroll reveal ── */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

/* ── SVG icons for each tech ── */
const icons = {
  React: <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="2.3" fill="#61DAFB"/><ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.2" fill="none"/><ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)"/></svg>,
  "Next.js": <svg viewBox="0 0 24 24" fill="currentColor" style={{color:"#fff"}}><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm3.5 14.5L9 8.5V16H8V7.5h1l7 8.5-.5.5z"/></svg>,
  TypeScript: <svg viewBox="0 0 24 24"><rect width="24" height="24" rx="3" fill="#3178C6"/><path d="M13.5 15v1.7c.3.15.66.27 1.07.34.41.07.84.1 1.3.1.45 0 .87-.04 1.27-.13.4-.09.75-.24 1.05-.44.3-.2.54-.47.71-.8.17-.33.26-.73.26-1.2 0-.35-.05-.66-.16-.93a2.1 2.1 0 0 0-.46-.72c-.21-.21-.44-.4-.73-.56-.28-.17-.61-.33-.97-.49-.27-.11-.5-.22-.7-.32-.2-.1-.37-.21-.5-.32a1.34 1.34 0 0 1-.33-.36.87.87 0 0 1-.11-.44c0-.15.04-.29.11-.41.07-.12.17-.22.29-.3.13-.08.28-.14.47-.18.18-.04.38-.06.6-.06.16 0 .32.01.5.04.18.03.35.07.52.13.17.06.33.14.47.23.15.1.28.2.39.32V11.1a5.3 5.3 0 0 0-.98-.25 6.8 6.8 0 0 0-1.16-.1c-.44 0-.86.05-1.25.14-.4.1-.74.25-1.04.46-.3.2-.53.47-.7.8-.17.33-.26.72-.26 1.17 0 .58.16 1.07.49 1.47.33.4.82.74 1.47 1.02.3.12.55.24.77.35.22.11.41.22.56.33.16.11.28.23.36.37.08.13.12.28.12.45 0 .16-.03.3-.1.43-.07.12-.17.23-.3.31-.13.08-.29.14-.48.18-.19.04-.41.06-.66.06-.43 0-.85-.08-1.25-.24-.4-.16-.76-.4-1.07-.7zm-4.5-5h2.7V8.5H3.5v1.53H6.2V17H9V10z" fill="white"/></svg>,
  "Tailwind CSS": <svg viewBox="0 0 24 24" fill="none"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" fill="#06B6D4"/></svg>,
  "shadcn/ui": <svg viewBox="0 0 24 24" fill="currentColor" style={{color:"#e8edf3"}}><rect x="2" y="2" width="9" height="9" rx="1.5"/><rect x="13" y="2" width="9" height="9" rx="1.5" opacity="0.4"/><rect x="2" y="13" width="9" height="9" rx="1.5" opacity="0.4"/><rect x="13" y="13" width="9" height="9" rx="1.5"/></svg>,
  "TanStack Query": <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#FF4154" strokeWidth="1.4"/><path d="M8 12h8M12 8v8" stroke="#FF4154" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  Zustand: <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="8" height="8" rx="2" fill="#c07041"/><rect x="13" y="3" width="8" height="8" rx="2" fill="#724b2b"/><rect x="3" y="13" width="8" height="8" rx="2" fill="#724b2b"/><rect x="13" y="13" width="8" height="8" rx="2" fill="#c07041"/></svg>,
  "Express.js": <svg viewBox="0 0 24 24" fill="currentColor" style={{color:"#e8edf3"}}><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 10l-4-3v6l4-3 4 3v-6l-4 3z"/></svg>,
  MongoDB: <svg viewBox="0 0 24 24" fill="none"><path d="M12 2C8 5 7 9 7 12c0 3 1.5 5.5 5 6.5V22l1-1v-3.5C17 16.5 17 13 17 12c0-3-1-7-5-10z" fill="#47A248"/></svg>,
  PostgreSQL: <svg viewBox="0 0 24 24" fill="none"><ellipse cx="12" cy="7" rx="9" ry="3.5" stroke="#336791" strokeWidth="1.4"/><path d="M3 7v5c0 2 4 3.5 9 3.5s9-1.5 9-3.5V7" stroke="#336791" strokeWidth="1.4"/><path d="M3 12v5c0 2 4 3.5 9 3.5s9-1.5 9-3.5v-5" stroke="#336791" strokeWidth="1.4"/></svg>,
  Supabase: <svg viewBox="0 0 24 24" fill="none"><path d="M12 2L3 7v10l9 5 9-5V7L12 2z" stroke="#3ECF8E" strokeWidth="1.4" strokeLinejoin="round"/><path d="M3 7l9 5 9-5" stroke="#3ECF8E" strokeWidth="1.4"/><line x1="12" y1="12" x2="12" y2="22" stroke="#3ECF8E" strokeWidth="1.4"/></svg>,
  "Socket.io": <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#e8edf3" strokeWidth="1.4"/><path d="M6 15l5-6h7" stroke="#e8edf3" strokeWidth="1.4" strokeLinecap="round"/><path d="M11 9H6l5 6" stroke="#e8edf3" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Docker: <svg viewBox="0 0 24 24" fill="none"><rect x="2" y="10" width="4" height="3" rx="0.5" stroke="#2496ED" strokeWidth="1.3"/><rect x="7" y="10" width="4" height="3" rx="0.5" stroke="#2496ED" strokeWidth="1.3"/><rect x="12" y="10" width="4" height="3" rx="0.5" stroke="#2496ED" strokeWidth="1.3"/><rect x="7" y="6" width="4" height="3" rx="0.5" stroke="#2496ED" strokeWidth="1.3"/><rect x="12" y="6" width="4" height="3" rx="0.5" stroke="#2496ED" strokeWidth="1.3"/><path d="M2 14s0 4 6 4h7c4 0 5-3 5-3" stroke="#2496ED" strokeWidth="1.3"/><path d="M21 12s2 0 2-2" stroke="#2496ED" strokeWidth="1.3" strokeLinecap="round"/></svg>,
};

const STACK = [
  { category: "Frontend",               items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"] },
  { category: "State & Data Fetching",  items: ["TanStack Query", "Zustand"] },
  { category: "Backend & Database",     items: ["Express.js", "MongoDB", "PostgreSQL", "Supabase", "Socket.io", "Docker"] },
];

const AI_TOOLS = [
  {
    name: "Cursor",
    bg: "#1a1a2e",
    icon: <svg viewBox="0 0 18 18" fill="none" width="14" height="14"><path d="M4 14L9 2l5 12-3.5-1.5L9 16l-1.5-1.5L4 14z" fill="white" stroke="white" strokeWidth="0.5"/></svg>,
  },
  {
    name: "GitHub Copilot",
    bg: "#24292f",
    icon: <svg viewBox="0 0 16 16" fill="none" width="14" height="14"><circle cx="8" cy="8" r="7" fill="#7c3aed"/><path d="M5 9.5C5 7.015 6.343 5 8 5s3 2.015 3 4.5" stroke="white" strokeWidth="1.2" strokeLinecap="round"/><circle cx="6.2" cy="8.5" r="0.8" fill="white"/><circle cx="9.8" cy="8.5" r="0.8" fill="white"/></svg>,
  },
  {
    name: "Claude",
    bg: "#c87347",
    icon: <svg viewBox="0 0 16 16" fill="none" width="14" height="14"><circle cx="8" cy="8" r="5" fill="white" opacity="0.9"/></svg>,
  },
  {
    name: "ChatGPT",
    bg: "#10a37f",
    icon: <svg viewBox="0 0 16 16" fill="none" width="14" height="14"><circle cx="8" cy="8" r="5" stroke="white" strokeWidth="1.5"/><circle cx="8" cy="8" r="2" fill="white"/></svg>,
  },
  {
    name: "MCP Servers",
    bg: "#0f172a",
    icon: <svg viewBox="0 0 16 16" fill="none" width="14" height="14"><rect x="1.5" y="1.5" width="5.5" height="5.5" rx="1" fill="#63d3a8"/><rect x="9" y="1.5" width="5.5" height="5.5" rx="1" fill="#63d3a8" opacity="0.45"/><rect x="1.5" y="9" width="5.5" height="5.5" rx="1" fill="#63d3a8" opacity="0.45"/><rect x="9" y="9" width="5.5" height="5.5" rx="1" fill="#63d3a8"/></svg>,
  },
];

const MCP_INTEGRATIONS = [
  "File System",
  "Git & GitHub",
  "Browser Tools",
  "Database",
  "Docs Search",
];

const WORKFLOW_STEPS = [
  { icon: "💡", label: "Brainstorm" },
  { icon: "📐", label: "Plan"       },
  { icon: "⚙️", label: "Build"      },
  { icon: "🔍", label: "AI Review"  },
  { icon: "🚀", label: "Ship"       },
  { icon: "🔁", label: "Iterate"    },
];

const EXPERIENCE = [
  {
    role: "Frontend Developer",
    company: "Ayor.ai",
    period: "2025 – Present",
    type: "Production",
    color: "#63d3a8",
    desc: "Algerian SaaS startup in production. Built a real-time store builder — merchants customise themes, fonts, and layout with instant live preview. Pushed Lighthouse from 48 → 98 across all store pages. Shipped dark mode and resolved production bugs.",
  },
  {
    role: "Full-Stack Developer",
    company: "Freelance",
    period: "2023 – Present",
    type: "Freelance",
    color: "#60a5fa",
    desc: "End-to-end client projects: e-commerce platforms, web apps, landing pages. Own everything from DB schema to pixel-perfect UI and deployment.",
  },
  {
    role: "MSc Software Engineering",
    company: "Hassiba Ben Bouali University",
    period: "2024 – Present",
    type: "Education",
    color: "#a78bfa",
    desc: "Advanced software engineering, distributed systems, and software architecture.",
  },
];

function Chip({ name }) {
  return (
    <div className="pf-chip">
      {icons[name] && icons[name]}
      {name}
    </div>
  );
}

function About() {
  const [headerRef, headerVisible] = useReveal();
  const [leftRef,   leftVisible]   = useReveal();
  const [rightRef,  rightVisible]  = useReveal();
  const [expRef,    expVisible]    = useReveal();

  return (
    <section id="about" className="pf-section">
      <div className="pf-container">

        {/* Header */}
        <div ref={headerRef} className={`pf-reveal ${headerVisible ? "pf-in" : ""}`}>
          <div className="pf-label">About</div>
          <h2 className="pf-heading">Who I am &amp;<br />what I bring</h2>
        </div>

        {/* Bio + Stack grid */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "start" }}
          className="pf-about-grid"
        >
          {/* ── Left col: photo + bio ── */}
          <div
            ref={leftRef}
            className={`pf-reveal ${leftVisible ? "pf-in" : ""}`}
            style={{ transitionDelay: "0.1s" }}
          >
            {/* Photo */}
            <div style={{ position: "relative", width: "100%", maxWidth: 340, marginBottom: 28, borderRadius: "var(--radius-lg)", overflow: "hidden", border: "1px solid var(--border)", aspectRatio: "4/3" }}>
              <img src={safi} alt="Safi Mehalil" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,11,16,0.7) 0%, transparent 50%)" }} />
              <div style={{ position: "absolute", bottom: 16, left: 16 }}>
                <div style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: "1rem", color: "var(--text)" }}>Safi Mehalil</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: "0.78rem", color: "var(--accent)", fontWeight: 500 }}>Full-Stack Developer</div>
              </div>
            </div>

            {/* Bio text */}
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", fontWeight: 300, color: "var(--text-dim)", lineHeight: 1.85, marginBottom: 14 }}>
              I'm a <strong style={{ color: "var(--text)", fontWeight: 600 }}>full-stack developer</strong> who ships complete products —
              clean REST APIs, responsive UIs, real-time features, and the infrastructure to hold it together.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", fontWeight: 300, color: "var(--text-dim)", lineHeight: 1.85, marginBottom: 22 }}>
              I care about <span style={{ color: "var(--accent)", fontWeight: 600 }}>performance, UX precision, and maintainable code</span> —
              good work shows up in Lighthouse scores and in how users feel when they use the product.
            </p>

            {/* Interest tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["Science", "Fitness", "Content Creation", "Open Source"].map((t) => (
                <span
                  key={t}
                  style={{ padding: "5px 14px", borderRadius: 40, border: "1px solid var(--border)", fontSize: "0.78rem", fontWeight: 500, color: "var(--text-muted)", background: "var(--surface)", cursor: "default" }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right col: stack + AI workflow ── */}
          <div
            ref={rightRef}
            className={`pf-reveal ${rightVisible ? "pf-in" : ""}`}
            style={{ transitionDelay: "0.2s" }}
          >
            {/* Tech stack panel */}
            <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: 24, marginBottom: 16 }}>
              <div style={{ fontFamily: "var(--font-head)", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 22 }}>
                Tech Stack
              </div>
              {STACK.map(({ category, items }) => (
                <div key={category} style={{ marginBottom: 22 }}>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 10 }}>
                    {category}
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {items.map((name) => <Chip key={name} name={name} />)}
                  </div>
                </div>
              ))}
            </div>

            {/* ── AI Workflow panel (redesigned) ── */}
            <div style={{ background: "linear-gradient(135deg, var(--surface) 0%, rgba(99,211,168,0.03) 100%)", border: "1px solid rgba(99,211,168,0.14)", borderRadius: "var(--radius-lg)", padding: 24 }}>

              {/* Panel header */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--accent)", display: "inline-block", flexShrink: 0, animation: "pfBlink 1.4s ease-in-out infinite" }} />
                  <span style={{ fontFamily: "var(--font-head)", fontSize: "0.85rem", fontWeight: 700, color: "var(--text)" }}>
                    AI-Augmented Workflow
                  </span>
                </div>
                <span style={{ padding: "3px 10px", borderRadius: 40, background: "var(--accent-dim)", border: "1px solid rgba(99,211,168,0.22)", fontSize: "0.62rem", fontWeight: 700, color: "var(--accent)", letterSpacing: "0.1em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
                  MCP + Agents
                </span>
              </div>

              {/* One-liner */}
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.78rem", color: "var(--text-muted)", lineHeight: 1.65, marginBottom: 16, fontWeight: 400 }}>
                I use AI tools with <strong style={{ color: "var(--text-dim)", fontWeight: 600 }}>MCP servers</strong> and advanced agent configurations — automating context, code reviews, and iteration so I ship faster without cutting corners.
              </p>

              {/* AI tools row */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 16 }}>
                {AI_TOOLS.map(({ name, bg, icon }) => (
                  <div key={name} className="pf-chip" style={{ gap: 8 }}>
                    <span style={{ width: 18, height: 18, borderRadius: 4, background: bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      {icon}
                    </span>
                    {name}
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: "var(--border)", marginBottom: 16 }} />

              {/* MCP integrations */}
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontFamily: "var(--font-body)", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 9 }}>
                  MCP integrations
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                  {MCP_INTEGRATIONS.map((cap) => (
                    <span
                      key={cap}
                      style={{ padding: "4px 11px", borderRadius: 6, background: "rgba(99,211,168,0.06)", border: "1px solid rgba(99,211,168,0.14)", fontSize: "0.72rem", fontWeight: 500, color: "var(--text-dim)" }}
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: "var(--border)", marginBottom: 16 }} />

              {/* Shipping pipeline */}
              <div style={{ fontFamily: "var(--font-body)", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 10 }}>
                Shipping pipeline
              </div>
              <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 0 }}>
                {WORKFLOW_STEPS.map((step, i) => (
                  <div key={step.label} style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, padding: "8px 10px", borderRadius: 8, background: "var(--surface2)", border: "1px solid var(--border)" }}>
                      <span style={{ fontSize: "0.85rem" }}>{step.icon}</span>
                      <span style={{ fontFamily: "var(--font-body)", fontSize: "0.6rem", fontWeight: 600, color: "var(--text-muted)", letterSpacing: "0.04em", whiteSpace: "nowrap" }}>
                        {step.label}
                      </span>
                    </div>
                    {i < WORKFLOW_STEPS.length - 1 && (
                      <svg viewBox="0 0 16 10" width="16" height="10" style={{ flexShrink: 0 }}>
                        <path d="M0 5h12M9 2l3 3-3 3" stroke="rgba(99,211,168,0.3)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      </svg>
                    )}
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* ── Experience cards ── */}
        <div
          ref={expRef}
          className={`pf-reveal ${expVisible ? "pf-in" : ""}`}
          style={{ marginTop: 56, transitionDelay: "0.1s" }}
        >
          <div className="pf-label">Experience</div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="pf-exp-grid">
            {EXPERIENCE.map((e) => (
              <div key={e.company} className="pf-card" style={{ padding: 22 }}>
                <div style={{ width: 32, height: 3, borderRadius: 2, background: e.color, marginBottom: 14 }} />

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8, gap: 8 }}>
                  <div>
                    <div style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: "0.95rem", color: "var(--text)", marginBottom: 2 }}>
                      {e.role}
                    </div>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: e.color, fontWeight: 600 }}>
                      {e.company}
                    </div>
                  </div>
                  <span style={{ padding: "2px 9px", borderRadius: 40, background: `${e.color}14`, border: `1px solid ${e.color}30`, fontSize: "0.62rem", fontWeight: 700, color: e.color, whiteSpace: "nowrap", letterSpacing: "0.06em", flexShrink: 0 }}>
                    {e.type}
                  </span>
                </div>

                <div style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", color: "var(--text-muted)", fontWeight: 500, marginBottom: 10 }}>
                  {e.period}
                </div>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", color: "var(--text-dim)", lineHeight: 1.7, fontWeight: 300 }}>
                  {e.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @keyframes pfBlink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.25; }
        }
        @media (max-width: 768px) {
          .pf-about-grid { grid-template-columns: 1fr !important; }
          .pf-exp-grid   { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

export default About;