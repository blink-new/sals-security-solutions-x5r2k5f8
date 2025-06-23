import React from 'react';
import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Restaurant Owner',
      content: 'Sal\'s team was fantastic. The cameras are crystal clear, and the mobile app is easy to use. Highly recommend!',
    },
    {
      name: 'Mike Rodriguez',
      role: 'Construction Manager',
      content: 'Quick installation, reliable equipment, and great support. They understand the needs of the construction industry.',
    },
    {
      name: 'Jennifer Park',
      role: 'Homeowner',
      content: 'After a break-in in our neighborhood, we wanted better security. The team was professional and we feel much safer now.',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-secondary/30 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Trusted by Businesses & Homeowners
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground mt-4">
            We are committed to providing solutions that earn our clients' trust.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background p-8 space-y-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="text-foreground italic">
                " {testimonial.content} "
              </blockquote>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}