"use client";

import React from 'react';
import { useLanguage } from '@/lib/i18n';
import { ArrowRight } from 'lucide-react';
import { buildAppUrl } from '@/lib/app-url';

export default function FinalCta() {
  const { t } = useLanguage();

  return (
    <section className="section max-w-4xl mx-auto px-6 py-20 md:py-24 text-center border-t border-[#262626]">
      <h2 className="text-5xl md:text-6xl tracking-[-2.2px] font-semibold mb-6 text-balance">
        {t.finalCta.heading}
      </h2>
      <p className="max-w-2xl mx-auto text-xl text-[#a1a1aa] mb-10">
        {t.finalCta.sub}
      </p>

      <button
        onClick={() => {
          window.location.href = buildAppUrl({ utm_content: 'final_cta' });
        }}
        className="btn-primary inline-flex items-center gap-3 px-9 py-3.5 rounded-full text-base font-semibold group"
      >
        {t.finalCta.cta}
        <ArrowRight className="group-hover:translate-x-0.5 transition" size={18} />
      </button>
    </section>
  );
}
