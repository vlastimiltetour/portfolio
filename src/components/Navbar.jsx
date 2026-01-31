import React, { useEffect, useState } from "react";
import portfolioData from "/src/data/portfolioData.json";

function Navbar() {

  const [visible, setVisible] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      const oneScreen = window.innerHeight * 0.001;

      if (window.scrollY > oneScreen) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);

}, []);


  return (
    <nav id="desktop-nav" className={visible ? "glass-nav-visible": "glass-nav-hidden"}>
      <div class="name-logo">Vlastimil Tetour</div>
      <div>
      <ul className="nav-links">
        <li><a href="#profile">About</a></li>
        <li><a href="#about">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      </div>
    </nav>
  );
}

export default Navbar;