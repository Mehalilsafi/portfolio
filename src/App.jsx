import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
function App() {
  return (
    <div className="bg-bgPrimary">

    <div className="m-5 ">

      <Nav />
      <Hero/>
      <About/>
    </div>
    </div>
   
  );
}

export default App;
