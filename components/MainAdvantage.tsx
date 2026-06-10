"use client";

import { useLanguage } from '@/lib/i18n';
import { Send, Check, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function MainAdvantage() {
  const { t } = useLanguage();

  return (
    <section className="section bg-[#111] border-y border-[#262626] py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-3.5 py-1 text-xs tracking-[2.5px] rounded-full bg-[#1f1f1f] border border-[#262626] text-[#a3e635] mb-4">
            {t.mainAdvantage.badge}
          </div>
          <h2 className="text-5xl md:text-[56px] leading-none tracking-[-2.4px] font-semibold mb-4 max-w-4xl mx-auto">
            {t.mainAdvantage.title}
          </h2>
          <p className="max-w-xl mx-auto text-xl text-[#a1a1aa]">{t.mainAdvantage.subtitle}</p>
        </div>

        {/* Real screenshot of live teacher session (replaces previous fake animated demo) */}
        <div className="max-w-[980px] mx-auto">
          <div className="mb-6">
            <div
              className="relative mx-auto rounded-2xl border border-[#262626] bg-[#0a0a0a] p-2 shadow-2xl"
              style={{
                boxShadow:
                  '0 25px 60px -15px rgba(0,0,0,0.65), 0 0 0 1px #262626, 0 0 40px -10px rgba(163, 230, 53, 0.06)',
              }}
            >
              <div className="relative rounded-xl overflow-hidden border border-[#1f1f1f]">
                <Image
                  src="/screenshots/live.png"
                  alt={t.mainAdvantage.screenshotAlt}
                  width={980}
                  height={551}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Three benefit highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            {[
              { icon: Send, label: t.mainAdvantage.features.instant },
              { icon: ArrowRight, label: t.mainAdvantage.features.progress },
              { icon: Check, label: t.mainAdvantage.features.sessions },
            ].map((f, idx) => (
              <div key={idx} className="flex items-center gap-3 px-5 py-4 rounded-2xl border border-[#262626] bg-[#0a0a0a] text-sm">
                <div className="text-[#a3e635]"><f.icon size={19} /></div>
                <div className="font-medium tracking-tight">{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
