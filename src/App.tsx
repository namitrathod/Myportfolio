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
import Spotlight from './components/Spotlight.tsx';

// ─── App Root ───────────────────────────────────────────────────────────────
// Section order: Hero → About → Projects → Experience → Skills → Contact
// MotionConfig with reducedMotion="user" honors the OS "reduce motion" setting.
function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-canvas text-ink">
        <ScrollProgress />
        <Spotlight />
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
