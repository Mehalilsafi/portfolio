import { useEffect, useRef, useState } from "react";

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Contact() {
  const [ref, visible] = useReveal();

  return (
    <section id="contact" className="pf-section" style={{ paddingBottom: 0 }}>
      <div className="pf-container">
        <div
          ref={ref}
          className={`pf-reveal ${visible ? "pf-in" : ""}`}
        >
          {/* Main CTA block */}
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-lg)",
              padding: "64px 48px",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Top accent line */}
            <div style={{ position: "absolute", top: -1, left: "50%", transform: "translateX(-50%)", width: 220, height: 1, background: "linear-gradient(90deg, transparent, var(--accent), transparent)" }} />

            {/* Soft glow */}
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 400, height: 300, background: "var(--accent)", opacity: 0.03, borderRadius: "50%", filter: "blur(60px)", pointerEvents: "none" }} />

            <div style={{ position: "relative" }}>
              <div className="pf-label" style={{ justifyContent: "center" }}>Contact</div>

              <h2
                style={{
                  fontFamily: "var(--font-head)",
                  fontWeight: 800,
                  fontSize: "clamp(1.8rem, 4vw, 3rem)",
                  letterSpacing: "-1.5px",
                  color: "var(--text)",
                  lineHeight: 1.08,
                  marginBottom: 16,
                  marginTop: 4,
                }}
              >
                Let's build something<br />
                <span style={{ color: "var(--accent)" }}>great together.</span>
              </h2>

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1rem",
                  fontWeight: 300,
                  color: "var(--text-dim)",
                  lineHeight: 1.8,
                  maxWidth: 440,
                  margin: "0 auto 40px",
                }}
              >
                Whether you need a full-stack app, a performance audit, or a reliable
                dev for your team — I'm open to projects, freelance work, and remote roles.
              </p>

              {/* CTA buttons */}
              <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 12, marginBottom: 48 }}>
                <a href="mailto:safiou102003@gmail.com" className="pf-btn pf-btn-primary">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  Send an email
                </a>
                <a
                  href="https://www.linkedin.com/in/safi-mhalil"
                  target="_blank"
                  rel="noreferrer"
                  className="pf-btn pf-btn-outline"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  LinkedIn
                </a>
                <a href="/resume.pdf" download className="pf-btn pf-btn-outline">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download CV
                </a>
              </div>

              {/* Divider */}
              <div style={{ width: "100%", height: 1, background: "var(--border)", marginBottom: 32 }} />

              {/* Response time + quick facts */}
              <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 32 }}>
                {[
                  { icon: "⚡", text: "Usually responds within 24h" },
                  { icon: "🌍", text: "Remote-first, any timezone" },
                  { icon: "🤝", text: "Open to freelance & full-time" },
                ].map(({ icon, text }) => (
                  <div key={text} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: "1rem" }}>{icon}</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", color: "var(--text-muted)", fontWeight: 500 }}>
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer style={{ padding: "32px 0", textAlign: "center", borderTop: "1px solid var(--border)", marginTop: 48 }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.78rem", color: "var(--text-muted)", fontWeight: 300 }}>
            Designed &amp; built by{" "}
            <span style={{ color: "var(--accent)", fontWeight: 600 }}>Safi Mehalil</span>
            {" "}· 2025
          </p>
        </footer>
      </div>

      <style>{`
        @media (max-width: 600px) {
          #contact .pf-card { padding: 36px 20px !important; }
        }
      `}</style>
    </section>
  );
}

export default Contact;