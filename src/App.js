import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.js";
import Particles from "react-particles-js";
import Home from "./components/Home.js";
import AboutMe from "./components/AboutMe.js";
import Services from "./components/Services.js";
import ContactUs from "./components/ContactUs.js";
import Skills from "./components/Skills.js";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
      <Services />
      <ContactUs />
    </>
  );
}

export default App;
