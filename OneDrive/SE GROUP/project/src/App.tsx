import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <ParticleBackground />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;