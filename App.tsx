
import React, { useEffect } from 'react';
import { Background } from './components/Background';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Heritage } from './components/Heritage';
import { Landmarks } from './components/Landmarks';
import { Manifesto } from './components/Manifesto';
import { Experiences } from './components/Experiences';
import { Stats } from './components/Stats';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Cursor } from './components/Cursor';
import { Gyro } from './components/Gyro';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen">
      <Cursor />
      <Gyro />
      <Background />
      <Navigation />
      
      <main className="relative z-10 flex flex-col gap-0">
        <Hero />
        <Heritage />
        <Landmarks />
        <Manifesto />
        <Experiences />
        <Stats />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
