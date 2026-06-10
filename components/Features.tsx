"use client";

import React from 'react';
import { useLanguage } from '@/lib/i18n';
import { 
  Music2, Sparkles, BookOpen, Layers, Timer, FolderOpen 
} from 'lucide-react';
import { motion } from 'framer-motion';

const icons = [Music2, Sparkles, BookOpen, Layers, Timer, FolderOpen];

export default function Features() {
  const { t } = useLanguage();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06 } }
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] } }
  };

  return (
    <section id="features" className="section max-w-7xl mx-auto px-6 py-20 md:py-24">
      <div className="text-center mb-14">
        <div className="text-xs tracking-[3px] text-[#a3e635] mb-3 font-medium">{t.labels.capabilities}</div>
        <h2 className="text-5xl md:text-6xl tracking-[-2.2px] font-semibold mb-4">{t.features.title}</h2>
        <p className="max-w-lg mx-auto text-xl text-[#a1a1aa]">{t.features.subtitle}</p>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {t.features.items.map((feature, index) => {
          const Icon = icons[index];
          return (
            <motion.div 
              key={index} 
              variants={item}
              className="card group rounded-3xl p-8 flex flex-col"
            >
              <div className="feature-icon mb-8 group-hover:scale-105 transition-transform">
                <Icon size={24} />
              </div>
              <h3 className="font-semibold text-3xl tracking-[-1px] mb-4">{feature.title}</h3>
              <p className="text-[#a1a1aa] leading-relaxed text-[15px] flex-1">{feature.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
