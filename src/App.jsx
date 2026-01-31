import { useState } from 'react'
import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from './components/Skills';

import portfolioData from "./data/portfolioData.json"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar data={portfolioData.hero} />
      <Hero data={portfolioData.hero} />
      <Experience data={portfolioData.hero} />
      <Projects data={portfolioData.hero} />
      <Skills data={portfolioData.hero} />
      <Contact data={portfolioData.hero} />
      
      
    </>
  )
}

export default App
