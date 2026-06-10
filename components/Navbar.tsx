"use client";

import React, { useState } from 'react';
import { useLanguage } from '@/lib/i18n';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onLoginClick: () => void;
  onSignupClick: () => void;
}

export default function Navbar({ onLoginClick, onSignupClick }: NavbarProps) {
  const { t, language, setLanguage } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: '#features', label: t.nav.features },
    { href: '#how-it-works', label: t.nav.howItWorks },
    { href: '#for-teachers', label: t.nav.forTeachers },
    { href: '#pricing', label: t.nav.pricing },
    { href: '#faq', label: t.nav.faq },
  ];

  const languages: { code: 'en' | 'ru' | 'es'; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'ru', label: 'RU' },
    { code: 'es', label: 'ES' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-lg border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-[#a3e635] flex items-center justify-center">
            <span className="text-[#0a0a0a] font-bold text-xl tracking-[-1px]">GL</span>
          </div>
          <div className="font-semibold text-2xl tracking-[-0.5px] text-white group-hover:text-[#a3e635] transition-colors">
            GrooveLab
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-9 text-sm font-medium">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="btn-ghost hover:text-white transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right side controls */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div className="lang-switch hidden sm:flex">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`lang-btn ${language === lang.code ? 'active' : ''}`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          {/* Auth buttons desktop */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onLoginClick}
              className="px-5 py-2 text-sm font-medium text-[#a1a1aa] hover:text-white transition-colors"
            >
              {t.nav.login}
            </button>
            <button
              onClick={onSignupClick}
              className="btn-primary px-5 py-2 rounded-full text-sm"
            >
              {t.nav.getStarted}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-[#a1a1aa] hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mobile-nav border-t border-[#262626]"
          >
            <div className="px-6 py-6 flex flex-col gap-4 text-sm font-medium">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left py-2 text-[#a1a1aa] hover:text-white transition-colors"
                >
                  {link.label}
                </button>
              ))}

              <div className="h-px bg-[#262626] my-2" />

              {/* Mobile lang switch */}
              <div className="flex gap-2 pb-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setMobileOpen(false);
                    }}
                    className={`flex-1 py-2 rounded-full text-sm border transition-all ${
                      language === lang.code
                        ? 'bg-[#a3e635] text-[#0a0a0a] border-[#a3e635]'
                        : 'border-[#262626] text-[#a1a1aa]'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>

              <div className="flex flex-col gap-3 pt-2">
                <button
                  onClick={() => {
                    onLoginClick();
                    setMobileOpen(false);
                  }}
                  className="w-full py-3 rounded-full border border-[#262626] text-[#a1a1aa] hover:text-white hover:border-[#3f3f46] transition-colors"
                >
                  {t.nav.login}
                </button>
                <button
                  onClick={() => {
                    onSignupClick();
                    setMobileOpen(false);
                  }}
                  className="btn-primary w-full py-3 rounded-full text-sm"
                >
                  {t.nav.getStarted}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
