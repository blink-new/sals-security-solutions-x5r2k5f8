import React from 'react';
import { Button } from './ui/button';
import { ShieldCheck } from 'lucide-react';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-background text-foreground pt-32 pb-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <ShieldCheck className="w-6 h-6 text-primary" />
          <p className="text-primary font-semibold tracking-widest uppercase">Total Security Solutions</p>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
          Advanced Surveillance for the Modern Age
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10">
          We provide cutting-edge CCTV systems and expert monitoring services to protect your assets, property, and people. High-tech security, simplified.
        </p>
        <div className="flex justify-center gap-4">
          <Button 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
            onClick={() => scrollToSection('contact')}
          >
            Request a Free Quote
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => scrollToSection('services')}
          >
            Explore Services
          </Button>
        </div>
      </div>
      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
}
