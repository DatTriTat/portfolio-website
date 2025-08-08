import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { useWindowSize } from './hooks/useWindowSize';
import { getResponsiveStyles, getDeviceType } from './styles/styles';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const windowSize = useWindowSize();
  
  const deviceType = getDeviceType(windowSize.width);
  const styles = getResponsiveStyles(windowSize.width);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!deviceType.isMobile) {
      setIsMenuOpen(false);
    }
  }, [deviceType.isMobile]);

  return (
    <div style={{ backgroundColor: 'white', color: '#111827', minHeight: '100vh' }}>
      <Header 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        scrolled={scrolled}
        styles={styles}
        deviceType={deviceType}
      />
      <Hero 
        styles={styles}
        deviceType={deviceType}
      />
      <About 
        styles={styles}
        deviceType={deviceType}
      />
      <Experience 
        styles={styles}
        deviceType={deviceType}
      />
      <Projects 
        styles={styles}
        deviceType={deviceType}
      />
      <Skills 
        styles={styles}
        deviceType={deviceType}
      />
      <Contact 
        styles={styles}
        deviceType={deviceType}
      />
      <Footer 
        styles={styles}
        deviceType={deviceType}
      />
    </div>
  );
}

export default App;