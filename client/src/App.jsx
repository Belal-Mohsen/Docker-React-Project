import { Element } from 'react-scroll';
import About from "./components/main/About";
import Contact from "./components/main/Contact";
import Hero from "./components/main/Hero";
import Navbar from "./components/main/Navbar";
import Projects from "./components/main/Projects";
import Skills from "./components/main/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Element name="hero"><Hero /></Element>
      <Element name="about"><About /></Element>
      <Element name="skills"><Skills /></Element>
      <Element name="projects"><Projects /></Element>
      <Element name="contact"><Contact /></Element>
    </>
  );
}

export default App;
