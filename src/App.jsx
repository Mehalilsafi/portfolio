import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
function App() {
  return (
    <div className="bg-bgPrimary">

    <div className="m-5 lg:pb-[70px] lg:pl-[70px] lg:pr-[70px] 
     xl:pb-[150] xl:pl-[150] xl:pr-[150] 2xl:pb-[200px] 2xl:pl-[200px] 2xl:pr-[200px] ;
    ">

      <Nav />
      <Hero/>
      <About/>
      <Project/>
    </div>
    </div>
   
  );
}

export default App;
