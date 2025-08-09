import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './Components/Header';
import Hero from './Components/Hero';
import Services from './Components/Services';
import About from './Components/About';
import WorkSamples from './Components/WorkSamples';
import Footer from './Components/Footer';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Only animate once
    });
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
      <WorkSamples />
      <Footer />
    </>
  );
};

export default App;
