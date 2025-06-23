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
      answer: 'We provide security solutions for all types of properties including residential homes, commercial buildings, retail stores, construction sites, and warehouses.'
    },
    {
      question: 'Can I view my cameras remotely?',
      answer: 'Yes, all our modern CCTV systems come with mobile app access, allowing you to view live footage and receive alerts from anywhere.'
    },
    {
      question: 'Do you offer 24/7 monitoring services?',
      answer: 'Yes, we offer professional 24/7 monitoring services to ensure your property is always protected. We can alert you and the authorities in case of an incident.'
    },
    {
      question: 'How much does a security system cost?',
      answer: 'Costs vary based on your specific needs. We offer free consultations to assess your requirements and provide a detailed, no-obligation quote.'
    },
  ];

  return (
    <section id="faq" className="py-20 bg-background border-b">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-px">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-secondary/30">
              <AccordionTrigger className="p-6 text-left font-bold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="p-6 pt-0 text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}