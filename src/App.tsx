import React from 'react';
import { MotionConfig } from 'framer-motion';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Projects from './components/Projects.tsx';
import Experience from './components/Experience.tsx';
import Skills from './components/Skills.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import ScrollProgress from './components/ScrollProgress.tsx';

// ─── App Root ───────────────────────────────────────────────────────────────
function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-canvas text-ink overflow-x-hidden">
        <ScrollProgress />
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
