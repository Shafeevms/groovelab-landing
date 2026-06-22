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
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';
import DemoModal from '@/components/DemoModal';

export default function DrumionLanding() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const openDemo = () => setDemoModalOpen(true);

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-[#f5f5f5] overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero 
          onDemoClick={openDemo} 
        />
        
        <ForWhom />
        
        <MainAdvantage />
        
        <Features />
        
        <HowItWorks />
        
        <ForTeachers />
        
        <Pricing />
        
        <FAQ />

        <FinalCta />
      </main>

      <Footer />

      {/* Modals */}
      <DemoModal 
        isOpen={demoModalOpen} 
        onClose={() => setDemoModalOpen(false)} 
      />
    </div>
  );
}
