import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./style.css";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Portfolio from "./components/Portfolio/portfolio";
import Contact from "./components/Contacts/contact";
import Footer from "./components/Footer/footer";

export default function App() {
  return (
    <div className="main">
      <Navbar />
      <Intro />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer/>
    </div>
  );
}
