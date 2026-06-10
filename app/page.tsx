"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ForWhom from '@/components/ForWhom';
import MainAdvantage from '@/components/MainAdvantage';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import ForTeachers from '@/components/ForTeachers';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import AuthModal from '@/components/AuthModal';
import DemoModal from '@/components/DemoModal';

export default function GrooveLabLanding() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const openLogin = () => {
    setAuthMode('login');
    setAuthModalOpen(true);
  };

  const openSignup = () => {
    setAuthMode('signup');
    setAuthModalOpen(true);
  };

  const openDemo = () => setDemoModalOpen(true);

  const scrollToTeachers = () => {
    const el = document.getElementById('for-teachers');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-[#f5f5f5] overflow-x-hidden">
      <Navbar 
        onLoginClick={openLogin} 
        onSignupClick={openSignup} 
      />
      
      <main>
        <Hero 
          onPrimaryCta={openSignup} 
          onDemoClick={openDemo} 
          onTeachersClick={scrollToTeachers}
        />
        
        <ForWhom />
        
        <MainAdvantage />
        
        <Features />
        
        <HowItWorks />
        
        <ForTeachers onCtaClick={openSignup} />
        
        <Pricing />
        
        <FAQ />
      </main>

      <Footer />

      {/* Modals */}
      <AuthModal 
        isOpen={authModalOpen} 
        onClose={() => setAuthModalOpen(false)} 
        initialMode={authMode} 
      />
      <DemoModal 
        isOpen={demoModalOpen} 
        onClose={() => setDemoModalOpen(false)} 
      />
    </div>
  );
}
