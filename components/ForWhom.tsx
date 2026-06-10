"use client";

import React from 'react';
import { useLanguage } from '@/lib/i18n';
import { User, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { buildAppUrl } from '@/lib/app-url';

export default function ForWhom() {
  const { t } = useLanguage();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] } }
  };

  return (
    <section id="for-whom" className="section max-w-7xl mx-auto px-6 py-20 md:py-24 border-t border-[#262626]">
      <div className="text-center mb-14">
        <div className="text-xs tracking-[3px] text-[#a3e635] mb-3 font-medium">{t.labels.whoItsFor}</div>
        <h2 className="text-5xl md:text-6xl tracking-[-2.2px] font-semibold mb-4">{t.forWhom.title}</h2>
        <p className="max-w-lg mx-auto text-xl text-[#a1a1aa]">{t.forWhom.subtitle}</p>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid md:grid-cols-2 gap-6"
      >
        {/* Teachers — first for visual priority (teacher-first) */}
        <motion.div variants={item} className="card rounded-3xl p-9 md:p-10 group">
          <div className="feature-icon mb-8">
            <Users size={26} />
          </div>
          <h3 className="text-4xl tracking-[-1.6px] font-semibold mb-4">{t.forWhom.teachers.title}</h3>
          <p className="text-[#a1a1aa] text-[17px] leading-relaxed mb-8">{t.forWhom.teachers.description}</p>
          
          <ul className="space-y-3.5 text-[15px]">
            {t.forWhom.teachers.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-[#d4d4d8]">
                <span className="mt-1.5 block w-1 h-1 rounded-full bg-[#a3e635] flex-shrink-0" />
                {point}
              </li>
            ))}
          </ul>

          <button
            onClick={() => {
              window.location.href = buildAppUrl({ utm_content: 'forwhom_teacher' });
            }}
            className="mt-8 btn-primary w-full py-3 rounded-2xl text-sm font-semibold"
          >
            {t.forWhom.teachers.cta}
          </button>
        </motion.div>

        {/* Students — secondary but full value for solo practitioners (generator, rudiments, metronome, notation on Free) */}
        <motion.div variants={item} className="card rounded-3xl p-9 md:p-10 group">
          <div className="feature-icon mb-8">
            <User size={26} />
          </div>
          <h3 className="text-4xl tracking-[-1.6px] font-semibold mb-4">{t.forWhom.students.title}</h3>
          <p className="text-[#a1a1aa] text-[17px] leading-relaxed mb-8">{t.forWhom.students.description}</p>
          
          <ul className="space-y-3.5 text-[15px]">
            {t.forWhom.students.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-[#d4d4d8]">
                <span className="mt-1.5 block w-1 h-1 rounded-full bg-[#a3e635] flex-shrink-0" />
                {point}
              </li>
            ))}
          </ul>

          <button
            onClick={() => {
              window.location.href = buildAppUrl({ utm_content: 'forwhom_student' });
            }}
            className="mt-8 btn-secondary w-full py-3 rounded-2xl text-sm font-medium"
          >
            {t.forWhom.students.cta}
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
