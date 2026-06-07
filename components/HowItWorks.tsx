"use client";

import React from 'react';
import { useLanguage } from '@/lib/i18n';
import { motion } from 'framer-motion';

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="section bg-[#111] border-y border-[#262626] py-20 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="text-xs tracking-[3px] text-[#a3e635] mb-3 font-medium">SIMPLE WORKFLOW</div>
          <h2 className="text-5xl md:text-6xl tracking-[-2.2px] font-semibold mb-4">{t.howItWorks.title}</h2>
          <p className="max-w-md mx-auto text-xl text-[#a1a1aa]">{t.howItWorks.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 relative">
          {t.howItWorks.steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="card rounded-3xl p-7 h-full flex flex-col">
                <div className="step-number mb-7">{step.number}</div>
                <div className="font-semibold text-2xl tracking-tight mb-3">{step.title}</div>
                <p className="text-[#a1a1aa] text-[15px] leading-relaxed flex-1">{step.description}</p>
              </div>
              
              {/* Connecting line on desktop */}
              {index < t.howItWorks.steps.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-3 w-6 h-px bg-[#262626]" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
