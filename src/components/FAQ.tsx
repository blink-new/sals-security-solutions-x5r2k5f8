import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

export function FAQ() {
  const faqs = [
    {
      question: 'What types of properties do you service?',
      answer: 'We provide security solutions for all types of properties including residential homes, commercial buildings, retail stores, restaurants, construction sites, warehouses, and office buildings. No project is too big or too small for our team.'
    },
    {
      question: 'How long does installation typically take?',
      answer: 'Installation time varies depending on the size and complexity of your system. A typical residential installation takes 4-8 hours, while commercial installations can take 1-3 days. We\'ll provide you with a detailed timeline during your consultation.'
    },
    {
      question: 'Can I view my cameras remotely?',
      answer: 'Yes! All our modern CCTV systems come with mobile app access, allowing you to view live footage, receive alerts, and review recorded videos from anywhere using your smartphone or tablet.'
    },
    {
      question: 'Do you offer 24/7 monitoring services?',
      answer: 'Yes, we offer professional monitoring services where our trained security experts can watch your property around the clock. When an incident is detected, we can immediately alert you and, if necessary, contact emergency services.'
    },
    {
      question: 'What happens if my system needs repairs?',
      answer: 'Our maintenance packages include regular check-ups and priority support. If any issues arise, we provide quick response times and can often resolve problems remotely. For hardware failures, we\'ll replace equipment promptly.'
    },
    {
      question: 'How much does a security system cost?',
      answer: 'Costs vary based on your specific needs, property size, and desired features. We offer free consultations where we\'ll assess your requirements and provide a detailed quote. We have flexible packages to fit different budgets.'
    },
    {
      question: 'Do your cameras work in low light conditions?',
      answer: 'Yes, our cameras are equipped with advanced night vision technology that provides clear footage even in complete darkness. We also offer cameras with infrared capabilities for optimal nighttime surveillance.'
    },
    {
      question: 'Is professional installation required?',
      answer: 'While some basic systems can be self-installed, we strongly recommend professional installation to ensure optimal camera placement, proper wiring, and full system functionality. Professional installation also comes with our warranty and ongoing support.'
    },
    {
      question: 'How long do you store recorded footage?',
      answer: 'Storage duration depends on your system setup and storage capacity. We can configure systems to store footage locally for 30-90 days, or set up cloud storage for longer retention periods. We\'ll help you determine the best storage solution for your needs.'
    },
    {
      question: 'Do you provide training on how to use the system?',
      answer: 'Absolutely! We provide comprehensive training on how to use your security system, including the mobile app, viewing footage, and understanding alerts. We also provide user manuals and ongoing support whenever you need assistance.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about our security solutions and services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-gray-200 rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left py-6 text-lg font-semibold text-gray-900 hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our security experts are here to help you find the perfect solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Get Free Consultation
            </button>
            <a 
              href="tel:5551234567" 
              className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}