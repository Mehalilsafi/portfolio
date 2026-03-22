import { useState, useEffect } from "react";

const stats = [
  { value: "97",   label: "Lighthouse Score"   },
  { value: "5+",   label: "Shipped Projects"   },
  { value: "MSc",  label: "Software Engineering" },
  { value: "Open", label: "To Remote & Freelance" },
];

function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const anim = (delay) => ({
    opacity:    mounted ? 1 : 0,
    transform:  mounted ? "translateY(0)" : "translateY(22px)",
    transition: `opacity 0.7s ${delay}s ease, transform 0.7s ${delay}s ease`,
  });

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "var(--nav-h)",
      }}
    >
      <div className="pf-container" style={{ paddingTop: 24, paddingBottom: 48 }}>

        {/* Available badge */}
        <div style={{ ...anim(0.1), display: "inline-flex", alignItems: "center", gap: 9, padding: "6px 16px", borderRadius: 40, background: "var(--accent-dim)", border: "1px solid rgba(99,211,168,0.22)", marginBottom: 28 }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--accent)", display: "inline-block", animation: "pfBlink 1.4s ease-in-out infinite" }} />
          <span style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)" }}>
            Available for Remote &amp; Freelance
          </span>
        </div>

        {/* Heading */}
        <h1
          style={{
            ...anim(0.22),
            fontFamily: "var(--font-head)",
            fontSize: "clamp(2.8rem, 7.5vw, 5.6rem)",
            fontWeight: 800,
            letterSpacing: "-3px",
            lineHeight: 1.0,
            color: "var(--text)",
            marginBottom: 22,
          }}
        >
          Building Fast,
          <br />
          <span style={{ color: "var(--accent)" }}>Scalable</span>
          <br />
          Web Apps.
        </h1>

        {/* Subtitle — client-value framing */}
        <p
          style={{
            ...anim(0.36),
            fontFamily: "var(--font-body)",
            fontSize: "clamp(1rem, 2vw, 1.12rem)",
            fontWeight: 300,
            color: "var(--text-dim)",
            maxWidth: 520,
            lineHeight: 1.8,
            marginBottom: 38,
          }}
        >
          Hi, I'm <strong style={{ color: "var(--text)", fontWeight: 600 }}>Safi Mehalil</strong> — a full-stack developer who
          ships end-to-end products: clean APIs, pixel-precise UIs, and production
          performance that moves the needle for your business.
        </p>

        {/* CTAs */}
        <div style={{ ...anim(0.48), display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 64 }}>
          <a href="mailto:safiou102003@gmail.com" className="pf-btn pf-btn-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Hire me
          </a>
          <a href="#projects" className="pf-btn pf-btn-outline">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
            See my work
          </a>
          <a href="/resume.pdf" download className="pf-btn pf-btn-outline">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Resume
          </a>
        </div>

        {/* Stats row */}
        <div
          style={{
            ...anim(0.6),
            display: "flex",
            flexWrap: "wrap",
            gap: "1px",
            background: "var(--border)",
            borderRadius: "var(--radius)",
            overflow: "hidden",
            border: "1px solid var(--border)",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                flex: "1 1 120px",
                background: "var(--surface)",
                padding: "20px 22px",
                borderRight: i < stats.length - 1 ? "1px solid var(--border)" : "none",
              }}
            >
              <div style={{ fontFamily: "var(--font-head)", fontSize: "1.6rem", fontWeight: 800, color: "var(--accent)", letterSpacing: "-1px", lineHeight: 1 }}>
                {s.value}
              </div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", fontWeight: 500, color: "var(--text-muted)", marginTop: 5, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll cue */}
        <div style={{ ...anim(0.78), display: "flex", alignItems: "center", gap: 14, marginTop: 56 }}>
          <div style={{ width: 1, height: 48, background: "var(--border)" }}>
            <div style={{ width: "100%", height: "50%", background: "var(--accent)", animation: "pfScrollLine 2s ease-in-out infinite" }} />
          </div>
          <span style={{ fontFamily: "var(--font-body)", fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: 600 }}>
            Scroll
          </span>
        </div>
      </div>

      <style>{`
        @keyframes pfBlink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }
        @keyframes pfScrollLine {
          0%   { height: 0%;   opacity: 1; transform: translateY(0); }
          80%  { height: 100%; opacity: 1; }
          100% { height: 100%; opacity: 0; }
        }
        @media (max-width: 480px) {
          #hero h1 { letter-spacing: -1.5px; }
        }
      `}</style>
    </section>
  );
}

export default Hero;