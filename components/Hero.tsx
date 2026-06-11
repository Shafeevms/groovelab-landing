"use client";

import React from 'react';
import { useLanguage } from '@/lib/i18n';
import { usePostHog } from 'posthog-js/react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import RhythmVisualizer from './RhythmVisualizer';
import { buildAppUrl } from '@/lib/app-url';

interface HeroProps {
  onDemoClick: () => void;
}

export default function Hero({ onDemoClick }: HeroProps) {
  const { t, language } = useLanguage();
  const posthog = usePostHog();

  // Stub handler for solo CTA (scrolls to ForWhom section for now; real app navigation + UTM in Session 3).
  // Do not attach auth here.
  const scrollToForWhom = () => {
    posthog?.capture('solo_cta_click', { language });
    const el = document.getElementById('for-whom');
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="pt-20 pb-16 md:pt-24 md:pb-24 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#262626] bg-[#111] text-xs tracking-[1.5px] text-[#a1a1aa] mb-6">
          {t.hero.badge}
        </div>

        {/* Headline */}
        <h1 className="hero-title text-6xl md:text-[72px] leading-[0.96] tracking-[-3.2px] font-semibold mb-6 text-balance">
          {t.hero.title}
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-xl md:text-2xl text-[#a1a1aa] tracking-[-0.2px] mb-10">
          {t.hero.subtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-5">
          <button
            onClick={() => {
              posthog?.capture('cta_click', {
                location: 'hero',
                plan: null,
                language,
              });
              window.location.href = buildAppUrl({ utm_content: 'hero' });
            }}
            className="btn-primary w-full sm:w-auto px-9 py-3.5 rounded-full text-base flex items-center justify-center gap-2 group"
          >
            {t.hero.ctaPrimary}
            <ArrowRight className="group-hover:translate-x-0.5 transition" size={18} />
          </button>
          <button
            onClick={onDemoClick}
            className="btn-secondary w-full sm:w-auto px-8 py-3.5 rounded-full text-base"
          >
            {t.hero.ctaSecondary}
          </button>
          {/* Solo CTA — noticeable secondary style (not small gray text). Stub scrolls to ForWhom for solo value. */}
          <button
            onClick={scrollToForWhom}
            className="btn-secondary w-full sm:w-auto px-8 py-3.5 rounded-full text-base"
          >
            {t.hero.ctaSolo}
          </button>
        </div>

        <p className="text-xs text-[#52525b] tracking-wide">{t.hero.trustNote}</p>
        {/* TODO (founder): add real teacher co-author quote here later for social proof. Do not invent. */}
      </div>

      {/* Animated Rhythm Visualizer */}
      <div className="mt-14 md:mt-16 max-w-4xl mx-auto px-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          <RhythmVisualizer />
        </motion.div>
      </div>

      {/* Subtle decorative elements */}
      <div className="absolute top-32 left-8 w-px h-24 bg-gradient-to-b from-transparent via-[#262626] to-transparent hidden xl:block" />
      <div className="absolute top-32 right-8 w-px h-24 bg-gradient-to-b from-transparent via-[#262626] to-transparent hidden xl:block" />
    </section>
  );
}
