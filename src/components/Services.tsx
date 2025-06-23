import React from 'react';
import { Button } from './ui/button';
import { Camera, Eye, Shield, Settings, ArrowRight } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Camera,
      title: 'CCTV Camera Systems',
      description: 'High-definition surveillance cameras with advanced features for any environment.',
    },
    {
      icon: Eye,
      title: '24/7 Video Monitoring',
      description: 'Professional monitoring services to respond quickly to incidents and maintain security.',
    },
    {
      icon: Shield,
      title: 'Crime Deterrence',
      description: 'Strategic security implementations designed to actively prevent criminal activity.',
    },
    {
      icon: Settings,
      title: 'Maintenance & Support',
      description: 'Ensuring your security systems remain operational and up-to-date at all times.',
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-secondary/30 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Core Services
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground mt-4">
            We provide a complete range of security services to protect your assets. 
            No project is too big or too small.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-background p-8">
                <div className="w-12 h-12 bg-primary flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
           <Button 
            size="lg" 
            variant="outline" 
            className="rounded-none border-2 group"
            onClick={scrollToContact}
          >
            Get a Custom Quote
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}