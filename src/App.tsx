import React from 'react';
import { HeroBlack } from './components/HeroBlack';
import { Services } from './components/Services';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <HeroBlack />
      <Services />
      <About />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;