import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Restaurant Owner',
      content: 'Sal\'s team installed our CCTV system last year and it\'s been fantastic. The cameras are crystal clear, even at night, and the mobile app makes it so easy to check on the restaurant remotely. Highly recommend!',
      rating: 5,
      location: 'Downtown Bistro'
    },
    {
      name: 'Mike Rodriguez',
      role: 'Construction Manager',
      content: 'We needed security for multiple construction sites and Sal\'s Solutions delivered perfectly. Quick installation, reliable equipment, and great ongoing support. They really understand the construction industry.',
      rating: 5,
      location: 'Rodriguez Construction'
    },
    {
      name: 'Jennifer Park',
      role: 'Homeowner',
      content: 'After a break-in in our neighborhood, we wanted better security. The team was professional, explained everything clearly, and installed a system that fits our home perfectly. We feel so much safer now.',
      rating: 5,
      location: 'Residential Client'
    },
    {
      name: 'David Thompson',
      role: 'Retail Store Manager',
      content: 'The crime deterrence aspect really works. Since installing the visible cameras, we\'ve had zero incidents. The monitoring service gives us extra peace of mind, especially during busy seasons.',
      rating: 5,
      location: 'Thompson Electronics'
    },
    {
      name: 'Lisa Chen',
      role: 'Property Manager',
      content: 'Managing 12 residential units, having reliable security is crucial. The maintenance package is worth every penny - they keep everything running smoothly and respond quickly to any issues.',
      rating: 5,
      location: 'Sunset Apartments'
    },
    {
      name: 'Robert Johnson',
      role: 'Warehouse Owner',
      content: 'Professional from start to finish. They assessed our needs, recommended the right equipment, and installed everything efficiently. The video quality is excellent and the system is very user-friendly.',
      rating: 5,
      location: 'Johnson Logistics'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from satisfied clients who trust us 
            to protect what matters most to them.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-4">
                  <Quote className="w-8 h-8 text-accent opacity-50" />
                  {/* Star Rating */}
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <Star key={starIndex} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-accent font-medium">{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-4 gap-8 items-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-sm text-gray-600">Average Rating</div>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}