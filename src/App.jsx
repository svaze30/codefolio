import "./App.css";
import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import CP from "./Components/CP";
import Header from "./Components/Header";
import Hero from "./Components/Hero";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <CP />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
