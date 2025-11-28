import React, { useState, useEffect } from 'react';
import { SectionId } from '../types';
import { Menu, X, Gamepad2 } from 'lucide-react';
import Button from './Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', id: SectionId.HERO },
    { label: 'Características', id: SectionId.FEATURES },
    { label: 'Planes', id: SectionId.PRICING },
    { label: 'Comparativa', id: SectionId.SOLUTIONS },
    { label: 'Contacto', id: SectionId.CONTACT },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-slate-950/80 backdrop-blur-md border-slate-800 py-3' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo(SectionId.HERO)}>
          <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center transform rotate-3">
            <Gamepad2 className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold text-white tracking-tight">EAM <span className="text-brand-400">Gaming</span></span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-slate-300 hover:text-white text-sm font-medium transition-colors"
            >
              {link.label}
            </button>
          ))}
          <Button size="sm" onClick={() => scrollTo(SectionId.CONTACT)}>Agendar Demo</Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 p-6 flex flex-col gap-4 shadow-2xl">
           {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-left text-slate-300 hover:text-white font-medium py-2"
            >
              {link.label}
            </button>
          ))}
          <Button className="w-full mt-2" onClick={() => scrollTo(SectionId.CONTACT)}>Agendar Demo</Button>
        </div>
      )}
    </header>
  );
};

export default Header;