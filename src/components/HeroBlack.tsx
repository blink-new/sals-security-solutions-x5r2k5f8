import React from 'react';
import { Button } from './ui/button';

export function HeroBlack() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-black text-white min-h-[60vh] flex items-center">
      <div className="max-w-5xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight mb-6">
            Secure Your Property with <br />
            <span className="text-gray-300">Professional CCTV & Video Monitoring</span>
          </h1>
          <p className="text-lg text-gray-400 mb-8">
            Tailored security solutions for commercial and residential clients. 
            Expert installation, 24/7 monitoring, and reliable maintenance.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-200"
              onClick={() => scrollToSection('contact')}
            >
              Get Free Quote
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border border-white text-white hover:bg-white hover:text-black"
              onClick={() => scrollToSection('services')}
            >
              View Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
