import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

/* assets */
import bio   from "../assets/bio.png";
import pic   from "../assets/picVibe.png";
import lib   from "../assets/lib.png";
import univ  from "../assets/univ.png";
import wefit from "../assets/wefit.png";
import ayor  from "../assets/ayor.png";

/* ── scroll reveal hook ── */
function useReveal(delay = 0) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible, delay];
}

/* ── SVG icons ── */
const GithubIcon = ({ size = 14 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width={size} height={size}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);
const ExternalIcon = ({ size = 14 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width={size} height={size}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

/* ── Data ── */
const FEATURED = {
  name: "Ayor.ai",
  tagline: "Production · Algerian Startup",
  desc: "Working as a frontend developer on a live production SaaS used by real businesses in Algeria. I built a full store builder where merchants customize themes, fonts, layouts, and content in real time — all changes reflect instantly on their storefront. Also optimized every store page from a Lighthouse score of 48 up to 98.",
  metrics: [
    { label: "Lighthouse Score", value: "98"  },
    { label: "Performance Gain", value: "+50" },
    { label: "Role",             value: "FE Dev" },
  ],
  stack: ["React.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  github: "https://github.com/Mehalilsafi/Ayor.ai",
  live:   "https://ayor.ai/",
  img:    ayor,
};

const MEDIUM_PROJECTS = [
 {
    name: "Hanouti",
    desc: "Personal full-stack project — actively in development. Built everything from DB schema to UI: a landing page builder for e-commerce users.",
    stack: [ "React.js", "Express.js", "PostgreSQL"],
    github: "https://github.com/Mehalilsafi/Hanouti",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.7" width="22" height="22">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    name: "Smart Parking",
    desc: "Real-time parking slot availability over WebSockets. Multiple concurrent sessions sync instantly with no refresh.",
    stack: ["React.js", "Express.js", "MongoDB", "Socket.io"],
    github: "https://github.com/Mehalilsafi/smartParkingSystem",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.7" width="22" height="22">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
];

const SMALL_PROJECTS = [
  {
    name: "Bio Express",
    desc: "Organic e-commerce with Next.js API routes + Supabase.",
    stack: ["Next.js", "Supabase", "Zustand"],
    github: "https://github.com/Mehalilsafi/bioExpress",
    img: bio,
  },
  {
    name: "Univ App",
    desc: "Faculty portal for Hassiba Ben Bouali University.",
    stack: ["Next.js", "Tailwind", "Preline"],
    github: "https://github.com/messabih-khalil/uhbc-project",
    img: univ,
  },
  {
    name: "Wefit",
    desc: "Workout app: exercises by muscle group, gym guidance.",
    stack: ["Next.js", "CSS"],
    github: "https://github.com/Mehalilsafi/WefitApp",
    img: wefit,
  },
  {
    name: "PicVibe",
    desc: "Image gallery — user profiles, uploads, personal galleries.",
    stack: ["Next.js", "shadcn/ui", "Supabase"],
    github: "https://github.com/Mehalilsafi/PicVibe",
    img: pic,
  },
];

const SLIDER_IMAGES = [
  { src: ayor,  name: "Ayor.ai",     description: "Landing Page Builder + Analytics",       tool: "React, TS, Tailwind" },
  { src: bio,   name: "Bio Express", description: "Organic E-commerce",                      tool: "Next.js, Supabase, Zustand" },
  { src: univ,  name: "Univ App",    description: "University Faculty Portal",               tool: "Next.js, Tailwind, Preline" },
  { src: wefit, name: "Wefit",       description: "Workout & Gym Companion",                 tool: "Next.js, CSS" },
  { src: lib,   name: "Bookling",    description: "Book Rental App",                         tool: "Next.js, Tailwind, Supabase" },
  { src: pic,   name: "PicVibe",     description: "Image Gallery Platform",                  tool: "Next.js, shadcn/ui, Supabase" },
];

/* ── Sub-components ── */
function CardLinks({ github, live }) {
  return (
    <div style={{ display: "flex", gap: 7 }}>
      {github && (
        <a href={github} target="_blank" rel="noreferrer" className="pf-card-link" aria-label="GitHub">
          <GithubIcon />
        </a>
      )}
      {live && (
        <a href={live} target="_blank" rel="noreferrer" className="pf-card-link" aria-label="Live demo">
          <ExternalIcon />
        </a>
      )}
    </div>
  );
}

function StackBadges({ items }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 16 }}>
      {items.map((s) => (
        <span key={s} className="pf-badge">{s}</span>
      ))}
    </div>
  );
}

/* ── Featured card ── */
function FeaturedCard({ p }) {
  return (
    <div className="pf-card" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, alignItems: "center" }} id="pf-featured">
      {/* Image side */}
      <div style={{ borderRadius: 10, overflow: "hidden", border: "1px solid var(--border)", aspectRatio: "16/9" }}>
        <img src={p.img} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.6s ease" }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.04)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
        />
      </div>

      {/* Info side */}
      <div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
          <span style={{ padding: "3px 10px", borderRadius: 40, background: "rgba(99,211,168,0.1)", border: "1px solid rgba(99,211,168,0.22)", fontSize: "0.65rem", fontWeight: 700, color: "var(--accent)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            {p.tagline}
          </span>
          <CardLinks github={p.github} live={p.live} />
        </div>

        <h3 style={{ fontFamily: "var(--font-head)", fontWeight: 800, fontSize: "1.5rem", color: "var(--text)", letterSpacing: "-0.5px", marginBottom: 10 }}>
          {p.name}
        </h3>

        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.88rem", color: "var(--text-dim)", lineHeight: 1.75, fontWeight: 300, marginBottom: 18 }}>
          {p.desc}
        </p>

        {/* Metrics */}
        <div style={{ display: "flex", gap: 12, marginBottom: 4 }}>
          {p.metrics.map((m) => (
            <div key={m.label} style={{ background: "var(--surface2)", border: "1px solid var(--border)", borderRadius: 8, padding: "8px 14px" }}>
              <div style={{ fontFamily: "var(--font-head)", fontSize: "1.1rem", fontWeight: 800, color: "var(--accent)", letterSpacing: "-0.5px" }}>
                {m.value}
              </div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: "0.62rem", fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: 2 }}>
                {m.label}
              </div>
            </div>
          ))}
        </div>

        <StackBadges items={p.stack} />
      </div>
    </div>
  );
}

