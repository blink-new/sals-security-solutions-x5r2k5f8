import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Camera, Eye, Shield, Settings, ArrowRight } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Camera,
      title: 'CCTV Camera Sales',
      description: 'High-quality surveillance cameras with advanced features including night vision, motion detection, and HD recording capabilities.',
      features: ['Indoor & outdoor cameras', 'Night vision technology', 'Motion detection alerts', 'HD/4K recording quality'],
      popular: false
    },
    {
      icon: Eye,
      title: 'Video Review & Monitoring',
      description: 'Professional monitoring services with expert video review to help you respond quickly to incidents and maintain security.',
      features: ['24/7 monitoring available', 'Expert video analysis', 'Incident reporting', 'Real-time alerts'],
      popular: true
    },
    {
      icon: Shield,
      title: 'Crime Deterrence Solutions',
      description: 'Strategic security implementations designed to actively prevent criminal activity and protect your property.',
      features: ['Visible security presence', 'Strategic camera placement', 'Warning signage', 'Integrated alarm systems'],
      popular: false
    },
    {
      icon: Settings,
      title: 'Maintenance & Support',
      description: 'Comprehensive maintenance packages ensuring your security systems remain operational and up-to-date.',
      features: ['Regular system checks', 'Software updates', 'Technical support', 'Equipment replacement'],
      popular: false
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Security Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From CCTV installation to ongoing monitoring, we provide complete security solutions 
            tailored to your specific needs - no project too big or small.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  service.popular ? 'ring-2 ring-accent shadow-lg' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-accent text-white px-3 py-1 text-sm font-semibold rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                    service.popular ? 'bg-accent' : 'bg-primary'
                  }`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    variant="outline"
                    className="w-full mt-6 group hover:bg-primary hover:text-white border-primary text-primary"
                    onClick={scrollToContact}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need a Custom Security Solution?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Every property has unique security needs. Our experts will work with you to design 
            a customized solution that fits your requirements and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 px-8"
              onClick={scrollToContact}
            >
              Schedule Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-white px-8"
            >
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}