"use client";

import React, { useState } from 'react';
import { useLanguage } from '@/lib/i18n';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section max-w-4xl mx-auto px-6 py-20 md:py-24">
      <div className="text-center mb-12">
        <div className="text-xs tracking-[3px] text-[#a3e635] mb-3 font-medium">QUESTIONS</div>
        <h2 className="text-5xl md:text-6xl tracking-[-2.2px] font-semibold mb-4">{t.faq.title}</h2>
        <p className="text-xl text-[#a1a1aa]">{t.faq.subtitle}</p>
      </div>

      <div className="divide-y divide-[#262626] border-y border-[#262626]">
        {t.faq.items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="py-1">
              <button
                onClick={() => toggle(index)}
                className="faq-question w-full flex items-center justify-between py-6 text-left group"
              >
                <span className="text-[17px] pr-8 font-medium tracking-tight">{item.question}</span>
                <ChevronDown 
                  className={`flex-shrink-0 text-[#a1a1aa] transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#a3e635]' : ''}`} 
                  size={20} 
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.26, ease: [0.23, 1, 0.32, 1] }}
                    className="faq-answer pb-7 pr-10 text-[#a1a1aa] text-[15px] leading-relaxed"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
