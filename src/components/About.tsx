import React from 'react';
import { Card, CardContent } from './ui/card';
import { Building, Home, Construction, Store, CheckCircle } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Sal's Security Solutions?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                With over 15 years of experience in the security industry, we've built our reputation 
                on delivering reliable, professional security solutions that give our clients complete peace of mind.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-4">
              {[
                'Serving both commercial and residential clients',
                'Flexible solutions for any environment',
                'Customizable packages to fit your requirements',
                'Professional installation and ongoing support',
                'Advanced technology with user-friendly interfaces',
                '24/7 technical support and maintenance services'
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 py-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-gray-600 font-medium">Successful Installations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-gray-600 font-medium">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">99%</div>
                <div className="text-sm text-gray-600 font-medium">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Column - Applications */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Perfect For Any Environment
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Building,
                  title: 'Commercial Properties',
                  description: 'Offices, retail stores, warehouses'
                },
                {
                  icon: Home,
                  title: 'Residential Homes',
                  description: 'Houses, apartments, condos'
                },
                {
                  icon: Construction,
                  title: 'Construction Sites',
                  description: 'Temporary and permanent setups'
                },
                {
                  icon: Store,
                  title: 'Retail Locations',
                  description: 'Shops, restaurants, malls'
                }
              ].map((application, index) => {
                const IconComponent = application.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0 text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">{application.title}</h4>
                      <p className="text-sm text-gray-600">{application.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Promise Box */}
            <Card className="bg-gradient-to-r from-primary to-primary/80 text-white p-8 mt-8">
              <CardContent className="p-0 text-center">
                <h4 className="text-xl font-bold mb-3">Our Promise to You</h4>
                <p className="text-blue-100 leading-relaxed">
                  "Your safety is our priority. We're committed to providing security solutions 
                  that not only protect your property but give you complete confidence and peace of mind."
                </p>
                <div className="mt-4 text-sm text-blue-200">
                  - Sal, Founder & Lead Security Specialist
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}