import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
function App() {
  return (
    <div className="bg-bgPrimary">

    <div className="m-5 pb-60 pl-60 pr-60  ">

      <Nav />
      <Hero/>
      <About/>
      <Project/>
    </div>
    </div>
   
  );
}

export default App;
