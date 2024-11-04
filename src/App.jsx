import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import GsrProjects from "./components/GsrProjects";


const App = () => {
  return (
    <div>
      <Navbar />
 
      <Hero />
      <About />
      <Skills />
      <Project />
      {/* <GsrProjects/> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
