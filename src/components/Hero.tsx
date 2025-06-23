import React from 'react';
import { Button } from './ui/button';
import { CheckCircle } from 'lucide-react';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-20 pb-8 security-gradient overflow-hidden border-b border-border">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Content */}
          <div className="text-black space-y-6">
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-2">
              Professional CCTV & Video Security
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed max-w-xl mb-2">
              Protect your property with high-quality CCTV cameras and expert monitoring. Serving commercial and residential clients—no project too big or small.
            </p>
            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-2 py-2">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-black" />
                <span className="text-gray-800 text-sm">24/7 Monitoring</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-black" />
                <span className="text-gray-800 text-sm">HD Night Vision</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-black" />
                <span className="text-gray-800 text-sm">Crime Deterrence</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-black" />
                <span className="text-gray-800 text-sm">Pro Installation</span>
              </div>
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <Button 
                size="lg" 
                className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-base font-semibold"
                onClick={() => scrollToSection('contact')}
              >
                Get Free Quote
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-3 text-base font-semibold"
                onClick={() => scrollToSection('services')}
              >
                View Services
              </Button>
            </div>
          </div>

          {/* Right Column - CCTV Image */}
          <div className="relative flex justify-center items-center">
            <img 
              src="/cctv-bw.jpg" 
              alt="CCTV Camera" 
              className="bw-img rounded-xl shadow-lg w-full max-w-xs h-64 object-cover border border-border"
              style={{ minWidth: 220 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
