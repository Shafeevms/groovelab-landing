"use client";

import React, { useState } from 'react';
import { useLanguage } from '@/lib/i18n';
import { usePostHog } from 'posthog-js/react';
import { Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { buildAppUrl } from '@/lib/app-url';

type Tab = 'students' | 'teachers';

export default function Pricing() {
  const { t, language } = useLanguage();
  const posthog = usePostHog();
  const [activeTab, setActiveTab] = useState<Tab>('students');

  const handleTab = (tab: Tab) => {
    // pricing_tab_switch removed (was not in the agreed required events list: only cta_click, language_change, $pageview)
    setActiveTab(tab);
  };

  const handlePlanCta = (plan: 'free' | 'basic' | 'pro' | 'teacher_s' | 'teacher_m' | 'teacher_l') => {
    posthog?.capture('cta_click', {
      location: `pricing_${plan}`,
      plan,
      language,
    });
    const utmContent = `pricing_${plan}`;
    const target = buildAppUrl({ utm_content: utmContent });
    setTimeout(() => {
      window.location.href = target;
    }, 0);
  };

  return (
    <section id="pricing" className="section bg-[#111] border-y border-[#262626] py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-11">
          <div className="text-xs tracking-[3px] text-[#a3e635] mb-3 font-medium">{t.pricing.label}</div>
          <h2 className="text-5xl md:text-6xl tracking-[-2.2px] font-semibold mb-4">{t.pricing.title}</h2>
          <p className="max-w-md mx-auto text-xl text-[#a1a1aa]">{t.pricing.subtitle}</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-[#0a0a0a] border border-[#262626] rounded-2xl p-1">
            <button
              onClick={() => handleTab('students')}
              className={`pricing-tab ${activeTab === 'students' ? 'active' : ''}`}
            >
              {t.pricing.tabs.students}
            </button>
            <button
              onClick={() => handleTab('teachers')}
              className={`pricing-tab ${activeTab === 'teachers' ? 'active' : ''}`}
            >
              {t.pricing.tabs.teachers}
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'students' && (
            <motion.div
              key="students"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto"
            >
              {/* Free */}
              <div className="card rounded-3xl p-8 flex flex-col">
                <div>
                  <div className="font-semibold text-2xl tracking-tight mb-1">{t.pricing.students.free.name}</div>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-5xl font-semibold tracking-tighter">{t.pricing.students.free.price}</span>
                  </div>
                  <div className="text-[#71717a] mb-5">{t.pricing.students.free.period}</div>
                  <div className="text-sm text-[#a1a1aa] mb-7">{t.pricing.students.free.description}</div>
                </div>

                <ul className="space-y-[13px] mb-9 text-[14.5px] flex-1">
                  {t.pricing.students.free.features.map((f, i) => (
                    <li key={i} className="flex gap-3 text-[#d4d4d8]"><Check size={17} className="mt-px text-[#a3e635] flex-shrink-0" />{f}</li>
                  ))}
                </ul>

                <button onClick={() => handlePlanCta('free')} className="btn-secondary w-full py-3 rounded-2xl text-sm font-medium">
                  {t.pricing.students.free.cta}
                </button>
              </div>

              {/* Basic - popular */}
              <div className="card rounded-3xl p-8 flex flex-col relative border-[#a3e635]/40">
                {t.pricing.students.basic.popular && (
                  <div className="absolute -top-3 right-8 text-xs font-medium tracking-widest bg-[#a3e635] text-black px-4 py-px rounded-full">{t.pricing.mostPopular}</div>
                )}
                <div>
                  <div className="font-semibold text-2xl tracking-tight mb-1">{t.pricing.students.basic.name}</div>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-5xl font-semibold tracking-tighter">{t.pricing.students.basic.price}</span>
                    <span className="text-[#71717a]">{t.misc.perMonth}</span>
                  </div>
                  <div className="text-[#71717a] mb-5">{t.pricing.students.basic.period}</div>
                  <div className="text-sm text-[#a1a1aa] mb-7">{t.pricing.students.basic.description}</div>
                </div>

                <ul className="space-y-[13px] mb-9 text-[14.5px] flex-1">
                  {t.pricing.students.basic.features.map((f, i) => (
                    <li key={i} className="flex gap-3 text-[#d4d4d8]"><Check size={17} className="mt-px text-[#a3e635] flex-shrink-0" />{f}</li>
                  ))}
                </ul>

                <button onClick={() => handlePlanCta('basic')} className="btn-primary w-full py-3 rounded-2xl text-sm font-semibold">
                  {t.pricing.students.basic.cta}
                </button>
              </div>

              {/* Pro */}
              <div className="card rounded-3xl p-8 flex flex-col">
                <div>
                  <div className="font-semibold text-2xl tracking-tight mb-1">{t.pricing.students.pro.name}</div>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-5xl font-semibold tracking-tighter">{t.pricing.students.pro.price}</span>
                    <span className="text-[#71717a]">{t.misc.perMonth}</span>
                  </div>
                  <div className="text-[#71717a] mb-5">{t.pricing.students.pro.period}</div>
                  <div className="text-sm text-[#a1a1aa] mb-7">{t.pricing.students.pro.description}</div>
                </div>

                <ul className="space-y-[13px] mb-9 text-[14.5px] flex-1">
                  {t.pricing.students.pro.features.map((f, i) => (
                    <li key={i} className="flex gap-3 text-[#d4d4d8]"><Check size={17} className="mt-px text-[#a3e635] flex-shrink-0" />{f}</li>
                  ))}
                </ul>

                <button onClick={() => handlePlanCta('pro')} className="btn-secondary w-full py-3 rounded-2xl text-sm font-medium">
                  {t.pricing.students.pro.cta}
                </button>
              </div>
            </motion.div>
          )}

          {activeTab === 'teachers' && (
            <motion.div
              key="teachers"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto"
            >
              {/* Teacher S */}
              <div className="card rounded-3xl p-8 flex flex-col">
                <div>
                  <div className="font-semibold text-2xl tracking-tight mb-1">{t.pricing.teachers.s.name}</div>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-5xl font-semibold tracking-tighter">{t.pricing.teachers.s.price}</span>
                    <span className="text-[#71717a]">{t.misc.perMonth}</span>
                  </div>
                  <div className="text-[#a1a1aa] mb-5">{t.pricing.teachers.s.description}</div>
                  <div className="text-sm text-[#a1a1aa] mb-7">{t.pricing.teachers.s.period}</div>
                </div>

                <ul className="space-y-[13px] mb-9 text-[14.5px] flex-1">
                  {t.pricing.teachers.s.features.map((f, i) => (
                    <li key={i} className="flex gap-3 text-[#d4d4d8]"><Check size={17} className="mt-px text-[#a3e635] flex-shrink-0" />{f}</li>
                  ))}
                </ul>

                <button onClick={() => handlePlanCta('teacher_s')} className="btn-secondary w-full py-3 rounded-2xl text-sm font-medium">
                  {t.pricing.teachers.s.cta}
                </button>
              </div>

              {/* Teacher M - popular */}
              <div className="card rounded-3xl p-8 flex flex-col relative border-[#a3e635]/40">
                {t.pricing.teachers.m.popular && (
                  <div className="absolute -top-3 right-8 text-xs font-medium tracking-widest bg-[#a3e635] text-black px-4 py-px rounded-full">{t.pricing.bestValue}</div>
                )}
                <div>
                  <div className="font-semibold text-2xl tracking-tight mb-1">{t.pricing.teachers.m.name}</div>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-5xl font-semibold tracking-tighter">{t.pricing.teachers.m.price}</span>
                    <span className="text-[#71717a]">{t.misc.perMonth}</span>
                  </div>
                  <div className="text-[#a1a1aa] mb-5">{t.pricing.teachers.m.description}</div>
                  <div className="text-sm text-[#a1a1aa] mb-7">{t.pricing.teachers.m.period}</div>
                </div>

                <ul className="space-y-[13px] mb-9 text-[14.5px] flex-1">
                  {t.pricing.teachers.m.features.map((f, i) => (
                    <li key={i} className="flex gap-3 text-[#d4d4d8]"><Check size={17} className="mt-px text-[#a3e635] flex-shrink-0" />{f}</li>
                  ))}
                </ul>

                <button onClick={() => handlePlanCta('teacher_m')} className="btn-primary w-full py-3 rounded-2xl text-sm font-semibold">
                  {t.pricing.teachers.m.cta}
                </button>
              </div>

              {/* Teacher L */}
              <div className="card rounded-3xl p-8 flex flex-col">
                <div>
                  <div className="font-semibold text-2xl tracking-tight mb-1">{t.pricing.teachers.l.name}</div>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-5xl font-semibold tracking-tighter">{t.pricing.teachers.l.price}</span>
                    <span className="text-[#71717a]">{t.misc.perMonth}</span>
                  </div>
                  <div className="text-[#a1a1aa] mb-5">{t.pricing.teachers.l.description}</div>
                  <div className="text-sm text-[#a1a1aa] mb-7">{t.pricing.teachers.l.period}</div>
                </div>

                <ul className="space-y-[13px] mb-9 text-[14.5px] flex-1">
                  {t.pricing.teachers.l.features.map((f, i) => (
                    <li key={i} className="flex gap-3 text-[#d4d4d8]"><Check size={17} className="mt-px text-[#a3e635] flex-shrink-0" />{f}</li>
                  ))}
                </ul>

                <button onClick={() => handlePlanCta('teacher_l')} className="btn-secondary w-full py-3 rounded-2xl text-sm font-medium">
                  {t.pricing.teachers.l.cta}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <p className="text-center text-xs text-[#52525b] mt-8 tracking-wide">{t.pricing.billedMonthly} · {t.pricing.limits}</p>
      </div>
    </section>
  );
}
