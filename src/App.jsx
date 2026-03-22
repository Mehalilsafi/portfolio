import "./portfolio.css"; /* ← import the design system first */
import Nav      from "./components/Nav";
import Hero     from "./components/Hero";
import About    from "./components/About";
import Projects from "./components/Project";
import Contact  from "./components/Contact";

function App() {
  return (
    <>
      {/* Ambient background orbs — rendered once at the root */}
      <div className="pf-orb pf-orb-teal" aria-hidden="true" />
      <div className="pf-orb pf-orb-blue" aria-hidden="true" />

      <Nav />

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;