import { useEffect } from 'react';
import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GreetComp from "./components/GreetComp";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <GreetComp />
      <AboutMe />
      <hr />
      <Projects />
      <hr />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
