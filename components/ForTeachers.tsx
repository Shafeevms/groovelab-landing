"use client";

import React from 'react';
import { useLanguage } from '@/lib/i18n';
import { ArrowRight } from 'lucide-react';
import { buildAppUrl } from '@/lib/app-url';

export default function ForTeachers() {
  const { t } = useLanguage();

  return (
    <section id="for-teachers" className="section max-w-7xl mx-auto px-6 py-20 md:py-24">
      <div className="max-w-4xl mb-14">
        <div className="uppercase tracking-[3px] text-xs text-[#a3e635] mb-4 font-medium">{t.labels.dedicatedToEducators}</div>
        <h2 className="text-6xl md:text-[64px] tracking-[-2.8px] font-semibold leading-none mb-6">
          {t.forTeachers.title}
        </h2>
        <p className="text-2xl text-[#a1a1aa]">{t.forTeachers.subtitle}</p>
      </div>

      {/* Strong highlight statement */}
      <div className="mb-14 border-l-4 border-[#a3e635] pl-6">
        <div className="text-3xl md:text-[38px] tracking-[-1.5px] font-medium leading-tight max-w-3xl text-[#f5f5f5]">
          {t.forTeachers.highlight}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-x-10 gap-y-12 mb-14">
        {t.forTeachers.capabilities.map((cap, index) => (
          <div key={index} className="group">
            <div className="font-semibold tracking-tight text-[22px] mb-3 flex items-center gap-3">
              {cap.title}
              <div className="h-px flex-1 bg-[#262626] group-hover:bg-[#a3e635]/60 transition-colors" />
            </div>
            <p className="text-[#a1a1aa] leading-relaxed pr-4 text-[15px]">{cap.description}</p>
          </div>
        ))}
      </div>

      <button 
        onClick={() => {
          window.location.href = buildAppUrl({ utm_content: 'forteachers' });
        }}
        className="btn-primary inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-base group"
      >
        {t.forTeachers.cta}
        <ArrowRight className="group-hover:translate-x-0.5 transition" />
      </button>
    </section>
  );
}