/* ── Medium card ── */
function MediumCard({ p }) {
  return (
    <div className="pf-card">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
        <div style={{ width: 40, height: 40, borderRadius: 10, background: "var(--accent-dim)", border: "1px solid rgba(99,211,168,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          {p.icon}
        </div>
        <CardLinks github={p.github} live={p.live} />
      </div>
      <h3 style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: "1.05rem", color: "var(--text)", marginBottom: 8, letterSpacing: "-0.3px" }}>
        {p.name}
      </h3>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "var(--text-dim)", lineHeight: 1.75, fontWeight: 300 }}>
        {p.desc}
      </p>
      <StackBadges items={p.stack} />
    </div>
  );
}

/* ── Small card ── */
function SmallCard({ p }) {
  return (
    <div className="pf-card" style={{ padding: 20 }}>
      {/* Thumbnail */}
      <div style={{ borderRadius: 8, overflow: "hidden", border: "1px solid var(--border)", aspectRatio: "16/9", marginBottom: 14 }}>
        <img src={p.img} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <h3 style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: "0.95rem", color: "var(--text)", letterSpacing: "-0.2px" }}>
          {p.name}
        </h3>
        <CardLinks github={p.github} live={p.live} />
      </div>

      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "var(--text-dim)", lineHeight: 1.7, fontWeight: 300, margin: "6px 0 12px" }}>
        {p.desc}
      </p>
      <StackBadges items={p.stack} />
    </div>
  );
}

