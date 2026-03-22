import { useState, useEffect } from "react";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="14" height="14">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const NAV_LINKS = [
  { href: "#about",    label: "About"    },
  { href: "#projects", label: "Projects" },
  { href: "#contact",  label: "Contact"  },
];

function Nav() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [activeId,  setActiveId]  = useState("");

  /* Scroll → backdrop */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Active section detection */
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  /* Close menu on link click */
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        height: "var(--nav-h)",
        background: scrolled
          ? "rgba(8,11,16,0.95)"
          : "rgba(8,11,16,0.55)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        transition: "background 0.3s",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-w)",
          margin: "0 auto",
          padding: "0 24px",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          style={{
            fontFamily: "var(--font-head)",
            fontWeight: 800,
            fontSize: "1.05rem",
            letterSpacing: "-0.5px",
            color: "var(--text)",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          safi<span style={{ color: "var(--accent)" }}>.</span>dev
        </a>

        {/* Desktop nav links */}
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            listStyle: "none",
          }}
          className="pf-nav-desktop"
        >
          {NAV_LINKS.map(({ href, label }) => {
            const id = href.replace("#", "");
            const isActive = activeId === id;
            return (
              <li key={href}>
                <a
                  href={href}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.82rem",
                    fontWeight: 500,
                    color: isActive ? "var(--accent)" : "var(--text-dim)",
                    textDecoration: "none",
                    padding: "6px 16px",
                    borderRadius: 40,
                    background: isActive ? "var(--accent-dim)" : "transparent",
                    transition: "color 0.2s, background 0.2s",
                    display: "block",
                    letterSpacing: "0.02em",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "var(--text)";
                      e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "var(--text-dim)";
                      e.currentTarget.style.background = "transparent";
                    }
                  }}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right: icons + resume btn */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <a
            href="https://github.com/Mehalilsafi"
            target="_blank"
            rel="noreferrer"
            className="pf-icon-btn"
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/safi-mhalil"
            target="_blank"
            rel="noreferrer"
            className="pf-icon-btn"
            aria-label="LinkedIn"
          >
            <LinkedinIcon />
          </a>

          {/* Resume — replace href with actual resume file path */}
          <a
            href="/resume.pdf"
            download
            className="pf-btn pf-btn-primary"
            style={{ padding: "8px 18px", fontSize: "0.8rem" }}
          >
            <DownloadIcon />
            <span className="pf-resume-label">Resume</span>
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="pf-hamburger"
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 6,
              display: "none",
              flexDirection: "column",
              gap: 5,
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: 22,
                  height: 2,
                  background: "var(--text)",
                  borderRadius: 2,
                  transformOrigin: "center",
                  transition: "transform 0.3s, opacity 0.3s",
                  transform:
                    menuOpen
                      ? i === 0 ? "translateY(7px) rotate(45deg)"
                      : i === 2 ? "translateY(-7px) rotate(-45deg)"
                      : "scaleX(0)"
                      : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(8,11,16,0.98)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            padding: "16px 24px 20px",
          }}
        >
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={handleLinkClick}
              style={{
                display: "block",
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                fontWeight: 600,
                color: "var(--text-dim)",
                textDecoration: "none",
                padding: "12px 0",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              {label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginTop: 16,
              padding: "10px 20px",
              background: "var(--accent)",
              color: "#080b10",
              borderRadius: "var(--radius)",
              fontWeight: 700,
              fontSize: "0.88rem",
              textDecoration: "none",
            }}
          >
            <DownloadIcon />
            Download Resume
          </a>
        </div>
      )}

      {/* Inline responsive styles */}
      <style>{`
        @media (max-width: 700px) {
          .pf-nav-desktop { display: none !important; }
          .pf-hamburger   { display: flex !important; }
          .pf-resume-label { display: none; }
        }
      `}</style>
    </nav>
  );
}

export default Nav;