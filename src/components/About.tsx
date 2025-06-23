import React from 'react';
import { CheckCircle } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              Why Sal's Security?
            </h2>
            <p className="text-muted-foreground text-lg">
              With over 15 years of experience, we deliver reliable, professional security solutions that give our clients complete peace of mind. We are committed to quality and customer satisfaction.
            </p>
            <div className="space-y-3">
              {[
                'Commercial & Residential Clients',
                'Flexible, Customized Solutions',
                'Professional Installation & Support',
                'Advanced, User-Friendly Technology'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-mono">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-px bg-border">
            <div className="bg-background p-8 text-center">
              <p className="text-4xl font-bold text-primary">15+</p>
              <p className="text-muted-foreground mt-2">Years Experience</p>
            </div>
            <div className="bg-background p-8 text-center">
              <p className="text-4xl font-bold text-primary">500+</p>
              <p className="text-muted-foreground mt-2">Installations</p>
            </div>
            <div className="bg-background p-8 text-center">
              <p className="text-4xl font-bold text-primary">99%</p>
              <p className="text-muted-foreground mt-2">Client Satisfaction</p>
            </div>
            <div className="bg-background p-8 text-center">
              <p className="text-4xl font-bold text-primary">24/7</p>
              <p className="text-muted-foreground mt-2">Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}