/* ── Projects (main export) ── */
function Projects() {
  const [hRef, hVisible] = useReveal();
  const [fRef, fVisible] = useReveal();
  const [mRef, mVisible] = useReveal();
  const [sRef, sVisible] = useReveal();
  const [slRef, slVisible] = useReveal();

  return (
    <section id="projects" className="pf-section">
      <div className="pf-container">

        {/* Header */}
        <div ref={hRef} className={`pf-reveal ${hVisible ? "pf-in" : ""}`}>
          <div className="pf-label">Projects</div>
          <h2 className="pf-heading">Things I've<br />shipped</h2>
        </div>

        {/* 1 — Featured */}
        <div ref={fRef} className={`pf-reveal ${fVisible ? "pf-in" : ""}`} style={{ marginBottom: 20 }}>
          <FeaturedCard p={FEATURED} />
        </div>

        {/* 2 — Medium two-col */}
        <div
          ref={mRef}
          className={`pf-reveal ${mVisible ? "pf-in" : ""}`}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
            marginBottom: 20,
            transitionDelay: "0.1s",
          }}
          id="pf-medium-grid"
        >
          {MEDIUM_PROJECTS.map((p) => (
            <MediumCard key={p.name} p={p} />
          ))}
        </div>

        {/* 3 — Small four-col */}
        <div
          ref={sRef}
          className={`pf-reveal ${sVisible ? "pf-in" : ""}`}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
            transitionDelay: "0.15s",
          }}
          id="pf-small-grid"
        >
          {SMALL_PROJECTS.map((p) => (
            <SmallCard key={p.name} p={p} />
          ))}
        </div>

        {/* Slider — visual preview */}
        <div
          ref={slRef}
          className={`pf-reveal ${slVisible ? "pf-in" : ""}`}
          style={{ marginTop: 64, transitionDelay: "0.1s" }}
        >
          <div style={{ fontFamily: "var(--font-body)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 20 }}>
            Visual preview
          </div>

          <div style={{ background: "var(--surface)", borderRadius: "var(--radius-lg)", border: "1px solid var(--border)", overflow: "hidden", padding: "8px 0" }}>
            <Swiper
              effect="coverflow"
              grabCursor
              centeredSlides
              slidesPerView="auto"
              coverflowEffect={{ rotate: 40, stretch: 0, depth: 120, modifier: 1, slideShadows: true }}
              pagination={{ clickable: true }}
              modules={[EffectCoverflow, Pagination]}
              style={{ paddingBottom: 40 }}
            >
              {SLIDER_IMAGES.map((img, i) => (
                <SwiperSlide key={i} style={{ width: 320 }}>
                  <div style={{ borderRadius: 10, overflow: "hidden", position: "relative", border: "1px solid var(--border)" }}>
                    <img
                      src={img.src}
                      alt={img.name}
                      style={{ width: "100%", display: "block", objectFit: "cover", aspectRatio: "16/9" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(to top, rgba(8,11,16,0.92) 0%, transparent 55%)",
                        opacity: 0,
                        transition: "opacity 0.3s",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        padding: 16,
                      }}
                      className="pf-slide-overlay"
                    >
                      <div style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: "0.95rem", color: "var(--text)" }}>{img.name}</div>
                      <div style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "var(--text-dim)", marginTop: 2 }}>{img.description}</div>
                      <div style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", color: "var(--accent)", marginTop: 4, fontWeight: 500 }}>{img.tool}</div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <style>{`
        .pf-slide-overlay:hover { opacity: 1 !important; }
        @media (max-width: 900px) {
          #pf-featured      { grid-template-columns: 1fr !important; }
          #pf-small-grid    { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          #pf-medium-grid   { grid-template-columns: 1fr !important; }
          #pf-small-grid    { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

export default Projects;