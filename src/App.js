import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import GreetComp from "./components/GreetComp";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <GreetComp />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
