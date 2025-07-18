import React, { useState } from 'react';
import { Button } from './ui/button';
import { Shield, Menu, X, Phone } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Sal's Security</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>(555) 123-4567</span>
            </div>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Free Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-muted-foreground"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background">
            <nav className="flex flex-col space-y-3 px-2">
              <button
                onClick={() => scrollToSection('services')}
                className="text-left text-muted-foreground hover:text-primary transition-colors py-2"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-muted-foreground hover:text-primary transition-colors py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-muted-foreground hover:text-primary transition-colors py-2"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-left text-muted-foreground hover:text-primary transition-colors py-2"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-muted-foreground hover:text-primary transition-colors py-2"
              >
                Contact
              </button>
              <div className="pt-3 border-t border-border">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                  <Phone className="w-4 h-4" />
                  <span>(555) 123-4567</span>
                </div>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Free Quote
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
