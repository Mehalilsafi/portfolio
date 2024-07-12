import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
function App() {
  return (
    <div className="bg-bgPrimary">

    <div className="m-5 lg:pb-[200px] lg:pl-[200px] lg:pr-[200px]  ">

      <Nav />
      <Hero/>
      <About/>
      <Project/>
    </div>
    </div>
   
  );
}

export default App;
